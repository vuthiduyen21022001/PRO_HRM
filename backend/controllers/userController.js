import {UserModel} from "../models/userModel.js";
import bcrypt from "bcrypt";

export const addUser = async (req, res) => {
  console.log("data", req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newUser = await new UserModel({
      username: req.body.username,
      password: hashed,
      email: req.body.email,
      employee_id: req.body.employee_id,
      admin: req.body.admin,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getId = async (req, res) => {
  try {
    const users = await UserModel.findById(req.params.id).populate("employee_id");
    console.log("user", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editUser = async (req, res) => {
  console.log("dtat",req.body)

  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const {id} = req.params;
    const updateUser = {
      username: req.body.username,
      password: hashed,
      email: req.body.email,
      employee_id: req.body.employee_id,
      admin: req.body.admin,
    };
    await UserModel.findByIdAndUpdate(id, {$set: updateUser}, {new: true});
    res.json({status: "User Updated"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};
//DELETE A USER
export const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

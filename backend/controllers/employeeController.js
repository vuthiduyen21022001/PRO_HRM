import {DepartmentModel} from "../models/departmentModel.js";
import {employeeModel} from "../models/employeeModel.js";
import {PositionModel} from "../models/positionModel.js";
import {UserModel} from "../models/userModel.js";
export const addEmployee = async (req, res) => {
  console.log("addEmployee", req.body);
  try {
    const newEmployee = await new employeeModel({
      full_name: req.body.full_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      join_date: req.body.join_date,
      department_id: req.body.department_id,
      position_id: req.body.department_id,
      salary_id: req.body.department_id,
    });
    const employee = await newEmployee.save();
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getEmployee = async (req, res) => {
  try {
    // find: lay all
    const employee = await employeeModel
      .find()
      .sort({createdAt: -1})
      .populate("department_id")
      .populate("position_id")
      .populate("salary_id");
    // console.log("employee", employee);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndDelete(req.params.id);

    res.status(200).json({status: "Employee Deleted"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};
export const editEmployee = async (req, res) => {
  try {
    const {id} = req.params;
    const employee = {
      full_name: req.body.full_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      join_date: req.body.join_date,
      department_id: req.body.department_id,
      position_id: req.body.department_id,
      salary_id: req.body.department_id,
    };
    await employeeModel.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: "Employee Updated"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};

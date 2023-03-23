import {SalaryModel} from "../models/salarieModel.js";

export const addDepartment = async (req, res) => {
  try {
    const newDepartment = await new SalaryModel({
      salary: req.body.salary,
      bonus: req.body.bonus,
      deduction: req.body.deduction,
    });
    const department = await newDepartment.save();
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getDepartment = async (req, res) => {
  try {
    // find: lay all
    const department = await SalaryModel.find();
    // console.log("employee", employee);
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editDepartment = async (req, res) => {
  try {
    const {id} = req.params;
    const department = {
      salary: req.body.salary,
      bonus: req.body.bonus,
      deduction: req.body.deduction,
    };
    await SalaryModel.findByIdAndUpdate(id, {$set: department}, {new: true});
    res.json({status: "Departmen Updated"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};
export const deleteDepartment = async (req, res) => {
  try {
    // find: lay all
    const department = await SalaryModel.findByIdAndDelete(req.params.id);
    // console.log("employee", employee);
    res.status(200).json({status: "Departmen Deleted"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};

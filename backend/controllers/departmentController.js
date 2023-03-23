import {DepartmentModel} from "../models/departmentModel.js";

export const addDepartment = async (req, res) => {
  try {
    const newDepartment = await new DepartmentModel({
      name: req.body.name,
      description: req.body.description,
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
    const department = await DepartmentModel.find();
    // console.log("employee", employee);
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editDepartment = async (req, res) => {
  try {
    const {id} = req.params;
    console.log("id: ", id);
    const department = {
      name: req.body.name,
      description: req.body.description,
    };
    await DepartmentModel.findByIdAndUpdate(
      id,
      {$set: department},
      {new: true}
    );
    res.json({status: "Departmen Updated"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};
export const deleteDepartment = async (req, res) => {
  try {
    // find: lay all
    const department = await DepartmentModel.findByIdAndDelete(req.params.id);
    // console.log("employee", employee);
    res.status(200).json({status: "Departmen Deleted"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};

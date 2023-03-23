import {PositionModel} from "../models/positionModel.js";

export const addPosition = async (req, res) => {
  try {
    const newPosition = await new PositionModel({
      name: req.body.name,
      description: req.body.description,
      salary: req.body.salary,
    });
    const position = await newPosition.save();
    res.status(200).json(position);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getPosition = async (req, res) => {
  try {
    const position = await PositionModel.find();
    res.status(200).json(position);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editPosition = async (req, res) => {
  try {
    const {id} = req.params;
    const position = {
      name: req.body.name,
      description: req.body.description,
      salary: req.body.salary,
    };
    await PositionModel.findByIdAndUpdate(id, {$set: position}, {new: true});
    res.json({status: "Position Updated"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};
export const deletePosition = async (req, res) => {
  try {
    const position = await PositionModel.findByIdAndDelete(req.params.id);

    res.status(200).json({status: "Position Deleted"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};

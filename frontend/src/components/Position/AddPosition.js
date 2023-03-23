import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {FormGroup, Input, Label} from "../Employee/Forms";
import {message} from "antd";
import {positionService} from "../../services/position.service";
import {
  postPositionStart,
  postPositionSuccess,
} from "../../redux/positionSlice";
import {postDepartmentFailed} from "../../redux/departmentSlice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
// const Label = styled.label`
//   padding: 8px;
//   font-size: 16px;
// `;
// const Input = styled.input`
//   margin-bottom: 10px;
//   padding: 8px;
//   font-size: 16px;
//   border: 1px solid #ccc;
// `;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background: #0069d9;
  }
`;
export default function AddPosition() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const {id} = useParams();
  const data = useSelector((state) => {
    return state.departmentSlice.updateDepartment;
  });
  console.log("data: ", data);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const postPosition = async (value) => {
    dispatch(postPositionStart());
    try {
      await positionService.postPosition(value);
      dispatch(postPositionSuccess());
      message.success("Thêm thành công");

      history("/position");
    } catch (error) {
      dispatch(postDepartmentFailed());
      message.error("Thêm thất bại");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPosition = {
      name: name,
      description: description,
      salary: salary,
    };
    postPosition(newPosition);
  };
  return (
    <>
      <h2>Thêm thông tin chức vụ</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Tên chức vụ</Label>
        <Input
          type="text"
          placeholder="Tên phòng ban"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Label>Ghi chú</Label>
        <Input
          type="text"
          placeholder="Mô tả"
          //   value={description || ""}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Label>Lương</Label>
        <Input
          type="text"
          placeholder="Mô tả"
          //   value={description || ""}
          onChange={(event) => setSalary(event.target.value)}
        />
        <Button type="submit">Lưu</Button>
      </Form>
    </>
  );
}

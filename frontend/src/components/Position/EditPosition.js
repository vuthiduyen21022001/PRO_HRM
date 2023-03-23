import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {FormGroup, Input, Label} from "../Employee/Forms";
import {message} from "antd";
import {positionService} from "../../services/position.service";
import {
  updateFailed,
  updateStart,
  updateSuccess,
} from "../../redux/positionSlice";

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
  console.log("id: ", id);

  const data = useSelector((state) => {
    return state.departmentSlice.updateDepartment;
  });
  console.log("data: ", data);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const updatePosition = async (value) => {
    dispatch(updateStart());
    try {
      await positionService.updatePosition(id, value);
      message.success("Sửa thành công");
      history("/position");
      dispatch(updateSuccess());
    } catch (error) {
      dispatch(updateFailed());
      message.error("Sửa thất bại");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const update = {
      name: name,
      description: description,
      salary: salary,
    };
    updatePosition(update);
  };
  return (
    <>
      <h2>Cấp nhật thông tin chức vụ</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Tên chức vụ</Label>
        <Input
          type="text"
          placeholder="Tên phòng ban"
          //   value={name}
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

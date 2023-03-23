import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {
  updateError,
  updateStart,
  updateSuccess,
} from "../../redux/departmentSlice";
import {departmentService} from "../../services/department.service";
import {useNavigate, useParams} from "react-router-dom";
import {FormGroup, Input, Label} from "../Employee/Forms";
import {message} from "antd";

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
export default function EditDepartment() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const {id} = useParams();
  const data = useSelector((state) => {
    return state.departmentSlice.updateDepartment;
  });
  console.log("data: ", data);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const updateDepartment = async (department) => {
    dispatch(updateStart());
    try {
      const res = await departmentService.updateDepartment(id, department);
      dispatch(updateSuccess(res.data));
      message.success("Cập nhật thành công");

      history("/department");
    } catch (error) {
      dispatch(updateError());
      message.error("Cập nhật thất bại");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const upDepartment = {
      name: name,
      description: description || "",
    };
    updateDepartment(upDepartment);
    console.log("ok");
  };
  return (
    <>
      <h2>Sửa thông tin phòng</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Tên phòng ban</Label>
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
          // value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button type="submit">Lưu</Button>
      </Form>
    </>
  );
}

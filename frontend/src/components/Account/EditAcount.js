


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { FormGroup, Input, Label, Select } from "../Employee/Forms";
import { Radio, message } from "antd";
import { userService } from "../../services/user.service";
import {
  getUserIdFailed,
  getUserIdStart,
  getUserIdSuccess,
  postUserFailed,
  postUserStart,
  postUserSuccess,
  updateError,
  updateStart,
  updateSuccess,
} from "../../redux/userSlice";

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
export default function EditAcount() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { id } = useParams();
  const data = useSelector((state) => {
    return state.employeeSlice.employees.allEmployee;
  });
 
  const user = useSelector((state) => state.userSlice?.userId?.oneUser);

  console.log("user: ", user);
  const [username, setUsername] = useState(user?.username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [admin, setAdmin] = useState(user?.admin);
  console.log("admin: ", admin);

  const [employee, setEmployee] = useState("");

  
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setAdmin(e.target.value);
  };
  useEffect(() => {
    dispatch(getUserIdStart());
    userService
      .getUserListId(id)
      .then((res) => {
        console.log("data1",res.data)
        dispatch(getUserIdSuccess(res.data))

      })

    .catch((err) => {
      dispatch(getUserIdFailed())

    });
}, []);
const update = async (value) => {
  dispatch(updateStart());
  try {
    await userService.updateUser(id,value);
    dispatch(updateSuccess());
    message.success("Sửa thành công");

    history("/account");
  } catch (error) {
    dispatch(updateError());
    message.error("Sửa thất bại");
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const updateUser = {
    username: username,
    password: password,
    email: email,
    admin: admin,
    employee_id: employee,
  };
  // console.log("newPosition: ", newUser);

  update(updateUser);
};
return (
  <>
    <h2>Sửa thông tin tài khoản</h2>
    <Form onSubmit={handleSubmit}>
      <Label>Tên đăng nhập</Label>
      <Input
        type="text"
          value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Label>email</Label>
      <Input
        type="text"
        placeholder="Mô tả"
          value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Label>Mật khẩu</Label>
      <Input
        type="text"
        // placeholder="Mô tả"
        //   value={description || ""}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Label>Loại tài khoản</Label>
      <Radio.Group
        onChange={onChange}
        value={admin}
        style={{ marginBottom: "5px" }}
      >
        <Radio value="true">Admin</Radio>
        <Radio value="false">User</Radio>
      </Radio.Group>
      <Label htmlFor="label">Tên nhân viên</Label>
      <Select
        onChange={(e) => setEmployee(e.target.value)}
        id="cars"
        name="cars"
      >
        {data.map((index) => (
          <option key={index._id} value={index._id}>
            {index.full_name}
          </option>
        ))}
      </Select>
      <button type="submit" className="btn" defaultValue="Đăng nhập">
        Lưu
      </button>
    </Form>
  </>
);
}

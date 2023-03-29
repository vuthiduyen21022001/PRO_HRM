import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {FormGroup, Input, Label, Select} from "../Employee/Forms";
import {Radio, message} from "antd";
import {positionService} from "../../services/position.service";
import {
  postPositionStart,
  postPositionSuccess,
} from "../../redux/positionSlice";
import {postDepartmentFailed} from "../../redux/departmentSlice";
import {userService} from "../../services/user.service";
import {
  postUserFailed,
  postUserStart,
  postUserSuccess,
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
export default function AddPosition() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const {id} = useParams();
  const data = useSelector((state) => {
    return state.employeeSlice.employees.allEmployee;
  });
  console.log("data: ", data);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(true);
  const [employee, setEmployee] = useState("");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setAdmin(e.target.value);
  };

  const postPosition = async (value) => {
    dispatch(postUserStart());
    try {
      await userService.postUser(value);
      dispatch(postUserSuccess());
      message.success("Thêm thành công");

      history("/account");
    } catch (error) {
      dispatch(postUserFailed());
      message.error("Thêm thất bại");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username: username,
      password: password,
      email: email,
      admin: admin,
      employee_id: employee,
    };
    console.log("newPosition: ", newUser);

    postPosition(newUser);
  };
  return (
    <>
      <h2>Thêm thông tin tài khoản</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Tên đăng nhập</Label>
        <Input
          type="text"
          placeholder="Tên phòng ban"
          //   value={name}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Label>email</Label>
        <Input
          type="text"
          placeholder="Mô tả"
          //   value={description || ""}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Label>Mật khẩu</Label>
        <Input
          type="text"
          placeholder="Mô tả"
          //   value={description || ""}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Label>Loại tài khoản</Label>
        <Radio.Group
          onChange={onChange}
          value={admin}
          style={{marginBottom: "5px"}}
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
          Thêm
        </button>
      </Form>
    </>
  );
}

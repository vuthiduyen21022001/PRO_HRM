import {message} from "antd";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {
  salaryFailed,
  salaryStart,
  salarySuccess,
  updateError,
  updateStart,
  updateSuccess,
} from "../../redux/salarySlice";
import {salaryService} from "../../services/salari.service";
import {FormGroup, Input, Label} from "../Employee/Forms";
// import {FormGroup, Label, Input, Message, Select} from "./Forms";

// import {updateError, updateStart, updateSuccess} from "../../redux/salarySlice";
// import {salaryService} from "../../services/salari.service";

const Form = styled.form`
  /* display: flex; */
  justify-content: center;
  margin-top: 60px;
  width: 300px;
  /* .form_left {
    width: 340px;
  }
  .form_right {
    width: 340px;
    margin-left: 47px;
  } */
`;
// const Label = styled.label`
//   margin-bottom: 0.5em;
//   color: black;
//   display: block;
// `;
// const Input = styled.input`
//   padding: 0.5em;
//   color: black;
//   background: white;
//   border: 2px solid black;
//   border-radius: 10px;
//   width: 100%;
//   margin-bottom: 0.5em;
// `;

// const Button = styled.button`
//   padding: 8px 16px;
//   font-size: 16px;
//   background: #007bff;
//   color: #fff;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background: #0069d9;
//   }
// `;
export default function AddSalary() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [deduction, setDeduction] = useState("");

  const post = async (salary) => {
    dispatch(salaryStart());
    try {
      const res = await salaryService.postSalary(salary);
      message.success("Thêm thành công");
      dispatch(salarySuccess(res.data));
      history("/salaries");
    } catch (error) {
      message.error("Thêm thất bại!");

      dispatch(salaryFailed());
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const update = {
      salary: salary,
      bonus: bonus,
      deduction: deduction,
    };
    post(update);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Lương </Label>
      <Input
        type="text"
        placeholder="Lương"
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
      />
      <Label>Thưởng</Label>
      <Input
        type="text"
        placeholder="Thưởng"
        value={bonus}
        onChange={(event) => setBonus(event.target.value)}
      />
      <Label>Phụ Cấp</Label>
      <Input
        type="text"
        placeholder="Phụ Cấp"
        value={deduction}
        onChange={(event) => setDeduction(event.target.value)}
      />
      <button type="submit">Lưu</button>
    </Form>
  );
}

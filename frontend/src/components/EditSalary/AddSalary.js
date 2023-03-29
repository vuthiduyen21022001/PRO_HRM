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

// const Form = styled.form`
//   /* display: flex; */
//   justify-content: center;
//   margin-top: 60px;
//   width: 300px;
//   /* .form_left {
//     width: 340px;
//   }
//   .form_right {
//     width: 340px;
//     margin-left: 47px;
//   } */
// `;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
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
  const [tax,setTax] = useState("");
  const [total_salary,setTotal_salary] = useState("");

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
      tax: tax,
      total_salary: total_salary,
    };
    post(update);
  };
  return (
    <>
          <h2>Thêm thông tin lương</h2>


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
       <Label>Thuế</Label>
        <Input
        type="text"
        placeholder="Thuế"
        value={tax}
        onChange={(event) => setTax(event.target.value)}
        />
          {/* <Label>Tổng Lương</Label>
        <Input
        type="text"
        placeholder="Tổng Lương"
        value={total_salary}
        onChange={(event) => setTotal_salary(event.target.value)}
        /> */}
        
     <Button type="submit">Lưu</Button>

    </Form>
    </>
  );
}

import { message } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateError, updateStart, updateSuccess } from "../../redux/salarySlice";
import { salaryService } from "../../services/salari.service";
import { Input, Label } from "../Employee/Forms";
// import {updateError, updateStart, updateSuccess} from "../../redux/salarySlice";
// import {salaryService} from "../../services/salari.service";

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
export default function EditSalary() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { id } = useParams();

  const data = useSelector((state) => {
    return state.salarySlice.updateSalary;
  });
  const [salary, setSalary] = useState(data.salary);
  const [bonus, setBonus] = useState(data.bonus);
  const [deduction, setDeduction] = useState(data.deduction);
  const [tax, setTax] = useState("");
  const [total_salary, setTotal_salary] = useState("");

  const updateSalary = async (salary) => {
    dispatch(updateStart());
    try {
      const res = await salaryService.updateSalary(id, salary);
      dispatch(updateSuccess(res.data));
      message.success("Sửa thành công");

      history("/salaries");
    } catch (error) {
      dispatch(updateError());
      message.error("Sửa thất bại");
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
    updateSalary(update);
  };
  return (
    <>
      <h2>Sửa thông tin lương</h2>
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

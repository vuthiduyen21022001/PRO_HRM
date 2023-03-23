import React, {useState} from "react";
import {FormGroup, Label, Input, Message, Select} from "./Forms";
import {useDispatch, useSelector} from "react-redux";
import {
  postEmployeeFailed,
  postEmployeeStart,
  postEmployeeSuccess,
  updateFailure,
  updateStart,
  updateSuccess,
} from "../../redux/employeeSlice";
import {employeeService} from "../../services/employee.service";
import {message} from "antd";
import {useNavigate, useParams} from "react-router-dom";

export default function Edit() {
  const {id} = useParams();
  const data = useSelector(
    (state) => state.departmentSlice.departments.allDepartments
  );
  // console.log("data 22: ", data);
  const positions = useSelector((state) => {
    return state.positionSlice.positions.allPosition;
  });
  const salary = useSelector((state) => {
    return state.salarySlice.salaries.allSalary;
  });
  const dispatch = useDispatch();
  const history = useNavigate();
  // console.log("data: ", salary);
  const [full_name, setFull_name] = useState("");
  console.log("full_name: ", full_name);
  const [email, setEmail] = useState("");
  console.log("email: ", email);
  const [phone, setPhone] = useState("");
  console.log("phone: ", phone);
  const [address, setAddress] = useState("");
  console.log("address: ", address);
  const [gender, setGender] = useState("");
  console.log("gender: ", gender);
  const [date_of_birth, setDate_of_birth] = useState("");
  console.log("date: ", date_of_birth);
  const [join_date, setJoin_date] = useState("");
  console.log("join_date: ", join_date);
  const [deparment, setDeparment] = useState("");
  console.log("deparment: ", deparment);
  const [position, setPosition] = useState("");
  console.log("poition: ", position);
  const [salarie, setSalarie] = useState("");
  console.log("deparment: ", salarie);

  const updateEmployee = async (post) => {
    dispatch(updateStart());
    await employeeService
      .putEmployee(id, post)
      .then((res) => {
        message.success("Cập nhật thành công");
        dispatch(updateSuccess());
      })
      .catch((err) => {
        message.error("Cập nhật thất bại!");
        dispatch(updateFailure());
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const employe = {
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
      date_of_birth: date_of_birth,
      join_date: join_date,
      department_id: deparment,
      position_id: position,
      salary_id: salarie,
    };
    updateEmployee(employe);
  };
  return (
    <div>
      <h3>Sửa thông tin nhân viên</h3>
      <form method="post" onSubmit={handleAdd}>
        <FormGroup>
          <div className="form_left">
            <Label htmlFor="label">Họ & tên</Label>
            <Input onChange={(e) => setFull_name(e.target.value)} id="label" />
            <Label htmlFor="label">Email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} id="label" />
            <Label htmlFor="label">Số điện thoại</Label>
            <Input onChange={(e) => setPhone(e.target.value)} id="label" />
            <Label htmlFor="label">Địa chỉ</Label>
            <Input onChange={(e) => setAddress(e.target.value)} id="label" />
            <Label htmlFor="label">Giới tính</Label>
            <Select
              onChange={(e) => setGender(e.target.value)}
              id="cars"
              name="cars"
            >
              <option value="Nam">Nam</option>
              <option value="Nữ ">Nữ</option>
            </Select>
          </div>
          <div className="form_right">
            <Label htmlFor="label">Ngày sinh</Label>
            <Input
              onChange={(e) => setDate_of_birth(e.target.value)}
              id="label"
              type="date"
            />
            <Label htmlFor="label">Ngày làm việc</Label>
            <Input
              onChange={(e) => setJoin_date(e.target.value)}
              id="label"
              type="date"
            />
            <Label htmlFor="label">Phòng ban</Label>
            <Select
              onChange={(e) => setDeparment(e.target.value)}
              id="deparments"
              name="deparments"
            >
              {data.map((index) => (
                <option key={index?._id} value={index?._id}>
                  {index?.name}
                </option>
              ))}
            </Select>
            <Label htmlFor="label">Chức vụ</Label>
            <Select
              onChange={(e) => setPosition(e.target.value)}
              id="cars"
              name="cars"
            >
              {positions.map((index) => (
                <option key={index._id} value={index._id}>
                  {index.name}
                </option>
              ))}
            </Select>
            <Label htmlFor="label">Lương</Label>
            <Select
              onChange={(e) => setSalarie(e.target.value)}
              id="cars"
              name="cars"
            >
              {salary.map((index) => (
                <option key={index._id} value={index._id}>
                  {index.salary}
                </option>
              ))}
            </Select>
          </div>
        </FormGroup>
        <button type="submit" className="btn" defaultValue="Đăng nhập">
          Thêm
        </button>
      </form>
    </div>
  );
}

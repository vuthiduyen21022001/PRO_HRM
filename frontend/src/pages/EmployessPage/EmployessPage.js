import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import axios from "axios";
import {Menu, Space, Table, Tag, Button, message} from "antd";
import {userService} from "../../services/user.service";
import {getListUser} from "../../redux/userSlice";
import {useNavigate} from "react-router-dom";
import {employeeService} from "../../services/employee.service";
import {
  getEmployeeFailed,
  getEmployeeStart,
  getEmployeeSuccess,
} from "../../redux/employeeSlice";
import {localStorageServ} from "../../services/localStorage.service";

const columns = [
  {
    title: "Họ & Tên",
    dataIndex: "full_name",
    key: "full_name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "SĐT",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phái",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Ngày Sinh",
    dataIndex: "date_of_birth",
    key: "date_of_birth",
  },
  {
    title: "Phòng",
    dataIndex: ["department_id", "name"],
    key: "department_id",
  },
  {
    title: "Chức vụ",
    dataIndex: ["position_id", "name"],
    key: "position_id ",
    render: (text) => {
      if (text == "Lễ tân") {
        return <Tag color="red">Quản trị</Tag>;
      } else {
        return <Tag color="blue"> Lễ tân </Tag>;
      }
    },
  },
  {
    title: "Lương",
    dataIndex: ["employee_id", "full_name"],
    key: "employee_id",
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    key: "action",
  },
];
export default function EmployessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.employeeSlice.employees.allEmployee;
  });

  const admin = useSelector((state) => state.userSlice.login.currentUser);
  useEffect(() => {
    let fetchListEmployee = () => {
      dispatch(getEmployeeStart());
      employeeService
        .getAllEmployee()
        .then(function (res) {
          let employee_list = res.data.map((data) => {
            return {
              ...data,
              action: <Action onSuccess={fetchListEmployee} id={data._id} />,
            };
          });
          dispatch(getEmployeeSuccess(employee_list));
          localStorageServ.employee.set(res.data);
        })
        .catch(function (err) {
          dispatch(getEmployeeFailed());
        });
    };
    fetchListEmployee();
  }, []);
  const handlerAdd = () => {
    navigate("/quanlynhanvien/themnhanvien");
  };
  return (
    <div>
      {admin.admin ? (
        <Button onClick={handlerAdd} type="primary">
          Thêm
        </Button>
      ) : (
        <div></div>
      )}

      <div className="">{<Table columns={columns} dataSource={data} />}</div>
    </div>
  );
}

const Action = ({onSuccess, id}) => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate(`/employee/updateemployee/${id}`);
  };
  const handleEmployeeDelete = () => {
    employeeService
      .deleteEmployee(id)
      .then((res) => {
        message.success("Xóa thành công!");
        onSuccess();
      })
      .catch((err) => {
        message.error("Xóa thất bại!");
      });
  };
  return (
    <div className="space-x-5">
      <Button
        style={{
          backgroundColor: "#dbdb12",
          color: "white",
          border: "none",
          marginRight: "10px",
        }}
        className="bg-blue-500 rounded text-white px-5 py-3"
        onClick={handleEditUser}
      >
        Sửa
      </Button>
      <Button onClick={handleEmployeeDelete} type="primary" danger>
        Xóa
      </Button>
    </div>
  );
};

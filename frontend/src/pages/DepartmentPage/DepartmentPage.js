import React, {useEffect} from "react";

import {Button, Space, Table, Tag, message} from "antd";
import {departmentService} from "../../services/department.service";
import {useDispatch, useSelector} from "react-redux";
import {
  deleteDepartmentFailed,
  deleteDepartmentStart,
  deleteDepartmentSuccess,
  getDepartmentFailed,
  getDepartmentStart,
  getDepartmentSuccess,
  getListDepartment,
} from "../../redux/departmentSlice";
import {useNavigate} from "react-router-dom";
import {deleteEmployeeStart} from "../../redux/employeeSlice";
import {localStorageServ} from "../../services/localStorage.service";
const columns = [
  {
    title: "Tên phòng ban",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ghi chú",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    key: "action",
  },
];
export default function DepartmentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.departmentSlice?.departments?.allDepartments;
  });
  const admin = useSelector((state) => state.userSlice.login.currentUser);

  useEffect(() => {
    let fetchListDepartment = () => {
      dispatch(getDepartmentStart());
      departmentService
        .getdepartmentList()
        .then((res) => {
          console.log("data",res.data)
          let departmentList = res.data.map((data) => {
            return {
              ...data,
              action: <Action onSuccess={fetchListDepartment} id={data._id} />,
            };
          });
          localStorageServ.deparment.set(res.data);
          dispatch(getDepartmentSuccess(departmentList));
        })

        .catch((err) => {
          dispatch(getDepartmentFailed());
        });
    };
    fetchListDepartment();
  }, []);
  const handlerAdd = () => {
    navigate("/adddepartment");
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

const Action = ({id, onSuccess}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditDepartment = () => {
    navigate(`/editdepartment/${id}`);
  };
  const handleDeleteDepartment = () => {
    dispatch(deleteDepartmentStart());
    departmentService
      .deleteDepartment(id)
      .then((res) => {
        message.success("Xóa thành công!");
        dispatch(deleteDepartmentSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(deleteDepartmentFailed());
        message.error("Xóa thất bại!");
      });
    console.log("ok");
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
        onClick={handleEditDepartment}
      >
        Sửa
      </Button>
      <Button onClick={handleDeleteDepartment} type="primary" danger>
        Xóa
      </Button>
    </div>
  );
};

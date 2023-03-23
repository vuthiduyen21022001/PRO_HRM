import React, {useEffect} from "react";

import {Button, Table, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getListDepartment} from "../../redux/departmentSlice";
import {useNavigate} from "react-router-dom";
import {userService} from "../../services/user.service";
import {
  getUserFailed,
  getUserStart,
  getUserSuccess,
} from "../../redux/userSlice";
const columns = [
  {
    title: "Tên nhân viên",
    dataIndex: ["employee_id", "full_name"],
    key: "full_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên đăng nhập",
    dataIndex: "username",
    key: "username",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Chức năng",
    dataIndex: "action",
    key: "action",
  },
];
export default function AccountPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice.login.currentUser);
  const data = useSelector((state) => state.userSlice?.users?.allUser);
  console.log("data123: ", data);

  useEffect(() => {
    dispatch(getUserStart());
    userService
      .userList(user.accessToken)
      .then((res) => {
        let departmentList = res.data.map((depart) => {
          return {
            ...depart,
            action: (
              <Action
                // onSuccess={fetchListUser}
                department={depart._id}
              />
            ),
          };
        });

        dispatch(getUserSuccess(departmentList));
      })

      .catch((err) => {
        dispatch(getUserFailed());
      });
  }, []);
  const handlerAdd = () => {
    navigate("/addaccount");
  };
  return (
    <div>
      {user.admin ? (
        <Button onClick={handlerAdd} type="primary">
          Thêm
        </Button>
      ) : (
        <div></div>
      )}
      {<Table columns={columns} dataSource={data} />}
    </div>
  );
}

const Action = ({department}) => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate(`/createdepartment/${department}`);
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
      <Button type="primary" danger>
        Xóa
      </Button>
    </div>
  );
};

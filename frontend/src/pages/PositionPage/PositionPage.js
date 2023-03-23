import React, {useEffect} from "react";

import {Button, Space, Table, Tag, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  getPositionFailed,
  getPositionStart,
  getPositionSuccess,
} from "../../redux/positionSlice";
import {positionService} from "../../services/position.service";
import {localStorageServ} from "../../services/localStorage.service";
const columns = [
  {
    title: "Tên chức vụ",
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
    title: "Lương",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    key: "action",
  },
];
export default function PositionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.positionSlice.positions.allPosition;
  });
  const admin = useSelector((state) => state.userSlice.login.currentUser);

  useEffect(() => {
    let fetchListPosition = () => {
      dispatch(getPositionStart());
      positionService
        .positionList()
        .then((res) => {
          let positiontList = res.data.map((data) => {
            return {
              ...data,
              action: <Action onSuccess={fetchListPosition} id={data._id} />,
            };
          });
          localStorageServ.position.set(positiontList);

          dispatch(getPositionSuccess(positiontList));
        })

        .catch((err) => {
          dispatch(getPositionFailed());
        });
    };
    fetchListPosition();
  }, []);
  const handlerAdd = () => {
    navigate("/addPosition");
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

  const handleEditUser = () => {
    navigate(`/editPosition/${id}`);
  };
  const handlePositionDelete = () => {
    positionService
      .deletePosition(id)
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
      <Button onClick={handlePositionDelete} type="primary" danger>
        Xóa
      </Button>
    </div>
  );
};

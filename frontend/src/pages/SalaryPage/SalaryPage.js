import {Button, Table, message} from "antd";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {salaryService} from "../../services/salari.service";
import {
  getListSalary,
  getSalaryFailed,
  getSalaryStart,
  getSalarySuccess,
} from "../../redux/salarySlice";
import {localStorageServ} from "../../services/localStorage.service";

const columns = [
  {
    title: "salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "bonus",
    dataIndex: "bonus",
    key: "bonus",
  },
  {
    title: "deduction",
    dataIndex: "deduction",
    key: "deduction",
  },
  {
    title: "tax",
    dataIndex: "tax",
    key: "tax",
  },
  {
    title: "total_salary",
    dataIndex: "total_salary",
    key: "total_salary",
      render: (text, record) => (
      <span>{record.salary + record.bonus + record.deduction - record.tax}</span>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export default function SalaryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.salarySlice.salaries.allSalary;
  });
  const admin = useSelector((state) => state.userSlice.login.currentUser);

  useEffect(() => {
    let fetchListSalary = () => {
      dispatch(getSalaryStart());
      salaryService
        .ListSalary()
        .then((res) => {
          console.log("data1", res.data);
          let departmentList = res?.data.map((depart) => {
            return {
              ...depart,
              action: <Action onSuccess={fetchListSalary} id={depart._id} />,
            };
          });
          localStorageServ.salary.set(res.data);

          dispatch(getSalarySuccess(departmentList));
        })

        .catch((err) => {
          dispatch(getSalaryFailed());
        });
    };
    fetchListSalary();
  }, []);
  const handlerAdd = () => {
    navigate("/quanlyluong/themluong");
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
    navigate(`/editsalary/${id}`);
  };
  const handleSalaryDelete = () => {
    salaryService
      .deleteSalary(id)
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
      <Button onClick={handleSalaryDelete} type="primary" danger>
        Xóa
      </Button>
    </div>
  );
};

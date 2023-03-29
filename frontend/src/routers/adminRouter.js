import AddAcount from "../components/Account/AddAcount";
import EditAcount from "../components/Account/EditAcount";
import AddDepartment from "../components/Department/AddDepartment";
import EditDepartment from "../components/Department/EditDepartment";
import AddSalary from "../components/EditSalary/AddSalary";
import EditSalary from "../components/EditSalary/EditSalary";
import Add from "../components/Employee/Add";
import Edit from "../components/Employee/Edit";
import AddPosition from "../components/Position/AddPosition";
import EditPosition from "../components/Position/EditPosition";
import AccountPage from "../pages/AccoutPage/AccountPage";
import DepartmentPage from "../pages/DepartmentPage/DepartmentPage";
import EmployessPage from "../pages/EmployessPage/EmployessPage";
import ManagePage from "../pages/ManagePage/ManagePage";
import PositionPage from "../pages/PositionPage/PositionPage";
import SalaryPage from "../pages/SalaryPage/SalaryPage";

export const adminRouter = [
  {
    path: "/usermanagement",
    Component: ManagePage,
  },
  {
    path: "/employee",
    Component: EmployessPage,
  },
  {
    path: "/employee/updateemployee/:id",
    Component: Edit,
  },
  {
    path: "/department",
    Component: DepartmentPage,
  },

  {
    path: "/adddepartment",
    Component: AddDepartment,
  },
  {
    path: "/editdepartment/:id",
    Component: EditDepartment,
  },
  {
    path: "/salaries",
    Component: SalaryPage,
  },
  {
    path: "/editsalary/:id",
    Component: EditSalary,
  },
  {
    path: "quanlyluong/themluong",
    Component: AddSalary,
  },
  {
    path: "/account",
    Component: AccountPage,
  },
  {
    path: "/addaccount",
    Component: AddAcount,
  },
  {
    path: "/editaccount/:id",
    Component: EditAcount,
  },
  {
    path: "/account",
    Component: AccountPage,
  },
  {
    path: "/quanlynhanvien/themnhanvien",
    Component: Add,
  },
  {
    path: "/position",
    Component: PositionPage,
  },
  {
    path: "/addPosition",
    Component: AddPosition,
  },
  {
    path: "/editPosition/:id",
    Component: EditPosition,
  },
];

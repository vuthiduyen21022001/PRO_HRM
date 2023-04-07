import React from "react";
import {Menu} from "antd";
import styled from "styled-components";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
  BankOutlined,
  UserOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Silder = styled.div`
  width: 234px;
  .listmenu {
    background-color: #adaaab;
    width: 234px;
  }
`;
export default function SideMenu() {
  const navigator = useNavigate();

  return (
    <Silder style={{display: "flex", flexDirection: "row"}}>
      <Menu
        className="listmenu"
        onClick={({key}) => {
          if (key === "Signout") {
          } else {
            navigator(key);
          }
        }}
        items={[
          {label: "Trang chủ", key: "/", icon: <HomeOutlined />},
          {
            label: "Quản lý tài khoản",
            key: "/account",
            icon: <ContactsOutlined />,
          },
          {
            label: "Quản lý nhân viên",
            key: "/employee",
            icon: <UserOutlined />,
          },
          {
            label: "Quản lý phòng ban",
            key: "/department",
            icon: <BankOutlined />,
          },
          {
            label: "Quản lý lương",
            icon: <MoneyCollectOutlined />,
            key: "/salaries",
          },
          {
            label: "Quản lý chức vụ",
            icon: <AuditOutlined />,
            key: "/position",
          },
          
        ]}
      >
      </Menu>
    </Silder>
  );
}

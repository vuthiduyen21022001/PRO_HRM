import React, {useEffect, useState} from "react";
import {Button, Form, Input, message} from "antd";
// import {userService} from "../../services/user.service";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import "./register.css";
import {userService} from "../../services/user.service";
import {useDispatch} from "react-redux";
import {
  registerFailed,
  registerStart,
  registerSuccess,
} from "../../redux/userSlice";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addPosts = async (post) => {
    dispatch(registerStart());
    await userService
      .postRegister(post)
      .then((res) => {
        message.success("Thêm thành công");
        dispatch(registerSuccess());
        setTimeout(() => {
          history("/login");
        }, 1000);
      })
      .catch((err) => {
        message.error("Thêm không thành công");
        dispatch(registerFailed());
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      username: username,
      password: password,
    };
    addPosts(newUser);
  };

  return (
    <div className="main">
      <div className="center">
        <h1>Đăng ký</h1>
        <form onSubmit={handleRegister}>
          <div className="txt_field">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Tên đăng nhập</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Mật khẩu</label>
          </div>
          <button type="submit" className="btn" defaultValue="Đăng ký">
            Đăng ký
          </button>
          <div className="signup_link">
            Nếu bạn đã có tài khoản?<a href="#">Đăng nhập</a>
          </div>
        </form>
      </div>
    </div>
  );
}

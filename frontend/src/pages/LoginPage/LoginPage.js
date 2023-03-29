import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./login.css";
import {userService} from "../../services/user.service";
import {message} from "antd";
import {useDispatch} from "react-redux";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  setUserInfor,
} from "../../redux/userSlice";
import {localStorageServ} from "../../services/localStorage.service";

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const login = async (value) => {
    dispatch(loginStart());
    await userService
      .loginUser(value)
      .then((res) => {
        dispatch(loginSuccess(res.data));
        localStorageServ.user.set(res.data);
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          history("/");
        }, 1000);
      })
      .catch((err) => {
        message.error("Đăng nhập không thành công");
        dispatch(loginFailed());
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    login(newUser);
  };
  const handleRegister =()=>{
    history("/register")
  }
  return (
    <div className="main">
      <div className="center">
        <h1>Đăng nhập</h1>
        <form method="post" onSubmit={handleLogin}>
          <div class="txt_field">
            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              required
            />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>
          <div class="txt_field">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              required
            />
            <span></span>
            <label>Mật khẩu</label>
          </div>
          <div class="pass">Quên mật khẩu?</div>
          <button type="submit" className="btn" defaultValue="Đăng nhập">
            Đăng nhập
          </button>
          <div class="signup_link">
            Không phải là thành viên? <a onClick={handleRegister} href="#">Đăng ký</a>
          </div>
        </form>
      </div>
    </div>
  );
}

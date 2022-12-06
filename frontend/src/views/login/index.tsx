import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { UserApi } from "../../api";
import "./style.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "testuser1@gmail.com",
    password: "testuser1@gmail.com",
    rePassword: "testuser1@gmail.com",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [validator, setValidator] = useState({
    emailError: false,
    rePasswordError: false,
    loginError: false
  });

  const clearValidation = () => {
    setValidator({
      emailError: false,
      rePasswordError: false,
      loginError: false
    });
  };
  const formValidation = async (type: string) => {
    const emailValidate =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        form.email
      );
    const rePasswordValidate = form.password === form.rePassword;
    if (type === 'login' && emailValidate === false) {
      setValidator({
        emailError: !emailValidate,
        rePasswordError: false,
        loginError: false
      });
      return false;
    }
    if (type === 'register' && (emailValidate === false || rePasswordValidate === false)) {
      setValidator({
        emailError: !emailValidate,
        rePasswordError: !rePasswordValidate,
        loginError: false
      });
      return false;
    }
    return true;
  };

  const handleInputEmail = (e) => {
    e.preventDefault();
    setForm({ ...form, email: e.target.value });
  };

  const handleInputPassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const handleInputRePassword = (e) => {
    setForm({ ...form, rePassword: e.target.value });
  };

  const submitLogin = async (e) => {
    setIsSubmit(true);
    let validator = await formValidation("login");
    if (!validator) {
      setIsSubmit(false);
      return;
    }
    const res = await UserApi("login", {
      email: form.email,
      password: form.password,
    });

    if (res && res.status === 200) {
      if (res.data.userId) {
        setValidator({
          emailError: false,
          rePasswordError: false,
          loginError: false
        });
        window.localStorage.setItem("userId", res.data.userId);
        window.location.href = "/management";
      }

      else setValidator({
        emailError: false,
        rePasswordError: false,
        loginError: true
      });
    }
    setIsSubmit(false);
  };

  const submitRegister = async (e) => {
    setIsSubmit(true);
    let validator = await formValidation("register");
    if (!validator) {
      setIsSubmit(false);
      return;
    }
    const res = await UserApi("register", {
      email: form.email,
      password: form.password,
    });
    if (res && res.status === 200) {
      window.localStorage.setItem("userId", res.data.userId);
      window.location.href = "/management";
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div style={{ display: "flex" }}>
          <Button
            style={{ flex: 1 }}
            onClick={(e) => {
              setIsLogin(true);
              clearValidation();
            }}
          >
            Đăng nhập
          </Button>
          <Button
            style={{ flex: 1 }}
            onClick={(e) => {
              setIsLogin(false);
              clearValidation();
            }}
          >
            Đăng ký
          </Button>
        </div>
        {
          <form className="form">
            <TextField
              onChange={handleInputEmail}
              value={form.email}
              id="name"
              type="email"
              name="name"
              sx={{ marginTop: "12px" }}
              label="Địa chỉ email"
              variant="standard"
            />
            {validator.emailError && <small>Email không hợp lệ</small>}
            <TextField
              key="password"
              onChange={handleInputPassword}
              type="password"
              value={form.password}
              sx={{ margin: "12px 0" }}
              label="Mật khẩu"
              variant="standard"
            />
            {isLogin ? (
              isSubmit ? (
                <LoadingButton loading variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <>
                  {validator.loginError && <small>Email hoặc mật khẩu không hợp lệ</small>}
                  <Button
                    onClick={submitLogin}
                    sx={{ marginTop: "12px" }}
                    variant="contained"
                  >
                    Đăng nhập
                  </Button>
                </>
              )
            ) : isSubmit ? (
              <LoadingButton loading variant="outlined">
                Submit
              </LoadingButton>
            ) : (
              <>
                <TextField
                  onChange={handleInputRePassword}
                  value={form.rePassword}
                  type="password"
                  label="Nhập lại mật khẩu"
                  variant="standard"
                />
                {validator.rePasswordError && (
                  <small>Mật khẩu không trùng khớp</small>
                )}
                <Button
                  onClick={submitRegister}
                  sx={{ marginTop: "12px" }}
                  variant="contained"
                >
                  Đăng ký
                </Button>
              </>
            )}
          </form>
        }
      </div>
    </div>
  );
};

export default Login;

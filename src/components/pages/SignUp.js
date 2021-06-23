import React, { useState } from "react";
import "../../App.css";
import "./SignUp.css";
import FormSignUp from "../FormSignUp";
import { validateSignUpForm } from "../ValidateFormSignUp";

export default function SignUp() {
  // State lưu lỗi và state lưu thông tin đăng ký
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Xử lý nhập vào các trường trong form sign up
  const handleChange = (e) => {
    const field = e.target.name;
    const userUpdate = user;
    userUpdate[field] = e.target.value.trim();

    setUser(userUpdate);
  };

  // Xử lý submit
  const submitSignUp = () => {
    console.log("submit....")
  };

  // Validate form sign up
  const validateForm = (event) => {
    // Dừng lại thao tác gửi thông tin form tới đích
    event.preventDefault();
    // Chạy hàm validate
    var payload = validateSignUpForm(user);

    // Nếu valid
    if (payload.success) {
      setErrors({});
      var userValid = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };
      submitSignUp(userValid);
    }
    // Nếu không hợp lệ
    else {
      const errorsValid = payload.errors;
      setErrors(errorsValid);
    }
  };

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div className="sign-up-wrapper">
          <FormSignUp
            onChange={handleChange}
            onSubmit={validateForm}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
}

import validator from "validator";

export const validateSignUpForm = (payload) => {
  // Lưu tên lỗi, thông báo và biến kiểm tra hợp lệ
  let errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.firstName !== "string" ||
    payload.firstName.trim().length === 0
  ) {
    isFormValid = false;
    errors.firstName = "Please provide a first name.";
  }

  if (
    !payload ||
    typeof payload.lastName !== "string" ||
    payload.lastName.trim().length === 0
  ) {
    isFormValid = false;
    errors.lastName = "Please provide a last name.";
  }

  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a email.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 8 characters.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
};

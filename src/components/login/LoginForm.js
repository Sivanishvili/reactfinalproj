import React from "react";
import { Alert, Button, FormContainer, Input } from "../atoms";
import { generateLoginFormValues } from "./generateLoginFormValues";
import { useAlert, UseForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { formValues: loginFormValues, onFormChange: onLoginFormChange } =
    UseForm(generateLoginFormValues());

  const loginFormButtonStyle = {
    backgroundColor: "#4474c2",
    color: "#000000",
    padding: "10px 25px",
    width: "200px",
    margin: "20px auto",
  };

  const { showAlert, alertState, handleClose } = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = () => {
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    dispatch(
      authenticateUser({
        formValues: { email, password },
        isLogin: true,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        showAlert("error", error);
        console.log(error);
      });
  };

  const isButtonDisabled =
    loginFormValues.email.error || loginFormValues.password.error;

  const handleAlertClose = () => {
    handleClose();
  };

  return (
    <FormContainer>
      <Input
        name="email"
        label="email"
        value={loginFormValues.email.value}
        onChange={onLoginFormChange}
        error={loginFormValues.email.error}
      />
      <Input
        name="password"
        label="password"
        value={loginFormValues.password.value}
        onChange={onLoginFormChange}
        error={loginFormValues.password.error}
        type="password"
      />
      <Button
        style={loginFormButtonStyle}
        onClick={onLogin}
        disabled={isButtonDisabled}
      >
        Login
      </Button>
      <Alert
        open={alertState.open}
        handleClose={handleAlertClose}
        severity={alertState.severity}
        message={alertState.message}
      />
    </FormContainer>
  );
};

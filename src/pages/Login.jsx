import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";

const Login = ({ onLogin, loginValidation }) => {
  const [credential, setCredential] = useState({ email: "", password: "" });

  if (loginValidation === "form-control is-valid") {
    return <Redirect to={"/dashboard"} />;
  }

  const handleLogin = (event) => {
    console.log("on submit");
    event.preventDefault();
    onLogin(credential);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setCredential((credential) => {
      return { ...credential, email: value };
    });
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setCredential((credential) => {
      return { ...credential, password: value };
    });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-muted">Welcome back!</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <img
                            src="/images/magic-user-name.png"
                            className="icon ml-2"
                            alt="user icon"
                          />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        className={loginValidation}
                        onChange={handleEmailChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <img
                            src="/images/future.png"
                            className="icon ml-2"
                            alt="password icon"
                          />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className={loginValidation}
                        onChange={handlePasswordChange}
                      />
                      {loginValidation === "form-control is-invalid" && (
                        <div className="invalid-feedback">
                          Please provide a valid emial or password.
                        </div>
                      )}
                      {loginValidation === "form-control is-valid" && (
                        <div className="valid-feedback">Looks good!</div>
                      )}
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/admin/signup">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;

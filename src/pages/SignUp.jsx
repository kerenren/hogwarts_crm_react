import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import uuid from "react-uuid";

const SignUp = ({ onCreateAdmin }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setFirstName(null);
  }, []);

  const handleCreateUser = (e) => {
    e.preventDefault();
    try {
      const newAdmin = {
        email: {
          id: uuid(),
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          creation_time: new Date().toISOString() + "",
          last_updated_time: new Date().toISOString() + "",
        },
      };
      onCreateAdmin(newAdmin);
      history.push("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  };
  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRepeatedPassword = (event) => {
    setRepeatedPassword(event.target.value);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <form onSubmit={handleCreateUser}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your Admin account</p>

                  <div className="form-row align-items-center">
                    <div className="col-auto">
                      <div className="mb-3 form-group">
                        <input
                          type="text"
                          className="form-control mb-2 mr-sm-2"
                          value={firstName}
                          onChange={handleFirstNameInput}
                          placeholder="First Name"
                          autoComplete="given-name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="mb-3 form-group">
                        <input
                          type="text"
                          className="form-control mb-2 mr-sm-2"
                          value={lastName}
                          onChange={handleLastNameInput}
                          placeholder="Last Name"
                          autoComplete="family-name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 form-group">
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                    />
                  </div>
                  <div className="mb-4 form-group">
                    <input
                      type="password"
                      className="form-control"
                      value={repeatedPassword}
                      onChange={handleRepeatedPassword}
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      password !== repeatedPassword ||
                      !password ||
                      !repeatedPassword
                    }
                  >
                    Create Account
                  </button>
                </form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignUp;

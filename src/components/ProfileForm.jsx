import React, { useContext } from "react";
import ExistingSkills from "./ExistingSkills";
import DesiredSkills from "./DesiredSkills";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import StudentContext from "../context/StudentContext";
import { useLocation } from "react-router-dom";

export default function ProfileForm() {
  const studentContext = useContext(StudentContext);
  const setStudent = studentContext.setStudent;
  const student = studentContext.student;
  const desiredSkills = student.desired_magic_skills;
  const existingSkills = student.existing_magic_skills;
  const location = useLocation();

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setStudent((student) => {
      return { ...student, first_name: value };
    });
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setStudent((student) => {
      return { ...student, last_name: value };
    });
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setStudent((student) => {
      return { ...student, email: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent((student) => {
      return { ...student, last_updated_time: new Date().toISOString() };
    });
    if (location.pathname === "/admin/edit_student") {
      console.log("request edit_student() for server. post body:", student);
    }
    if (location.pathname === "/admin/add_student") {
      console.log("request add_student() for server. post body:", student);
    }
  };

  return (
    <div>
      <CCard>
        <CCardHeader>Student Profile</CCardHeader>
        <CCardBody>
          {/* action="" method="post" */}
          <CForm onSubmit={handleSubmit}>
            <CFormGroup>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <i className="fas fa-hat-wizard"></i>
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  autoComplete="name"
                  onChange={handleFirstNameChange}
                  value={student.first_name}
                />
              </CInputGroup>
            </CFormGroup>

            <CFormGroup>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <i className="fas fa-broom"></i>
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  autoComplete="name"
                  onChange={handleLastNameChange}
                  value={student.last_name}
                />
              </CInputGroup>
            </CFormGroup>

            <CFormGroup>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <i className="far fa-envelope"></i>
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="email"
                  id="email1"
                  name="email1"
                  placeholder="Email"
                  autoComplete="username"
                  onChange={handleEmailChange}
                  value={student.email}
                />
              </CInputGroup>
            </CFormGroup>

            <ExistingSkills existingSkills={existingSkills} />
            <DesiredSkills desiredSkills={desiredSkills} />
            <CFormGroup className="form-actions">
              <CButton type="submit" size="sm" color="success">
                Submit
              </CButton>
            </CFormGroup>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
}

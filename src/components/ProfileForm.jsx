import React from "react";
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

export default function ProfileForm() {
  return (
    <div>
      <CCard>
        <CCardHeader>Student Profile</CCardHeader>
        <CCardBody>
          <CForm action="" method="post">
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
                />
              </CInputGroup>
            </CFormGroup>

            <ExistingSkills />
            <DesiredSkills />
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

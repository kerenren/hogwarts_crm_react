import React from "react";
import Student from "./Student";
import { CCard, CCardBody, CCardHeader, CListGroup } from "@coreui/react";

export default function AllStudents(props) {
  return (
    <CCard>
      <CCardHeader>All students list</CCardHeader>
      <CCardBody>
        <CListGroup>
          <Student students={props.students} />
        </CListGroup>
      </CCardBody>
    </CCard>
  );
}

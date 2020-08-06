import React from "react";
import { CListGroupItem, CRow, CCol } from "@coreui/react";

export default function Student({ students }) {
  const studentsObj = students[0];
  const studentsArray = Object.values(studentsObj);
 
  return (
    <>
      {studentsArray.map((student) => {
        return (
          <CListGroupItem action color="light" key={student.id}>
            <CRow>
              <CCol>{`${student.first_name} ${student.last_name}`}</CCol>
              <CCol>
                <button>
                  <i className="fas fa-user-edit"></i>
                </button>
              </CCol>
              <CCol>
                <button>
                  <i className="fas fa-user-minus"></i>
                </button>
              </CCol>
            </CRow>
          </CListGroupItem>
        );
      })}
    </>
  );
}

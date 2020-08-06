import React from "react";
import { CListGroupItem, CRow, CCol } from "@coreui/react";
import styles from "../styles/Student.module.css";

export default function Student({ students }) {
  const studentsObj = students[0];
  const studentsArray = Object.values(studentsObj);

  // pathfor get student data dashbord:  /students/<string:student_email> => student email is required
  // path for edit student: /admin/edit_student => student email is required
  // path for delete student: /admin/delete => student json data is required

  return (
    <>
      {studentsArray.map((student) => {
        return (
          <CListGroupItem action color="light" key={student.id}>
            <CRow>
              <CCol>
                <a href="#" className="text-decoration-none">
                  <i className="fas fa-hat-wizard"></i>{" "}
                  {`${student.first_name} ${student.last_name}`}
                </a>
              </CCol>
              <CCol>
                <button className={styles.Edit}>
                  <i className="fas fa-user-edit"></i>
                </button>
              </CCol>
              <CCol>
                <button className={styles.Edit}>
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

import React, { useContext } from "react";
import { CListGroupItem, CRow, CCol } from "@coreui/react";
import styles from "../styles/Student.module.css";
import StudentContext from "../context/StudentContext";
import { useHistory } from "react-router-dom";
import { deleteStudent } from "../lib/api";

export default function Student({ students }) {
  const studentsObj = students[0];
  const studentsArray = Object.values(studentsObj);

  // pathfor get student data dashbord:  /students/<string:student_email> => student email is required
  // path for edit student: /admin/edit_student => student obj is inside student.student
  // path for delete student: /admin/delete => student json data is required

  const studentContext = useContext(StudentContext);
  const setStudent = studentContext.setStudent;
  const history = useHistory();
  const onEditStudent = (student) => {
    setStudent(student.student);
    history.push("/admin/edit_student");
  };

  const onStudent = (student) => {
    setStudent(student.student);
    const studentEmail = student.student.email;
    history.push(`/students/${studentEmail}`);
  };

  const onDeleteStudent = (student) => {
    deleteStudent(student.student);
    history.go();
  };

  return (
    <>
      {studentsArray.map((student) => {
        return (
          <CListGroupItem action color="light" key={student.id}>
            <CRow>
              <CCol>
                <a
                  href="#"
                  className="text-decoration-none"
                  onClick={() => onStudent({ student })}
                >
                  <i className="fas fa-hat-wizard"></i>{" "}
                  {`${student.first_name} ${student.last_name}`}
                </a>
              </CCol>
              <CCol>
                <button
                  className={styles.Edit}
                  onClick={() => {
                    onEditStudent({ student });
                  }}
                >
                  <i className="fas fa-user-edit"></i>
                </button>
              </CCol>
              <CCol>
                <button
                  className={styles.Edit}
                  onClick={() => onDeleteStudent({ student })}
                >
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

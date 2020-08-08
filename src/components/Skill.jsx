import React, { useContext, useState, useEffect } from "react";
import uuid from "react-uuid";
import Rating from "react-rating";
import { CListGroupItem, CRow, CCol } from "@coreui/react";
import StudentContext from "../context/StudentContext";

const Skill = ({ skills, type }) => {
  const studentContext = useContext(StudentContext);
  const student = studentContext.student;
  const setStudent = studentContext.setStudent;
  let existingSkills = student.existing_magic_skills;
  let desiredSkills = student.desired_magic_skills;

  const handleOnChange = (value, skill) => {
    const { name } = skill;
    if (type === "existing_magic_skills") {
      existingSkills.forEach((skill) => {
        if (skill.name === name) {
          skill.level = value;
          console.log("updated existing_magic_skill:", skill);
        }
      });
      setStudent({
        ...student,
        existing_magic_skills: existingSkills,
      });
    }
    if (type === "desired_magic_skills") {
      desiredSkills.forEach((skill) => {
        if (skill.name === name) {
          skill.level = value;
          console.log("updated desired_magic_skill:", skill);
        }
      });
      setStudent({
        ...student,
        desired_magic_skills: desiredSkills,
      });
    }
  };

  return (
    <>
      {skills.map((skill) => {
        return (
          <CListGroupItem action key={uuid()}>
            <CRow>
              <CCol>
                <h6>{skill.name}</h6>
              </CCol>
              <CCol>
                <Rating
                  emptySymbol={
                    <img
                      src="/images/magic-wand-empty.png"
                      className="icon ml-2"
                      alt="empty skill rating icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src="/images/magic-wand-full.png"
                      className="icon ml-2"
                      alt="full skill rating icon"
                    />
                  }
                  initialRating={skill.level}
                  onChange={(value) => handleOnChange(value, skill)}
                />
              </CCol>
            </CRow>
          </CListGroupItem>
        );
      })}
    </>
  );
};

export default Skill;

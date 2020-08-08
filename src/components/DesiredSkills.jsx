import React from "react";
import Skill from "./Skill";
import { CCard, CCardHeader, CListGroup } from "@coreui/react";

export default function DesiredSkills({ desiredSkills }) {
  return (
    <CCard>
      <CCardHeader>Desired Skills</CCardHeader>
      <CListGroup>
        <Skill skills={desiredSkills} type={"desired_magic_skills"} />
      </CListGroup>
    </CCard>
  );
}

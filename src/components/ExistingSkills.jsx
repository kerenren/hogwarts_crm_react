import React from "react";
import Skill from "./Skill";
import { CCard, CCardHeader, CListGroup } from "@coreui/react";

export default function ExistingSkills({ existingSkills }) {
  return (
    <CCard>
      <CCardHeader>Existing Skills</CCardHeader>
      <CListGroup>
        <Skill skills={existingSkills} type={"existing_magic_skills"} />
      </CListGroup>
    </CCard>
  );
}

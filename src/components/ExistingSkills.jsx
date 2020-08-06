import React from "react";
import Skill from "./Skill";
import { CCard, CCardHeader, CListGroup } from "@coreui/react";

export default function ExistingSkills() {
  return (
    <CCard>
      <CCardHeader>Existing Skills</CCardHeader>
      <CListGroup>
        <Skill />
      </CListGroup>
    </CCard>
  );
}

import React from "react";
import Skill from "./Skill";
import { CCard, CCardHeader, CListGroup } from "@coreui/react";

export default function DesiredSkills() {
  return (
    <CCard>
      <CCardHeader>Desired Skills</CCardHeader>
      <CListGroup>
        <Skill />
      </CListGroup>
    </CCard>
  );
}

import React, { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import StudentContext from "../context/StudentContext";
import uuid from "react-uuid";

export default function AddStudent() {
  const [student, setStudent] = useState(newStudent);
  return (
    <StudentContext.Provider value={{student, setStudent}}>
      <ProfileForm />
    </StudentContext.Provider>
  );
}

const newStudent = {
  id: uuid(),
  first_name: "",
  last_name: "",
  email: "",
  creation_time: new Date().toISOString(),
  last_updated_time: new Date().toISOString(),
  existing_magic_skills: [
    {
      name: "Potion making",
      level: 0,
    },
    {
      name: "Spells",
      level: 0,
    },
    {
      name: "Quidditch",
      level: 0,
    },
    {
      name: "Animagus",
      level: 0,
    },
    {
      name: "Apparate",
      level: 0,
    },
    {
      name: "Metamorphmagi",
      level: 0,
    },
    {
      name: "Parseltongue",
      level: 0,
    },
  ],
  desired_magic_skills: [
    {
      name: "Potion making",
      level: 0,
    },
    {
      name: "Spells",
      level: 0,
    },
    {
      name: "Quidditch",
      level: 0,
    },
    {
      name: "Animagus",
      level: 0,
    },
    {
      name: "Apparate",
      level: 0,
    },
    {
      name: "Metamorphmagi",
      level: 0,
    },
    {
      name: "Parseltongue",
      level: 0,
    },
  ],
};

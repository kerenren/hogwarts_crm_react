import React, { useState } from "react";
import AllStudents from "../components/AllStudents";
import DesiredSkillsPieChart from "../components/DesiredSkillsPieChart";
import styles from "../styles/DashBoard.module.css";

export default function DashBoard() {
//   const [students, setStudents] = useState([]);
  return (
    <>
      <AllStudents students={students}/>
      <div className={styles.PieChartContainer}>
        <h5>Desired Skills Popularity</h5>
        <DesiredSkillsPieChart data={data} />
      </div>
    </>
  );
}

const students = [
    {
      "potter@hogwartsedu.com": {
        id: "er4",
        first_name: "Harry",
        last_name: "Potter",
        email: "potter@hogwartsedu.com",
        password: "yyyy",
        creation_time: "07-17-20",
        last_updated_time: "07-18-20",
        existing_magic_skills: [
          {
            name: "Obliviate",
            level: 3,
          },
          {
            name: "Expelliarmus",
            level: 4,
          },
          {
            name: "Flying",
            level: 5,
          },
        ],
        desired_magic_skills: [
          {
            name: "invisible",
            level: 1,
          },
          {
            name: "Apparition",
            level: 5,
          },
        ],
      },
      "hermione@hogwartsedu.com": {
        id: "er45",
        first_name: "Hermione",
        last_name: "Granger",
        email: "hermione@hogwartsedu.com",
        password: "nnnn",
        creation_time: "07-18-20",
        last_updated_time: "07-18-20",
        existing_magic_skills: [
          {
            name: "Oculus Reparo",
            level: 5,
          },
          {
            name: "Wingardium Leviosa",
            level: 4,
          },
          {
            name: "Obliviate",
            level: 4,
          },
        ],
        desired_magic_skills: [
          {
            name: "Expelliarmus",
            level: 4,
          },
          {
            name: "Flying",
            level: 2,
          },
          {
            name: "Riddikulu",
            level: 5,
          },
        ],
      },
      "weasley44@hogwartsedu.com": {
        id: "eft1",
        first_name: "Ron",
        last_name: "Weasley",
        email: "weasley44@hogwartsedu.com",
        password: "wwww",
        creation_time: "07-19-20",
        last_updated_time: "07-19-20 13:01:14",
        existing_magic_skills: [
          {
            name: "Flying",
            level: 5,
          },
          {
            name: "Defence Against the Dark Arts",
            level: 4,
          },
          {
            name: "Apparition",
            level: 2,
          },
          {
            name: "Flying",
            level: 3,
          },
          {
            name: "Defence Against the Dark Arts",
            level: 4,
          },
          {
            name: "Apparition",
            level: 2,
          },
          {
            name: "Jump",
            level: 3,
          },
        ],
        desired_magic_skills: [
          {
            name: "Expecto Patronum",
            level: 5,
          },
          {
            name: "Avada Kedavra",
            level: 5,
          },
          {
            name: "Expecto Patronum",
            level: 5,
          },
          {
            name: "Avada Kedavra",
            level: 5,
          },
        ],
      },
      "weasley443@hogwartsedu.com": {
        id: "eft431",
        first_name: "Ron",
        last_name: "Weasley",
        email: "weasley443@hogwartsedu.com",
        password: "wwww",
        creation_time: "07-28-20",
        last_updated_time: "",
        existing_magic_skills: [
          {
            name: "Flying",
            level: 5,
          },
          {
            name: "Defence Against the Dark Arts",
            level: 4,
          },
          {
            name: "Apparition",
            level: 2,
          },
        ],
        desired_magic_skills: [
          {
            name: "Expecto Patronum",
            level: 5,
          },
          {
            name: "Avada Kedavra",
            level: 5,
          },
        ],
      },
    },
  ];
  

const data = [
  {
    id: "Potion making",
    label: "Potion making",
    value: 106,
    color: "hsl(296, 70%, 50%)",
  },
  {
    id: "Spells",
    label: "Spells",
    value: 203,
    color: "hsl(176, 70%, 50%)",
  },
  {
    id: "Quidditch",
    label: "Quidditch",
    value: 568,
    color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Animagus",
    label: "Animagus",
    value: 487,
    color: "hsl(27, 70%, 50%)",
  },
  {
    id: "Apparate",
    label: "Apparate",
    value: 496,
    color: "hsl(256, 70%, 50%)",
  },
  {
    id: "Metamorphmagi",
    label: "Metamorphmagi",
    value: 395,
    color: "hsl(261, 70%, 50%)",
  },
  {
    id: "Parseltongue (talking with snakes)",
    label: "Parseltongue",
    value: 785,
    color: "hsl(256, 70%, 50%)",
  },
];

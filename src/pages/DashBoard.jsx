import React from "react";
import AllStudents from "../components/AllStudents";
import DesiredSkillsPieChart from "../components/DesiredSkillsPieChart";
import styles from "../styles/DashBoard.module.css";

export default function DashBoard() {
  return (
    <>
      <AllStudents />
      <div className={styles.PieChartContainer}>
        <h5>Desired Skills Popularity</h5>
        <DesiredSkillsPieChart data={data} />
      </div>
    </>
  );
}

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

import React, { useEffect } from "react";
import AllStudents from "../components/AllStudents";
import DesiredSkillsPieChart from "../components/DesiredSkillsPieChart";
import styles from "../styles/DashBoard.module.css";

export default function DashBoard() {
  useEffect(() => {
    setPopularity();
    configPieData();
  }, []);

  let potionMakingPopularity = 0;
  let spellsPopularity = 0;
  let quidditchPopularity = 0;
  let animagusPopularity = 0;
  let apparatePopularity = 0;
  let metamorphmagiPopularity = 0;
  let parseltonguePopulariy = 0;

  const setPopularity = () => {
    students.forEach((student) => {
      const studentArray = Object.values(student);
      studentArray.forEach((item) => {
        const desiredSkills = item.desired_magic_skills;
        desiredSkills.forEach((skill) => {
          const name = skill.name;
          const level = skill.level;
          switch (name) {
            case "Potion making":
              potionMakingPopularity += level;
              break;
            case "Spells":
              spellsPopularity += level;
              break;
            case "Quidditch":
              quidditchPopularity += level;
              break;
            case "Animagus":
              animagusPopularity += level;
              break;
            case "Apparate":
              apparatePopularity += level;
              break;
            case "Metamorphmagi":
              metamorphmagiPopularity += level;
              break;
            case "Parseltongue":
              parseltonguePopulariy += level;
              break;
            default:
              console.log("skill is not matching any cases");
          }
        });
      });
    });
  };

  const configPieData = () => {
    data.forEach((skill) => {
      switch (skill.label) {
        case "Potion making":
          skill.value = potionMakingPopularity;
          break;
        case "Spells":
          skill.value = spellsPopularity;
          break;
        case "Quidditch":
          skill.value = quidditchPopularity;
          break;
        case "Animagus":
          skill.value = animagusPopularity;
          break;
        case "Apparate":
          skill.value = apparatePopularity;
          console.log("apparatePopularity value", skill.value);
        case "Metamorphmagi":
          skill.value = metamorphmagiPopularity;
          break;
        case "Parseltongue":
          skill.value = parseltonguePopulariy;
          break;
        default:
          console.log("not matching");
      }
    });
  };

  return (
    <>
      <AllStudents students={students} />
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
          name: "Potion making",
          level: 3,
        },
        {
          name: "Spells",
          level: 4,
        },
        {
          name: "Quidditch",
          level: 5,
        },
        {
          name: "Animagus",
          level: 3,
        },
        {
          name: "Apparate",
          level: 4,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 3,
        },
      ],
      desired_magic_skills: [
        {
          name: "Potion making",
          level: 5,
        },
        {
          name: "Spells",
          level: 5,
        },
        {
          name: "Quidditch",
          level: 3,
        },
        {
          name: "Animagus",
          level: 3,
        },
        {
          name: "Apparate",
          level: 5,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 4,
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
          name: "Potion making",
          level: 3,
        },
        {
          name: "Spells",
          level: 4,
        },
        {
          name: "Quidditch",
          level: 5,
        },
        {
          name: "Animagus",
          level: 3,
        },
        {
          name: "Apparate",
          level: 4,
        },
        {
          name: "Metamorphmagi",
          level: 5,
        },
        {
          name: "Parseltongue",
          level: 3,
        },
      ],
      desired_magic_skills: [
        {
          name: "Potion making",
          level: 1,
        },
        {
          name: "Spells",
          level: 5,
        },
        {
          name: "Quidditch",
          level: 3,
        },
        {
          name: "Animagus",
          level: 4,
        },
        {
          name: "Apparate",
          level: 1,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 4,
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
          name: "Potion making",
          level: 3,
        },
        {
          name: "Spells",
          level: 4,
        },
        {
          name: "Quidditch",
          level: 5,
        },
        {
          name: "Animagus",
          level: 3,
        },
        {
          name: "Apparate",
          level: 4,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 3,
        },
      ],
      desired_magic_skills: [
        {
          name: "Potion making",
          level: 1,
        },
        {
          name: "Spells",
          level: 5,
        },
        {
          name: "Quidditch",
          level: 3,
        },
        {
          name: "Animagus",
          level: 5,
        },
        {
          name: "Apparate",
          level: 1,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 4,
        },
      ],
    },
    "weasley443@hogwartsedu.com": {
      id: "eft431",
      first_name: "Jasmin",
      last_name: "Weasley",
      email: "Jasmin@hogwartsedu.com",
      password: "wwww",
      creation_time: "07-28-20",
      last_updated_time: "",
      existing_magic_skills: [
        {
          name: "Potion making",
          level: 3,
        },
        {
          name: "Spells",
          level: 4,
        },
        {
          name: "Quidditch",
          level: 5,
        },
        {
          name: "Animagus",
          level: 3,
        },
        {
          name: "Apparate",
          level: 4,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 3,
        },
      ],
      desired_magic_skills: [
        {
          name: "Potion making",
          level: 4,
        },
        {
          name: "Spells",
          level: 5,
        },
        {
          name: "Quidditch",
          level: 3,
        },
        {
          name: "Animagus",
          level: 3,
        },
        {
          name: "Apparate",
          level: 5,
        },
        {
          name: "Metamorphmagi",
          level: 2,
        },
        {
          name: "Parseltongue",
          level: 4,
        },
      ],
    },
  },
];

const data = [
  {
    id: "Potion making",
    label: "Potion making",
    value: 0,
    color: "hsl(296, 70%, 50%)",
  },
  {
    id: "Spells",
    label: "Spells",
    value: 0,
    color: "hsl(176, 70%, 50%)",
  },
  {
    id: "Quidditch",
    label: "Quidditch",
    value: 0,
    color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Animagus",
    label: "Animagus",
    value: 0,
    color: "hsl(27, 70%, 50%)",
  },
  {
    id: "Apparate",
    label: "Apparate",
    value: 0,
    color: "hsl(256, 70%, 50%)",
  },
  {
    id: "Metamorphmagi",
    label: "Metamorphmagi",
    value: 0,
    color: "hsl(261, 70%, 50%)",
  },
  {
    id: "Parseltongue (talking with snakes)",
    label: "Parseltongue",
    value: 0,
    color: "hsl(256, 70%, 50%)",
  },
];

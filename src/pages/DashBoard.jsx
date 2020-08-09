import React, { useEffect, useState } from "react";
import AllStudents from "../components/AllStudents";
import DesiredSkillsPieChart from "../components/DesiredSkillsPieChart";
import styles from "../styles/DashBoard.module.css";
import { getAllStudents } from "../lib/api.js";
import pieChartInitialConfig from "../lib/pieChartInitialConfig";

export default function DashBoard() {
  const [students, setStudents] = useState([]);
  const [data, setData] = useState([]);

  const getStudents = async () => {
    const studentsObj = await getAllStudents();
    setStudents([studentsObj]);
  };

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
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
      const pieChartConfigedArray = pieChartInitialConfig.map((skill) => {
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
            break;
          case "Metamorphmagi":
            skill.value = metamorphmagiPopularity;
            break;
          case "Parseltongue":
            skill.value = parseltonguePopulariy;
            break;
          default:
            console.log("not matching");
        }
        return skill;
      });
      setData(pieChartConfigedArray);
    };

    setPopularity();
    configPieData();
  }, [students]);



  return (
    <>
      {students.length && <AllStudents students={students} />}
      <div className={styles.PieChartContainer}>
        <h5>Desired Skills Popularity</h5>
        {data.length && <DesiredSkillsPieChart data={data} />}
      </div>
    </>
  );
}

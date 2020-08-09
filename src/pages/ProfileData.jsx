import React, { useContext } from "react";
import StudentContext from "../context/StudentContext";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function ProfileData() {
  const studentContext = useContext(StudentContext);
  const student = studentContext.student;

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">
          {student.first_name} {student.last_name} Profile
        </h1>
        <p className="lead">email: {student.email}, skills</p>
        <hr className="my-4"></hr>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <img src="/images/icons-wizard-hat.png" />
                  Existing Skills
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                {student.existing_magic_skills.map((skill) => (
                  <p>
                    {skill.name} {skill.level}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img src="/images/icon-cauldron.png" />
                  Desired Skills
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                {student.desired_magic_skills.map((skill) => (
                  <p>
                    {skill.name} {skill.level}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className=" text-muted">
            {student.first_name}'s profile was created at:
            {student.creation_time} <br />
            last edited at: {student.creation_time}
          </p>
        </div>
      </div>
    </div>
  );
}

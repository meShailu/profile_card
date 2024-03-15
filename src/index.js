import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "Javascript", level: "advanced", color: "red" },
  { skill: "HTML", level: "intermediate", color: "blue" },
  { skill: "CSS", level: "intermediate", color: "green" },
  { skill: "React", level: "beginner", color: "purple" },
  { skill: "Git", level: "intermediate", color: "orange" },
  { skill: "GitHub", level: "intermediate", color: "yellow" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {<Skill />}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="image.jpeg" alt="Kanwar Shailu" />;
}

function Intro() {
  return (
    <div>
      <h1>Kanwar Shailu</h1>
      <p>
        👋 Hi! I'm a former lawyer turned front-end developer. I love traveling,
        listening to music, and exploring new coding challenges. Let's craft
        some awesome digital experiences together!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        ></Skill>
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😔"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

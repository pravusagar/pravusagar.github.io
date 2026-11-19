import React from "react";
import Skills from "../skills/Skills";

const separatorStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/img/border-dark.png)`,
};

const resumeContent = [
  {
    jobPosition: "Front-End Developer",
    company: "Lumena Technologies Pvt. Ltd.",
    jobDuration: "Nov 2025 - Present",
    status: "Current Role",
    description:
      "Design and build website templates for universities, public institutions and other organisations. Also handle website development, DNS management and Cloudflare configuration for these projects.",
  },
  {
    jobPosition: "Front-End Developer",
    company: "All India Online Pvt. Ltd.",
    jobDuration: "Jun 2023 - Oct 2025",
    status: "Previous Role",
    description:
      "Designed and built website templates for educational institutions and business platforms, with a focus on responsive, user-friendly front-end development. Also managed CMS updates and ongoing website maintenance.",
  },
];


const educationContent = [
  {
    passingYear: "2024 - 2026",
    degreeTitle: "Master in Computer Applications (MCA)",
    instituteName: "Utkal University, Bhubaneswar",
    skills: [
      "MySQL",
      "Artificial Intelligence (AI)",
      "Java Programming",
      "Cloud Computing",
      "Computer Networking",
      "Web Technologies",
      "Network Security",
    ],
  },
  {
    passingYear: "2020 - 2022",
    degreeTitle: "Master in Biotechnology (M.Sc.)",
    instituteName: "Utkal University, Bhubaneswar",
    skills: [
      "Media Preparation",
      "Plating Method",
      "Autoclaving & Sterilization",
      "Microscopy",
      "Laboratory Safety",
    ],
  },
];


const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="title">
          <h3>Experience</h3>
        </div>
        <div className="resume-box">
          {resumeContent.map((val) => (
            <div className="resume-row" key={val.company}>
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <div className="rb-left">
                    <h6>{val.jobPosition}</h6>
                    <label>{val.company}</label>
                    <p>{val.jobDuration}</p>
                    <div className="rb-time">{val.status}</div>
                  </div>
                </div>
                <div className="col-md-8 col-xl-9">
                  <div className="rb-right">
                    <h6>{val.company}</h6>
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="separated" style={separatorStyle}></div>

        <div className="title">
          <h3>Education & Skills</h3>
        </div>

        <div className="row align-items-center">

          
<div className="col-lg-4 m-15px-tb">
  <ul className="aducation-box">
    {educationContent.map((val) => (
      <li key={val.passingYear}>
        <span>{val.passingYear}</span>
        <h6>{val.degreeTitle}</h6>
        <p>{val.instituteName}</p>

        <p className="pt-2">
          <strong>Key Learning:</strong> {val.skills.join(", ")}
        </p>
      </li>
    ))}
  </ul>
</div>



          <div className="col-lg-7 ml-auto m-15px-tb">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

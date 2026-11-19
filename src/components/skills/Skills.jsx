
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  { name: "HTML & CSS", value: 90 },
  { name: "JavaScript", value: 80 },
  { name: "PHP", value: 70 },
  { name: "MySQL", value: 60 },
];

const otherTools = ["ReactJS", "Photoshop", 
  "Adobe Premiere Pro","bootstrap","GSAP", "VS Code", "Linux", 
  "WordPress", "Cloudflare", "DNS Management", 
  "GitHub"];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <div className="skill-wrapper">
      {skillContent.map((skill) => (
        <div className="skill-lt" key={skill.name}>
          <h6>{skill.name}</h6>

          <span className="count-inner">
            <VisibilitySensor
              partialVisibility
              onChange={(isVisible) => {
                if (isVisible) setFocus(true);
              }}
              delayedCall
            >
              <span>
                <CountUp
                  start={0}
                  end={skill.value}
                  duration={1}
                  redraw={false}
                  preserveValue
                />
                %
              </span>
            </VisibilitySensor>
          </span>

          <div className="skill-bar">
            <div
              className="skill-bar-in"
              style={{ width: focus ? `${skill.value}%` : "0%" }}
            ></div>
          </div>
        </div>
      ))}

      <div className="skill-lt">
        <h6>Also use</h6>
        <ul className="nav tag-cloud pt-2">
          {otherTools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

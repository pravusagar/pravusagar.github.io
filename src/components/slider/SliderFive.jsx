import React from "react";
import TextLoop from "react-text-loop";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import { profile } from "../../data/profile";

const sliderContent = {
  name: profile.name,
  description:
    "I build responsive, user-friendly websites for universities, institutions and businesses, with three years of hands-on front-end experience.",
  btnText: "GET IN TOUCH",
  btnText2: "DOWNLOAD RESUME",
};

// Decorative floating icons around the hero image (positions set in _hero.scss)
const techChips = [
  { Icon: FaHtml5, label: "HTML" },
  { Icon: FaCss3Alt, label: "CSS" },
  { Icon: FaJs, label: "JavaScript" },
  { Icon: FaReact, label: "React" },
  { Icon: FaWordpress, label: "WordPress" },
  { Icon: FaGitAlt, label: "Git" },
];

const SliderFive = () => {
  return (
    <section
      id="home"
      className="home-banner home-banner-two slider-four bg-normal"
    >
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="type-box">
              <h6>Hello, I'm</h6>
              <h1 className="font-alt">{sliderContent.name}</h1>
              <TextLoop>
                <p className="loop-text lead">Web Developer</p>
                <p className="loop-text lead">Web Designer</p>
                <p className="loop-text lead">AI Enthusiast</p>
              </TextLoop>
              <p className="desc">{sliderContent.description}</p>
              <div className="d-flex btn-wrapper">
                <a
                  className="px-btn px-btn-theme mr-4"
                  href={`${process.env.PUBLIC_URL}/Prabhusagar-Mohapatra-Resume.pdf`}
                  download="Prabhusagar-Mohapatra-Resume.pdf"
                >
                  {sliderContent.btnText2}
                </a>
                <a className="px-btn btn-outline " href="#contactus">
                  {sliderContent.btnText}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="hero-visual">
              <span className="hero-blob" aria-hidden="true"></span>
              <span className="hero-dots" aria-hidden="true"></span>
              <span className="hero-ring" aria-hidden="true"></span>

              <img
                src={`${process.env.PUBLIC_URL}/img/slider/hero.gif`}
                alt="Illustration of a developer working on a laptop beside a large monitor"
              />

              {techChips.map(({ Icon, label }, i) => (
                <span
                  key={label}
                  className={`hero-chip hero-chip-${i + 1}`}
                  title={label}
                  aria-hidden="true"
                >
                  <Icon />
                </span>
              ))}

              <div className="hero-badge" aria-hidden="true">
                <strong>3</strong>
                <span>
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="go-to go-to-next">
        <a href="#about" aria-label="Scroll to About section">
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default SliderFive;
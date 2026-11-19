import React from "react";
import Social from "../Social";
import Services from "../service/Service";
import { profile } from "../../data/profile";

const separatorStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/img/border-dark.png)`,
};

const About = () => {
  return (
    <section id="about" className="section theme-light dark-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/about/about-me-3.jpg`}
                    alt={`Portrait of ${profile.name}`}
                    width="1000"
                    height="1065"
                    loading="lazy"
                  />
                </div>
                <Social />
              </div>
              <div className="info">
                <p>{profile.title}</p>
                <h3>{profile.name}</h3>
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 ml-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="about-info">
              <div className="title">
                <h3>About Me</h3>
              </div>
              <div className="about-text">
                <p>
                  I'm a front-end developer from Bhubaneswar with three years
                  of experience building websites for universities, public
                  institutions and businesses. I turn designs into responsive,
                  easy-to-use pages using HTML, CSS, JavaScript and React.
                </p>
                <p>
                  Alongside front-end work, I handle WordPress and CMS
                  maintenance, DNS management and Cloudflare setup. I'm
                 recently completed a Master's in Computer Science at Utkal
                  University and enjoy working across both front-end and
                  back-end development.
                </p>
              </div>
              <div className="info-list">
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      <li>
                        <label>Name: </label>
                        <span>{profile.name}</span>
                      </li>
                      <li>
                        <label>Role: </label>
                        <span>{profile.title}</span>
                      </li>
                      <li>
                        <label>Experience: </label>
                        <span>{profile.experience}</span>
                      </li>
                      <li>
                        <label>Location: </label>
                        <span>{profile.location}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      <li>
                        <label>Phone: </label>
                        <span>
                          <a href={profile.phoneHref}>{profile.phone}</a>
                        </span>
                      </li>
                      <li>
                        <label>Email: </label>
                        <span>
                          <a href={`mailto:${profile.email}`}>
                            {profile.email}
                          </a>
                        </span>
                      </li>
                      <li>
                        <label>GitHub: </label>
                        <span>
                          <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            pravusagar
                          </a>
                        </span>
                      </li>
                      <li>
                        <label>LinkedIn: </label>
                        <span>
                          <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            pravusagar
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="separated" style={separatorStyle}></div>
        <div className="title">
          <h3>What I Do</h3>
        </div>
        <Services />
      </div>
    </section>
  );
};

export default About;

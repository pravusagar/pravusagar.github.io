
import React from "react";

const LUMENA = "Lumena Technologies Pvt. Ltd.";
const AIO = "All India Online Pvt. Ltd.";

const projects = [
  { name: "BPUT", url: "https://bput.ac.in", image: "bput", company: LUMENA },
  { name: "Sambalpur University", url: "https://suniv.ac.in", image: "suniv", company: LUMENA },
  { name: "Gangadhar Meher University", url: "https://gmuniversity.ac.in", image: "gmuniversity", company: LUMENA },
  { name: "VSSUT", url: "https://vssut.ac.in", image: "vssut", company: LUMENA },
  { name: "RIE Bhubaneswar", url: "https://riebbs.ac.in", image: "riebbs", company: LUMENA },

  { name: "USBM Bhubaneswar", url: "https://usbm.ac.in", image: "usbm", company: LUMENA },
  { name: "Nandankanan", url: "https://nandankanan.org", image: "nandankanan", company: LUMENA },
  {
    name: "State Botanical Garden",
    url: "https://statebotanicalgardenodisha.org",
    image: "statebotanicalgardenodisha",
    company: LUMENA,
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="title">
          <h3>Projects</h3>
        </div>

        <div className="row">
          {projects.map((project, i) => (
            <div
              className="col-md-6 col-lg-4 m-15px-tb"
              key={project.url}
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay={(i % 3) * 200}
            >
              <div className="blog-grid">
                <div className="blog-img">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/projects/${project.image}.webp`}
                      alt={`${project.name} website`}
                      width="600"
                      height="200"
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="blog-info">
                  <div className="meta">{project.company}</div>
                  <h6>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {project.name}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          ))}

          {/* And Many More Card */}
          <div
            className="col-md-6 col-lg-4 m-15px-tb"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={200}
          >
            <div className="blog-grid">

              <div className="blog-info">
                <div className="meta">And many more...</div>
                <h6>Explore More Projects</h6>

                <p>
                  Worked on many more educational and business websites.
                  Explore my resume for more details about my experience.
                </p>
                <a
                  href={`${process.env.PUBLIC_URL}/Prabhusagar-Mohapatra-Resume.pdf`}
                  className="px-btn px-btn-theme mr-4"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

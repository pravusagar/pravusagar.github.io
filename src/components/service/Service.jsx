import React from "react";

const serviceContent = [
  {
    icon: "icon-desktop",
    title: "Web Design & Development",
    description:
      "Responsive websites and templates built with HTML, CSS, JavaScript and React for institutions and businesses.",
    delayAnimation: "",
  },
  {
    icon: "icon-tools",
    title: "Website Bug Fixing",
    description:
      "Finding and fixing layout, functionality and compatibility issues on existing websites.",
    delayAnimation: "200",
  },
  {
    icon: "icon-gears",
    title: "CMS & Site Maintenance",
    description:
      "WordPress and CMS updates, routine site maintenance, DNS management and Cloudflare setup.",
    delayAnimation: "400",
  },
];

export default function Service() {
  return (
    <div className="row">
      {serviceContent.map((val) => (
        <div
          className="col-md-6 col-lg-4 my-3"
          key={val.title}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="feature-box-01">
            <div className="icon">
              <i className={`icon ${val.icon}`}></i>
            </div>
            <div className="feature-content">
              <h5>{val.title}</h5>
              <p>{val.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

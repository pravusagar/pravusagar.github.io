import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../../data/profile";

const SocialShare = [
  { Icon: FaGithub, link: profile.github, label: "GitHub" },
  { Icon: FaLinkedinIn, link: profile.linkedin, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 my-2">
        <div className="nav justify-content-center justify-content-md-start">
          {SocialShare.map(({ Icon, link, label }) => (
            <a
              key={label}
              href={link}
              rel="noreferrer noopener"
              target="_blank"
              aria-label={`${label} profile`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="col-md-6 my-2 text-center text-md-end">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

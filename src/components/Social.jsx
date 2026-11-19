import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";

const SocialShare = [
  { Icon: FaGithub, link: profile.github, label: "GitHub" },
  { Icon: FaLinkedinIn, link: profile.linkedin, label: "LinkedIn" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
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
  );
};

export default Social;

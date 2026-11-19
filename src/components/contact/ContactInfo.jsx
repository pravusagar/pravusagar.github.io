import React from "react";
import { profile } from "../../data/profile";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h4>Let's work together</h4>
      <p>
        I'm open to new projects and opportunities. Send me a message or reach
        out directly using the details below.
      </p>

      <ul>
        <li className="media">
          <i className="icon icon-map"></i>
          <span className="media-body">{profile.location}</span>
        </li>
        <li className="media">
          <i className="icon icon-envelope"></i>
          <span className="media-body">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
        </li>
        <li className="media">
          <i className="icon icon-phone"></i>
          <span className="media-body">
            <a href={profile.phoneHref}>{profile.phone}</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;

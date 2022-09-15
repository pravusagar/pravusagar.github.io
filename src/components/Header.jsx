import React from 'react';

function Header({ Data }) {
  return (
    <>
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am {Data.name}.</h1>
          <h3 style={{ color: "#042256", fontFamily: "sans-serif " }}>
            I am a {Data.role}.{Data.roleDescription}
          </h3>
          <hr />
          <ul className="social">
            {Data.socialLinks &&
              Data.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a href={item.url} >
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  </>
  )
}

export default Header

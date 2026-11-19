import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFive";
import About from "../../components/about/About";
import Resume from "../../components/resume/Resume";
import Work from "../../components/work/Work";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Prabhusagar Mohapatra | Front-End Developer in Bhubaneswar");

  useEffect(() => {
    document.body.classList.add("theme-light");
  }, []);

  return (
    <div className="main-left">
      <Header />
      <main>
        <Slider />
        <About />
        <Resume />
        <Work />

        <section id="contactus" className="section theme-light dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xl-4 m-15px-tb">
                <ContactInfo />
              </div>
              <div className="col-lg-7 ml-auto m-15px-tb">
                <div className="contact-form">
                  <h4>Send a Message</h4>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Home;

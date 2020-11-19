import React from "react";
import Footer from "../../../Layouts/Footer/Footer";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div style={{ position: "relative", height: 650 }}>
        <div
          className="top_about_img_container"
          style={{
            width: "100%",
            height: "50%",
            position: "relative",
            backgroundColor: "#E9E9EA",
            backgroundImage: "url('/images/about_intro.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "35%",
            backgroundColor: "#f5f5f5e6",
          }}
        />
        <div
          className="p-5"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "transparent",
          }}
        >
          <h1 className="text-center p-3 text-white">About Us</h1>
        </div>

        <div
          className="card p-5"
          style={{
            position: "absolute",
            top: "10rem",
            bottom: "10rem",
            left: "10rem",
            right: "10rem",
            minWidth: 400,
          }}
        >
          <p>
            Reflector Academy is a youth capacity development organisation. It
            is a learning community that aims at equipping young Africans with
            relevant opportunities and life skills; with a focus on leadership,
            innovation and enterprise development.
          </p>

          <p>
            Our goal is to raise a generation of young leaders that pursue
            personal and societal prosperity with passionate focus, courageous
            vision and moral character.
          </p>

          <p>
            Reflector Academy is positioned to bridge the gap between the
            education sector and productivity. Much more, we believe youth
            capacity development includes, but not limited to, employability and
            entrepreneurial skills.
          </p>
          <p className="text-reflector">Read More ⇢</p>
        </div>
      </div>

      <div className="row px-5 pb-5">
        <div className="col-12 col-md-6 px-0">
          <img className="w-100" src="/images/vision.svg" alt="vision" />
        </div>
        <div className="col-12 col-md-6 pt-3 px-4 pt-5">
          <div className="d-flex align-items-center mb-3">
            <img src="/images/red_star.svg" alt="stars" />
            <h6 className="mt-1 mb-0 ml-2">Vision</h6>
          </div>
          <p className="w-75">
            To be the leading institutionalized channel educating, enabling and
            empowering the largest population of young Africans at any time.
          </p>
        </div>
        <div className="col-12 col-md-6 pt-5 p-0">
          <div className="d-flex align-items-center mb-3">
            <img src="/images/red_star.svg" alt="stars" />
            <h6 className="mt-1 mb-0 ml-2">Mission</h6>
          </div>
          <p className="w-75">
            By creating multiple educational platforms and networks, Reflector
            Academy exists to connect young Africans to personal and
            professional development tools and opportunities.
          </p>
        </div>
        <div className="col-12 col-md-6 px-0">
          <img className="w-100" src="/images/mission.svg" alt="vision" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

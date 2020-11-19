import React from "react";
import Button from "../../components/Button/Button";
import ReactPlayer from "react-player/youtube";
import ScrollMenu from "react-horizontal-scrolling-menu";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";

window.YTConfig = {
  host: "https://www.youtube.com",
};

const list = [
  {
    name: "Alex Chinonso",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user1.svg",
  },
  {
    name: "Sandra James",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user2.svg",
  },
  {
    name: "Tunde Okeowo",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user3.svg",
  },
  {
    name: "Femi Philips",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user1.svg",
  },
  {
    name: "Sandra James",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user2.svg",
  },
  {
    name: "Tunde Okeowo",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user3.svg",
  },
  {
    name: "Femi Philips",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user1.svg",
  },
];

const LandingPage = () => {
  return (
    <div>
      <div style={styles.container} className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center w-100">
          <div className="w-75 p-3">
            <h4 className="text-reflector text-pretty" >
              We are building a Community that promotes Leadership, Innovation
              and Enterprise Development
            </h4>
            <div className="d-flex">
              <Link to="/register"><Button text="Join Us" solid={true} /></Link>
              <Link to="/login"><Button text="Log In" solid={false} /></Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6" style={styles.introImg}></div>
      </div>

      <div
        style={styles.videoIntro}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h2 className="text-center text-reflector my-4">
          Welcome to Reflector Academy
        </h2>
        <div className="mb-4">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </div>
        <Button text="See other Video Resources" solid={false} icon="arrow" />
      </div>
      <div style={styles.registerSection}>
        <h5 style={styles.invite}>
          Be a part of our next Leadership Conference
        </h5>
        <Button text="Register Here" solid={false} white full={false} />
      </div>

      <div
        style={{
          height: 762,
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#E9E9EA",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#f5f5f5e6",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 15,
            bottom: 0,
            left: 15,
            right: 15,
          }}
        >
          <div className="p-4 d-flex justify-content-center">
            <h5
              className="text-reflector text-center py-3"
              style={{ width: "16rem", fontSize: "1.7rem" }}
            >
              {" "}
              Meet our Reflector Academy Generals
            </h5>
          </div>
          <ScrollMenu
            alignCenter={false}
            arrowLeft={
              <img
                src="/images/big_back_arrow.svg"
                alt="nav arrow"
                style={{ width: "2.5rem" }}
              />
            }
            arrowRight={
              <img
                src="/images/big_forward_arrow.svg"
                alt="nav arrow"
                style={{ width: "2.5rem" }}
              />
            }
            data={list.map((item, index) => (
              <UserCard
              otherClass="mx-4 dashboard_user_card"
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          />

          <div className="p-5 mt-3 d-flex justify-content-center">
            <Button text="See More" solid={false} icon="arrow" />
          </div>
        </div>
      </div>

      <Footer />
    

    
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#E9E9EA",
    height: 350,
  },
  introImg: {
    backgroundImage: "url('/images/teach.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: 250,
    backgroundPosition: "center",
  },
  videoIntro: {
    padding: "5rem",
  },
  registerSection: {
    backgroundImage: "url('/images/bg_blue.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: 250,
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 30,
  },
  invite: {
    fontWeight: "300",
    fontSize: "25px",
    lineHeight: "35px",
    width: "35%",
    color: "#ffffff",
  },
};

export default LandingPage;

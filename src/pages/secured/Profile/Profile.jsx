import React from "react";
import Button from "../../../components/Button/Button";
import TextArea from "../../../components/TextArea/TextArea";
import Footer from "../../../Layouts/Footer/Footer";

const Profile = () => {
  return (
    <div className="bg-grey">
      <div className="row" style={styles.top}>
        <h3 className="text-white m-0 p-0">Welcome, Ayomide</h3>
        <p className="text-white">We’re glad to have you here</p>
      </div>
      <div className="p-5 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
          <h4 className="text-reflector">Upload your Profile Picture</h4>
          <p> and let’s get you started</p>
        </div>
        <div
          className="card d-flex flex-column align-items-center p-4"
          style={{ minWidth: "0%", width: 310 }}
        >
          <img
            src="/images/profile_placeholder.svg"
            alt=""
            className="my-3"
            style={{ maxWidth: 150 }}
          />
          <Button
            icon="/images/uploader.svg"
            text="Upload Image"
            solid={true}
            full={false}
          />
          <p className="">Or drop a file</p>
          <div />
          <TextArea
            label="Write a short description of yourself"
            otherClass="w-100"
            outline={true}
          />
          <Button text="Submit" solid={true} full={true} otherClass="mx-2" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  top: {
    backgroundImage: "url('/images/profile_bg.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "526px",
  },
};

export default Profile;

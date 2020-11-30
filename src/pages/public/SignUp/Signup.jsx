import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import TextInput from "../../../components/TextInput/TextInput";
import UserCard from "../../../components/UserCard/UserCard";
import "./SignUp.scss";

const Signup = () => {
  return (
    <div className="register_container row">
      <div className="first_part col-12 col-md-6" style={styles.firstPart}>
        <div style={{height: '20%'}} className="p-4 d-flex flex-column justify-content-center align-items-center">
          <h4 style={{fontSize: '2.4rem', fontWeight: '300'}} className="text-white text-center mb-1 pt-4">Earn 5 stars </h4>
          <h5 style={{fontSize: '1rem'}} className="text-white text-center">
            {" "}
            Become a Reflector Academy General
          </h5>
        </div>

        <div style={{height: '80%', maxHeight: 440, padding: 20 }} className="d-flex justify-content-around">
          <div className="ml-2 mr-2">
          <UserCard
            name={"Olayinka Samuel"}
            description={`My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.`}
            image={"/images/user1.svg"}
          />
          </div>
          <div className="ml-2 align-items-end mb-1 d-none d-md-flex">
          <UserCard
            name={"Oladapo Ayoife"}
            description={`My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.`}
            image={"/images/user2.svg"}
          />
          </div>
        </div>
      </div>
      <div className="second_part col-12 col-md-6 p-5">
          <TextInput label={"Username"} />
          <TextInput label={"Email Address"} />
          <TextInput label={"Password"} />
          <TextInput label={"Confirm Password"} />

          <div className="mt-4">
          <Button text="Join Us" solid={true} full={true} />
          </div>
          <p className="mt-3">Already have an account? <Link to="/login"><span className="text-reflector ml-1">Log In</span></Link> </p>

      </div>
    </div>
  );
};

const styles = {
  firstPart: {
    backgroundImage: "url('/images/plain_blue_bg.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // minHeight: "86vh",
    backgroundPosition: "center",
    // padding: 20,
  },
};

export default Signup;

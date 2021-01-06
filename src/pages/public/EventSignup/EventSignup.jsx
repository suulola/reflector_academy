import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Button from "../../../components/Button/Button";
import TextArea from "../../../components/TextArea/TextArea";
import TextInput from "../../../components/TextInput/TextInput";
import "./EventSignup.scss";

const EventSignup = () => {
  // const history = useHistory();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);


  return (
    <div className="register_container row">
      <div className="first_part col-12 col-md-6 pt-4" style={styles.firstPart}>
        <div style={{ height: '20%' }} className="p-4 d-flex flex-column justify-content-center align-items-center">
          <h4 style={{ fontSize: '2.1rem', fontWeight: '300' }} className="text-white text-center mb-1 pt-4"> Goals and Uncertainties </h4>
          <h5 style={{ fontSize: '1rem' }} className="text-white text-center">
            {" "}
           Let's talk about 2021
          </h5>
        </div>

        <div style={{ height: '80%', maxHeight: 440 }} className="d-flex justify-content-around align-items-center">
          <div className="ml-2 mr-2 mt-4 w-100">
            <img src="/images/2021light.jpg" alt="2021" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <form
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
        name="newYearEvent" 
        className="second_part col-12 col-md-6 p-5"
        >
        {success && (
          <p style={{ color: "green" }}>Thanks for registering! You will be contacted on the next line of action </p>
        )}
        <input type="hidden" name="form-name" value="newYearEvent" />
        <TextInput label={"Name"} name="name" />
        <TextInput label={"Email Address"} name="email" />
        <TextInput label={"Location(State and Country)"} name="location" />
        <TextArea
          otherClass="w-100"
          label={"What are your expectations from the event?"}
          required
          name="expectations"
        />
        <div className="mt-4">
          <Button type="submit" text="Register" solid={true} full={true} />
        </div>

      </form>
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

export default EventSignup;

import React from "react";
import Button from "../../../components/Button/Button";
import TextArea from "../../../components/TextArea/TextArea";
import TextInput from "../../../components/TextInput/TextInput";
import Footer from "../../../Layouts/Footer/Footer";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <>
      <div className="contact_page pb-5">
        <div className="p-4">
          <h2 className="text-reflector text-center mb-0 font-weight-light">
            Contact Us
          </h2>
          <p className="text-center font-weight-normal">
            Complete the form or e-mail info@reflectoracademy.com
          </p>
        </div>
        <div className="w-50">
          <TextInput
            otherClass="w-100 contact_input_style"
            label={"Name"}
            required
          />
          <TextInput
            otherClass="w-100 contact_input_style"
            label={"Email"}
            required
          />
          <TextInput
            otherClass="w-100 contact_input_style"
            label={"Phone Number"}
            required
          />
          <TextArea
            otherClass="w-100 contact_input_style"
            label={"How may we help you?"}
            required
          />

          <div className="mt-4">
            <Button text="Join Us" solid={true} full={true} />
          </div>
        </div>

        <p className="mt-4">
          You can also call us; +2348069219037, +2347061026139
        </p>
        <div className="contact_social_links d-flex mt-2">
          <img
            src="/images/c_facebook.svg"
            alt="facebook link"
            className="mx-2"
          />
          <img
            src="/images/c_instagram.svg"
            alt="instagram link"
            className="mx-2"
          />
          <img
            src="/images/c_linkedin.svg"
            alt="linkedIn link"
            className="mx-2"
          />
          <img
            src="/images/c_twitter.svg"
            alt="twitter link "
            className="mx-2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

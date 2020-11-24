import React from "react";
import Button from "../../../components/Button/Button";
import TextInput from "../../../components/TextInput/TextInput";
import Footer from "../../../Layouts/Footer/Footer";

const Ebook = () => {
  return (
    <>
      <div className="bg-grey p-5 d-flex flex-column justify-content-center align-items-center">
        <h4 className="weight-500 text-center text-reflector">
          Digital Skills For the Future Ebook
        </h4>
        <div className="w-50">
          <img
            className="w-100"
            src="/images/ebook_suit_man.svg"
            alt="Get your Ebook"
          />
        </div>
        <p className="weight-400 text-center pt-4">
          Fill in your details to download the Ebook
        </p>
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

          <div className="mt-4">
            <Button text="Download" solid={true} full={true} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ebook;

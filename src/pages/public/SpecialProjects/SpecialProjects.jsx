import React from "react";
import ImageTextBox from "../../../components/ImageTextBox/ImageTextBox";
import Footer from "../../../Layouts/Footer/Footer";

const SpecialProjects = () => {
  return (
    <>
      <div className="p-3">
        <h3 className="text-reflector p-3">Special Projects</h3>
        {/* FIRST */}
        <ImageTextBox
          first={true}
          title={"Coding for Teens/Tech4Teens"}
          description="By creating multiple educational platforms and networks, Reflector
        Academy exists to connect young Africans to personal and
        professional development tools and opportunities."
          img="/images/vision.svg"
        />

        {/* SECOND */}
        <ImageTextBox
          first={false}
          title={"Summer Camp"}
          description="By creating multiple educational platforms and networks, Reflector
        Academy exists to connect young Africans to personal and
        professional development tools and opportunities."
          img="/images/vision.svg"
        />

        {/* THIRD */}
        <ImageTextBox
          first={true}
          title={"Career Day"}
          description="By creating multiple educational platforms and networks, Reflector
        Academy exists to connect young Africans to personal and
        professional development tools and opportunities."
          img="/images/vision.svg"
        />
      </div>
      <Footer />
    </>
  );
};

export default SpecialProjects;

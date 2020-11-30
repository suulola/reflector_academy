import React from "react";
import ImageTextBox from "../../../components/ImageTextBox/ImageTextBox";
import Footer from "../../../Layouts/Footer/Footer";

const Programmes = () => {
  return (
    <>
      <div className="p-0 p-md-3">
        <h3 className="text-reflector p-3">Programmes</h3>

        <ImageTextBox
          first={true}
          title={"Career Series"}
          subTitle="Become A Professional(BAP)"
          description="By creating multiple educational platforms and networks, Reflector
        Academy exists to connect young Africans to personal and
        professional development tools and opportunities."
          img="/images/vision.svg"
        />

        <ImageTextBox
          first={false}
          title={"Reflector Web Series"}
          description="By creating multiple educational platforms and networks, Reflector
        Academy exists to connect young Africans to personal and
        professional development tools and opportunities."
          img="/images/vision.svg"
        />

        <ImageTextBox
          first={true}
          title={"Conferences/Workshops"}
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

export default Programmes;

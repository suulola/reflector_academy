import React from "react";
import MomentInPicturePreview from "../../../components/MomentInPicturePreview/MomentInPicturePreview";
import Footer from "../../../Layouts/Footer/Footer";

const momentEvents = [
  {
    mainImg: "/images/mainImg.svg",
    img1: "/images/img1.svg",
    img2: "/images/img2.svg",
    img3: "/images/img3.svg",
    img4: "/images/img4.svg",
  },
  {
    mainImg: "/images/mainImg.svg",
    img1: "/images/img1.svg",
    img2: "/images/img2.svg",
    img3: "/images/img3.svg",
    img4: "/images/img4.svg",
  },
  {
    mainImg: "/images/mainImg.svg",
    img1: "/images/img1.svg",
    img2: "/images/img2.svg",
    img3: "/images/img3.svg",
    img4: "/images/img4.svg",
  },
];

const MomentInPictures = () => {
  return (
    <div>
      <div className="p-3 bg-grey">
        <h4 className="text-center text-reflector py-5 weight-500">Moments In Pictures</h4>
        <div>
          {momentEvents.map((item, index) => (
            <MomentInPicturePreview
              key={index}
              first={index % 2 ? true : false}
              mainImg={item.mainImg}
              img1={item.img1}
              img2={item.img2}
              img3={item.img3}
              img4={item.img4}
              title={"Becoming a Professional (BAP) 2020 Bootcamp July 2020"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MomentInPictures;

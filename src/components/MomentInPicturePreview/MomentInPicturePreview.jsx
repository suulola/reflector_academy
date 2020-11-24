import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./MomentInPicturePreview.scss";

const MomentInPicturePreview = ({
  first,
  title,
  mainImg,
  img1,
  img2,
  img3,
  img4,
}) => {
  return (
    <div className="w-100 pb-5 ">
      <p className="text-reflector font-weight-bold mb-0">{title}</p>
      <div className={`row ${first ? "flex-row" : "flex-row-reverse"}`}>
        <div
          style={{
            backgroundImage: `url(${mainImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="col-sm-12 col-md-6 mx-0 px-0"
        >
        </div>
        <div className="col-sm-12 col-md-6 mx-0 px-0 groupedImages">
          <img src={img1} alt={title} />
          <img src={img2} alt={title} />
          <img src={img3} alt={title} />
          <img src={img4} alt={title} />
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center mt-3 ">
          <Link to={`/moments/${title}`}>
          <Button text="See More" solid={false} icon="/images/arrow.svg" />
          </Link>
      </div>
    </div>
  );
};

export default MomentInPicturePreview;

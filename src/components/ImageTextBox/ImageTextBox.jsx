import React from "react";

const ImageTextBox = ({ first, title, subTitle, description, img }) => {
  return (
    <>
      {first ? (
        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <img className="w-100" src={img} alt={title} />
          </div>
          <div className="col-12 col-md-6 pt-3 pr-2">
            <div className="d-flex align-items-center">
              <img width={20} src="/images/red_star.svg" alt="stars" />
              <h6 className="mt-1 mb-0 ml-2">{title}</h6>
            </div>
            {subTitle && <small className="text-red">{subTitle}</small>}{" "}
            <p className="mt-3 w-100 text-justify">{description}</p>
          </div>
        </div>
      ) : (
        <div className="row mb-5">
          <div className="col-12 col-md-6 pt-3">
            <div className="d-flex align-items-center">
              <img width={20} src="/images/red_star.svg" alt="stars" />
              <h6 className="mt-1 mb-0 ml-2">{title}</h6>
            </div>
            {subTitle && <small className="text-red">{subTitle}</small>}{" "}
            <p className="mt-3 w-100 text-justify">{description}</p>
            <p className="mt-3 w-100 text-justify">{description}</p>
          </div>

          <div className="col-12 col-md-6 pl-0">
            <img className="w-100" src={img} alt={title} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageTextBox;

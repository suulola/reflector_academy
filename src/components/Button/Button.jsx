import React from "react";
import "./Button.scss";

function Button({ type, text, solid, icon, white, full, otherClass, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      id="button"
      className={` d-flex justify-content-center align-items-center btn btn-sm mr-2 ${
        solid ? " btn-reflector" : "btn btn-outline-reflector"
      } ${otherClass}`}
      style={{
        color: white || solid ? "white" : "#061673",
        border: white ? "1px solid #fff" : "1px solid #061673",
        minWidth: icon || full ? "10rem" : "100px",
        width: full ? "100%" : "fit-content",
        height: icon || full ? "2.5rem" : "",
      }}
    >
      {icon && <img className="icon" src={icon} alt="arrow button" />} {text}
    </button>
  );
}

export default Button;

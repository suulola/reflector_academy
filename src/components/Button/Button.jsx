import React from "react";
import "./Button.scss";

function Button({ text, solid, icon, white, full }) {
  return (
    <button
      id="button"
      className={
        solid
          ? "btn btn-sm btn-reflector mr-2"
          : "btn btn-outline-reflector mr-2"
      }
      style={{
        color: white || solid ? "white" : "#061673",
        border: white ? "1px solid #fff" : "1px solid #061673",
        minWidth: icon ? '10rem' : 'auto',
        width: full ? '100%' : 'fit-content',
      }}
    >
      {icon === "arrow" && <img className="icon" src="/images/arrow.svg" alt="arrow button" />}{" "}
      {text}
    </button>
  );
}

export default Button;

import React from "react";

const TextArea = ({ label, value, onChange, otherClass, required }) => {
  return (
    <div className={`d-flex flex-column mb-3 ${otherClass}`}>
      <label style={{ color: "#363636", margin: 0 }} htmlFor="">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#E9E9EA",
          border: 0,
          borderRadius: "3px",
        }}
        cols="10"
        rows="4"
      ></textarea>
    </div>
  );
};

export default TextArea;

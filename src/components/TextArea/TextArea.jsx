import React from "react";

const TextArea = ({ name, label, value, onChange, otherClass, required, outline }) => {
  return (
    <div className={`d-flex flex-column mb-3 ${otherClass}`}>
      <label style={{ color: "#363636", margin: 0 }} htmlFor="">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: outline ? 'transparent' : "#E9E9EA",
          border: outline ? '1px solid #061673' : 0,
          borderRadius: "3px",
        }}
        cols="10"
        rows="4"
      ></textarea>
    </div>
  );
};

export default TextArea;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './BlogCard.scss'

const BlogCard = ({ title, description, id, data }) => {
  return (
    <div className="card m-3" style={{ minWidth: 0, width: 270 }}>
      <img
        src="/images/vision.svg"
        alt={title}
        className="w-100"
        style={{ borderRadius: "20px 0px 0px 0px" }}
      />
      <div className="px-3 pb-4 pt-3">
        <h6>{title}</h6>
        <small className="font-weight-light text-justify" style={{lineHeight: 1.3}}>{description}</small>
        <br/>
        <Link to={`/blog/${id}`}>
          <Button text="Read More" solid={true} otherClass="smaller_btn" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

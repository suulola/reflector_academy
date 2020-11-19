import React from "react";
import "./UserCard.scss";

const UserCard = ({ image, name, description, otherClass }) => {
  return (
    <div className={`user_card_container ${otherClass}`}>
      <img className="user_img" src={image} alt={`${name}`} />
      <img src="/images/stars.svg" alt="5 star rating" className="my-2" />
      <h5 className="text-center">{name}</h5>
      <p className="description">{description}</p>
    </div>
  );
};

export default UserCard;

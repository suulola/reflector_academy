import React from "react";
import UserCard from "../../../components/UserCard/UserCard";

const list = [
  {
    name: "Alex Chinonso",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user1.svg",
  },
  {
    name: "Sandra James",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user2.svg",
  },
  {
    name: "Tunde Okeowo",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user3.svg",
  },
  {
    name: "Femi Philips",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user1.svg",
  },
  {
    name: "Sandra James",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user2.svg",
  },
  {
    name: "Tunde Okeowo",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user3.svg",
  },
  {
    name: "Femi Philips",
    description:
      "My experience as a Reflector Academy General has been thrilling over the past 6 months and I’m on my way to becoming a catalyst for change in the society.",
    image: "/images/user1.svg",
  },
];

const ViewMembers = () => {
  return (
    <div className="bg-grey w-100 p-5">
      <div className="d-flex justify-content-center">
          <h3 style={{width: 300}} className="text-center text-reflector"> 
          Meet our Reflector Academy Generals
          </h3>
          </div>
      <div className="p-5 row justify-content-center">
        {list.map((item, index) => (
          <UserCard
            otherClass="mx-4 dashboard_user_card mb-5"
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;

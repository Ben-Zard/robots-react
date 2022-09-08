import React from "react";

const Cards = ({name,email,id}) => {
  return (
    <div>
      <img alt="robo" src={`https://robohash.org/${id}?200x200`} />
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default Cards;

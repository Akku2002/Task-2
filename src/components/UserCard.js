import React from "react";
function UserCard(props) {
  return (
    <div className="card">
      <img src={props.avatar} alt="user-avatar"></img>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}
export default UserCard;

import React from "react";
import UserCard from "./UserCard.js";
import Loading from "./Loading.js";

function Navbar(props) {
  const [usersData, setUserData] = React.useState([]);
  const [isClick, setClick] = React.useState(false);

  const loadUsers = async () => {
    setClick(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUserData(jsonResponse);
  };

  function createUser(user) {
    const userEmail = user.email;
    const userName = user.first_name + user.last_name;
    const userAvatar = user.avatar;
    return (
      <UserCard
        key={user.id}
        email={userEmail}
        name={userName}
        avatar={userAvatar}
      />
    );
  }

  function showUsers() {
    if (usersData.length === 0) {
      return;
    } else {
      return usersData.data.map(createUser);
    }
  }
  return (
    <div>
      <nav>
        <ul className="header">
          <li id="brandname">
            <h1>{props.name}</h1>
          </li>
          <li id="getuser">
            <button onClick={loadUsers} type="button">
              Get Users
            </button>
          </li>
        </ul>
      </nav>
      {isClick && usersData.length === 0 ? (
        <Loading />
      ) : (
        <div className="userCards">{showUsers()}</div>
      )}
    </div>
  );
}
export default Navbar;
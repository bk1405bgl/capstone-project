import styled from "styled-components";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import React from "react";
import { useState } from "react";
import { uid } from "uid";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  function handleAdd(newFriend) {
    console.log(friends);
    setFriends([...friends, { id: uid(), ...newFriend }]);
  }

  return (
    <main>
      <Heading>Rent - a - Comic</Heading>
      <Form onAddFriend={handleAdd} />
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendsList fName={friend.fName} />
          </li>
        ))}
      </ul>
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;

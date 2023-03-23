import styled from "styled-components";
import FriendsList from "../components/FriendsList";
import FriendForm from "../components/FriendForm";
import React, { useEffect } from "react";
import { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const { data, error, mutate } = useSWR("/api/friends", fetcher);
  useEffect(() => {
    setFriends(data);
  }, [data]);
  if (error) return <h2>Freunde konnten nicht geladen werden..</h2>;
  if (!data) return <h2>Freunde werden geladen...</h2>;

  async function addFriend(newFriend) {
    setFriends([...friends, { id: uid(), ...newFriend }]);
    const body = {
      friendName: newFriend.friendName,
      rentComicId: 0,
    };
    const response = await fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error(response.status);
    }
  }
  return (
    <main>
      <SubHeading>Freundesliste</SubHeading>
      <FriendForm onAddFriend={addFriend} />
      <div>
        {friends?.map((friend) => (
          <span key={friend._id}>
            <FriendsList friendName={friend.friendName} />
          </span>
        ))}
      </div>
    </main>
  );
}

const SubHeading = styled.h3`
  text-align: center;
`;

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";

export default function Detail({ comic, friends }) {
  // const [friendId, setFriendId] = useState({});
  // if (!comic || !friends) return <h3>Loading</h3>;
  const { id, title, upc, description, images } = comic;
  const { trigger, isMutating } = useSWRMutation(
    `/api/comics/${title}`,
    sendRequest
  );
  async function sendRequest(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  async function handleRent(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comicData = Object.fromEntries(formData);
    await trigger(comicData);
  }
  async function handleDelete() {
    await fetch(`/api/comics/${comic._id}`, {
      method: "DELETE",
    });
  }
  async function handleNoFriend(event) {
    event.preventDefault();
  }
  return (
    <main>
      <Link href="/comics">Zurück zur Übersicht</Link>
      <div>
        <div>
          <form onSubmit={handleRent}>
            <select name="friends">
              <option value="">Freund auswählen</option>
              {friends?.map((friend) => {
                return (
                  <option key={friend._id} value={friend._id}>
                    {friend.friendName}
                  </option>
                );
              })}
            </select>
            <button type="submit">Ausleihen</button>
          </form>
          <form>
            <button type="button" onClick={() => handleDelete()}>
              Aus Sammlung entfernen
            </button>
            <button type="button" onClick={handleNoFriend}>
              Vom Freund zurück erhalten
            </button>
          </form>
          <Image
            src={`${images[0].path}/portrait_xlarge.${images[0].extension}`}
            alt={title}
            width={150}
            height={225}
            priority
          />
        </div>
        <h4>Titel: {title}</h4>
        <p>
          <b>EAN/UPC/ISBN:</b> {upc}
        </p>
        <p>
          <b>Beschreibung:</b> {description}
        </p>
      </div>
    </main>
  );
}
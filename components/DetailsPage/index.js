import ComicForm from "../ComicForm";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Detail({ comic }) {
  async function addComic(newComic) {
    const body = {
      title: newComic.title,
      rentToFriendId: 0,
      apiId: newComic.apiId,
      eanupcisbn: newComic.eanupcisbn,
      description: newComic.description,
    };
    const response = await fetch("/api/comics", {
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
      <Link href="/add">zurück zur Übersicht</Link>
      <div {...comic.id}>
        <div>
          <Image
            src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
            alt={comic.title}
            width={150}
            height={225}
            priority
          />

          <ComicForm onAddComic={addComic} />
        </div>
        <h4>Titel: {comic.title}</h4>
        <p>
          <b>EAN/UPC/ISBN:</b> {comic.upc}
        </p>
        <p>
          <b>Beschreibung:</b> {comic.description}
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Detail({ comic }) {
  async function handleFetch() {
    console.log(comic);
    const response = await fetch("/api/comics", {
      method: "POST",
      body: JSON.stringify(comic),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Gespeichert");
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
          <button type="button" onClick={handleFetch}>
            Hinzufügen
          </button>
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

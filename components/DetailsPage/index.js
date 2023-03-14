import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Detail({ comic }) {
  return (
    <main>
      <Link href="/add">zurück zur Übersicht</Link>
      <div key={comic.id}>
        <div>
          <Image
            src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
            alt={comic.title}
            width={150}
            height={225}
            priority
          />
          <Link href="#">
            <Image
              src="/images/plus.png"
              alt="zur Sammlung hinzufügen"
              width={100}
              height={100}
              priority
            />
          </Link>
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

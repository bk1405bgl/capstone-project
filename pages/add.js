import styled from "styled-components";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Add({ data, error }) {
  if (error) return <h2>Comics konnten nicht geladen werden..</h2>;
  if (!data) return <h2>Comics werden geladen...</h2>;
  return (
    <main>
      <Link href="/collection">Zurück zur eigenen Sammlung</Link>
      <SubHeading>Verfügbare Comics</SubHeading>

      <div>
        {data.map((comic) => (
          <span key={comic.id}>
            <Link href={`/${comic.id}`}>
              <Image
                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                alt={comic.title}
                width={150}
                height={225}
                priority
              />
            </Link>
          </span>
        ))}
      </div>
    </main>
  );
}

const SubHeading = styled.h3`
  text-align: center;
`;

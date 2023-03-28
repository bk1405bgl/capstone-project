import styled from "styled-components";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Add({ data, error }) {
  if (error) return <h3>Comics konnten nicht geladen werden..</h3>;
  if (!data) return <h3>Comics werden geladen...</h3>;
  return (
    <main>
      <Link href="/comics">Zurück zur eigenen Sammlung</Link>
      <SubHeading>Verfügbare Comics</SubHeading>

      <div>
        {data.map((comic) => (
          <span key={comic.id}>
            <Link href={`/add/${comic.id}`}>
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

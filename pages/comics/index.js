import styled from "styled-components";
import AddToCollection from "@/components/AddToCollection";
import React, { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Comics() {
  const [comics, setComics] = useState([]);
  const { data, error } = useSWR("/api/comics", fetcher);

  useEffect(() => {
    setComics(data);
  }, [data]);
  if (error) return <h3>Comics konnten nicht geladen werden..</h3>;
  if (!data) return <h3>Comics werden geladen...</h3>;

  return (
    <main>
      <SubHeading>Comic-Sammlung</SubHeading>
      <AddToCollection />
      <ul>
        {comics?.map((comic) => (
          <>
            <hr />
            <li key={comic._id}>
              <Link href={`/comics/${comic.id}`}>
                <Image
                  src={`${comic.images[0].path}/portrait_small.${comic.images[0].extension}`}
                  alt={comic.title}
                  width={50}
                  height={75}
                  priority
                />
                {comic.title}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </main>
  );
}

const SubHeading = styled.h3`
  text-align: center;
`;

import styled from "styled-components";
import AddToCollection from "@/components/AddToCollection";
import ComicsList from "../components/ComicsList";
import React, { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Comics() {
  const [comics, setComics] = useState([]);
  const { data, error } = useSWR("api/comics", fetcher);

  useEffect(() => {
    setComics(data);
  }, [data]);
  if (error) return <h2>Comics konnten nicht geladen werden..</h2>;
  if (!data) return <h2>Comics werden geladen...</h2>;

  return (
    <main>
      <SubHeading>Comic-Sammlung</SubHeading>
      <AddToCollection />
      <div>
        {comics?.map((comic) => (
          <span key={comic._id}>
            <ComicsList title={comic.title} />
          </span>
        ))}
      </div>
    </main>
  );
}

const SubHeading = styled.h3`
  text-align: center;
`;

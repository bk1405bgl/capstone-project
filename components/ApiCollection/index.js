import { useState } from "react";

export default function ApiCollection({ data, error }) {
  const [id, setId] = useState(0);
  const [comicsInfo, setComicsInfo] = useState([]);

  function handlePrevComic() {
    setId(data.prevId);
  }

  function handleNextComic() {
    setId(data.nextId);
  }

  function handleAddToOwnCollection(id) {
    setComicsInfo((prevComicsInfo) => {
      const info = prevComicsInfo.find((info) => info.id === id);
      if (info) {
        return prevComicsInfo.map((info) =>
          info.id === id
            ? { ...info, isInOwnCollection: !info.isInOwnCollection }
            : info
        );
      }
      return [...prevComicsInfo, { id: id, isInOwnCollection: true }];
    });
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const info = comicsInfo.find((info) => info.id === id) ?? {
    isInOwnCollection: false,
  };
  const { isInOwnCollection } = info;

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.comic}</h1>
      <span
        role="img"
        aria-label={isInOwnCollection ? "A laughing face" : "An unamused face"}
      >
        {isInOwnCollection ? "🤣" : "😒"}
      </span>
      <button type="button" onClick={() => handleAddToOwnCollection(id)}>
        {isInOwnCollection ? "Stop laughing" : "Start laughing"}
      </button>
      <div>
        <button type="button" onClick={handlePrevComic}>
          ← Prev Comic
        </button>
        <button type="button" onClick={handleNextComic}>
          Next Comic →
        </button>
      </div>
    </>
  );
}

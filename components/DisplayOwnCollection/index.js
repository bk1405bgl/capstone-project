import { useState } from "react";

const ownCollection = [];

export default function DisplayOwnCollection() {
  const [comics, setComics] = useState(ownCollection);
  if (ownCollection.length === 0) {
    return <h3>Deine Samlung ist leer</h3>;
  } else {
    return (
      <>
        <h3>Hier ist deine Sammlung</h3>
        <ul>
          {comics.map((ownCollection) => (
            <li key={ownCollection.id}>
              ID: {ownCollection.id} Titel: {ownCollection.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

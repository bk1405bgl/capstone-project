import styled from "styled-components";
import DisplayOwnCollection from "../components/DisplayOwnCollection";
import AddToCollection from "../components/AddToCollection";

export default function Collection() {
  return (
    <main>
      <Heading>Rent - a - Comic</Heading>
      <AddToCollection />
      <DisplayOwnCollection />
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;

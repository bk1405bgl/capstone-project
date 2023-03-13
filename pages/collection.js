import styled from "styled-components";
import DisplayOwnCollection from "../components/DisplayOwnCollection";
import AddToCollection from "../components/AddToCollection";

export default function Collection() {
  return (
    <main>
      <SubHeading>Comic-Sammlung</SubHeading>
      <AddToCollection />
      <DisplayOwnCollection />
    </main>
  );
}

const SubHeading = styled.h3`
  text-align: center;
`;

import styled from "styled-components";

export default function Navigation() {
  return <Heading>Rent - a - Comic</Heading>;
}

const Heading = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  text-align: center;
  width: 100%;
  font-weight: 800;
  font-size: 25pt;
  background-color: lightgrey;
`;

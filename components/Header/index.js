import styled from "styled-components";

export default function Navigation() {
  return <Heading>MARVELLOUS</Heading>;
}

const Heading = styled.header`
  position: sticky;
  top: 0;
  text-align: center;
  width: 100%;
  font-weight: 750;
  font-size: 25pt;
  background-color: red;
  color: white;
  border-style: 2px solid black;
`;

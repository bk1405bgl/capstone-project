import styled from "styled-components";
import Image from "next/image";

export default function Navigation() {
  return (
    <Container>
      <StyledLink href="/">
        <Image
          src="/images/home.png"
          alt="Home"
          width={80}
          height={80}
          priority
        />
      </StyledLink>
      <StyledLink href="/collection">
        <Image
          src="/images/collection.png"
          alt="Sammlung"
          width={80}
          height={80}
          priority
        />
      </StyledLink>
      <StyledLink href="/friends">
        <Image
          src="/images/friends.png"
          alt="Freunde"
          width={80}
          height={80}
          priority
        />
      </StyledLink>
    </Container>
  );
}

const Container = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 13vh;
  position: fixed;
  bottom: -16px;
  left: 0;
  width: 100%;
  border-top: 5px solid;
  background-color: white;
`;
const StyledLink = styled.a`
  margin-left: -30px;
  margin-right: 10px;
  margin-top: 4px;
`;

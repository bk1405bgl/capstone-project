import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <Container>
      <Link href="/">
        <Image
          src="/images/home.png"
          alt="Home"
          width={80}
          height={80}
          priority
        />
      </Link>
      <Link href="/comics">
        <Image
          src="/images/collection.png"
          alt="Sammlung"
          width={80}
          height={80}
          priority
        />
      </Link>
      <Link href="/friends">
        <Image
          src="/images/friends.png"
          alt="Freunde"
          width={80}
          height={80}
          priority
        />
      </Link>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: -1px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 12vh;
  left: 0;
  width: 100%;
  background-color: red;
`;

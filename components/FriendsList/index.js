import Link from "next/link";

export default function FriendsList({ friendName }) {
  return (
    <section>
      <hr />
      <span>
        <Link href="#">{friendName}</Link>
      </span>
    </section>
  );
}

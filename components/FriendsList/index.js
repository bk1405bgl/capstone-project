import Link from "next/link";

export default function FriendsList({ friendName }) {
  return (
    <section>
      <hr />
      <div>
        <Link href="#">{friendName}</Link>
      </div>
    </section>
  );
}

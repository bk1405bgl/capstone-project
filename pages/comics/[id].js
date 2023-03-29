import Detail from "../../components/DetailsPageOwn";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ComicDetailsPage() {
  const { data: friendsData, error: friendsError } = useSWR(
    "/api/friends",
    fetcher
  );

  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR("/api/comics", fetcher);
  if (error || friendsError)
    return <h3>Daten konnten nicht geladen werden!</h3>;
  if (!data || !friendsData) return <h3>Daten werden geladen...</h3>;

  const currentComicOwn = data.find((element) => element.id === Number(id));

  return <Detail comic={currentComicOwn} friends={friendsData} />;
}

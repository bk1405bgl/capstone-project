import Detail from "../components/DetailsPage";
import { useRouter } from "next/router";

export default function ComicDetailsPage({ data, error }) {
  const router = useRouter();
  const { id } = router.query;

  if (error) return <h2>Comic konnte nicht geladen werden!</h2>;
  if (!data) return <h2>Comic wird geladen...</h2>;

  const currentComic = data.find((element) => element.id == id);

  return <Detail comic={currentComic} />;
}

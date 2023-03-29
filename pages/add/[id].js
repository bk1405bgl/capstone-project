import Detail from "../../components/DetailsPageApi";
import { useRouter } from "next/router";

export default function ComicDetailsPage({ data, error }) {
  const router = useRouter();
  const { id } = router.query;

  if (error) return <h3>Comic konnte nicht geladen werden!</h3>;
  if (!data) return <h3>Comic wird geladen...</h3>;

  const currentComicApi = data.find((element) => element.id == id);

  return <Detail comic={currentComicApi} />;
}

import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    `https://gateway.marvel.com/v1/public/comics?ts=1&format=comic&apikey=fd6bb58eac21e926c83c4dda3a54a62c&hash=5d44599bf2c766e6d06e127fd4fd3eae`,
    fetcher
  );
  const results = data?.data.results;
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} data={results} error={error} />
    </>
  );
}

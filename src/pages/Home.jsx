import React from "react";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Layout from "../components/Layout";
import Hero from "../components/Fragments/Hero";
import { getDataFromApi } from "../utils/getDataFromApi";
import MovieList from "../components/Fragments/MovieList";

export default function Home() {
  useDocumentTitle("Beranda | WatchList");
  const fetchData = async () => {
    const data = await getDataFromApi();
    console.log(data);
  };

  fetchData();

  return (
    <Layout>
      <Hero />
      <MovieList />
    </Layout>
  );
}

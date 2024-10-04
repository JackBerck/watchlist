import React from "react";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Layout from "../components/Layout";
import Hero from "../components/Fragments/Hero";

export default function Home() {
  useDocumentTitle("Beranda | WatchList");

  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

import React from "react";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Layout from "../components/Layout";

export default function Home() {
  useDocumentTitle("Beranda | WatchList");

  return <Layout></Layout>;
}

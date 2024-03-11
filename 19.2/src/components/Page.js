import React from "react";
import { useGlobalContext } from "../context/App.context";

const Page = () => {
  const {  pageClass } = useGlobalContext();
  return <main className={"page " + pageClass}>The Home Page</main>;
};

export default Page;

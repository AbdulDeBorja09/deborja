import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <section className="maindiv">
        <Navbar />
      </section>

      <section className="aboutdiv">
        <h1 className="text-center text-white">
          ABOUT <span>ME</span>
        </h1>
        <div></div>
      </section>
    </>
  );
}

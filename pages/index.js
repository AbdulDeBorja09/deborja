import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <section className="maindiv">
        <Navbar />
        <div className="row">
          <div className="col-lg-7 col-md-12"></div>
          <div className="info col-lg-5 col-md-12">
            <h1>HI,</h1>
            <h1>I'AM ABDUL,</h1>
            <h1>
              <span className="brown">WEB </span>
              <span>DEVELOPER</span>,
            </h1>
            <h6>JUNIOR WEB DEVELOPER / FULLSTACK WEB DEVELOPER</h6>
            <a className="hiremenbtn btn">HIRE ME!</a>
          </div>
        </div>
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

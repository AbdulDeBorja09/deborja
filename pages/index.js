import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Call the API route to send the IP address
    const sendIpToDiscord = async () => {
      try {
        const response = await fetch("/api/sendIp");
        if (!response.ok) {
          throw new Error("Failed to send IP to Discord");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    sendIpToDiscord();
  }, []);
  return (
    <>
      <section className="maindiv">
        <Navbar />
        <div className="row">
          <div className="col-lg-7 col-md-12"></div>
          <div className="info col-lg-5 col-md-12">
            <h1>HI,</h1>
            <h1>I'M ABDUL,</h1>
            <h1>
              <span className="brown">WEB </span>
              <span>DEVELOPER</span>,
            </h1>
            <h6>JUNIOR WEB DEVELOPER / FULLSTACK WEB DEVELOPER</h6>
            <a className="hiremenbtn btn" href="#contact">
              HIRE ME!
            </a>
          </div>
        </div>
      </section>
      <section className="elementbg">
        <About />
        <Projects />
        <Contact />
      </section>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="maindiv">
        <h1>HEHHE</h1>
      </section>

      <section className="aboutdiv">
        <div className="py-32 px-40">
          <div className="innerdiv grid lg: grid-cols-2 gap-3 text-white">
            <div className=" py-16 px-12">
              <h1>ABDUL AZIZ A. DE BORJA</h1>
              <h2>JUNIOR WEB DEVELOPER</h2>
            </div>
            <div className="pt-16">
              <h3 className="text-center">
                CONTACT <span>ME</span>
              </h3>
              <form>inp</form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="title text-center text-white">
          ABOUT <span className="brown">ME</span>
        </h1>
        <div className="row">
          <div className="personal-info col-lg-4 col-md-12">
            <h1>ABDUL AZIZ A. DEBORJA</h1>
            <h2>JUNIOR WEB DEVELOPER</h2>
            <p>
              I'm an IT student in Laguna, studying at the National University.
              Specializing in mobile and network technology, and website
              programming, I'm passionate about staying at the forefront of tech
              advancements. Eager to contribute my skills to the ever-evolving
              field, I'm on a journey to carve my niche in the exciting realm of
              digital technology.
            </p>
          </div>
          <div className="education-info col-lg-4 col-md-12">
            <img className="school" src="/image/school.png"></img>
            <h1>NATIONAL UNIVERSITY LAGUNA</h1>
            <h2>BS INFORMATION TECHNOLOGY</h2>
            <h3>Km. 53 Pan-Philippine Hwy, Calamba, 4029 Laguna</h3>
            <h3>2022-2026</h3>
            <div className="row">
              <div className="col-6">
                <img className="contact" src="/image/contact.png"></img>
                <h4>CONTACT</h4>
                <h5>+63934077117</h5>
              </div>
              <div className="col-6">
                <img className="contact" src="/image/gmail.png"></img>
                <h4>EMAIL</h4>
                <h5>abduldb09@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="myimg-div col-lg-4 col-md-12 ">
            <img className="myimg" src="/image/me.png"></img>
          </div>
        </div>
        <div className="certificate">
          <h1 className="certificate text-center">CERTIFICATE</h1>
          <div className="cert-div">
            <div className="cert-box text-center">
              <h2>KODEGO BOOTCAMP</h2>
              <h3>FULL STACK WEB DEVELOPMENT BOOTCAMP</h3>
              <h4>BATCH: WD69P</h4>
              <a className="text-white">VIEW CERTIFICATE</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

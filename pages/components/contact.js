import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="contact-container" id="contact">
        <div className="inner-div">
          <div className="row">
            <div className="my-name col-lg-6 col-md-12">
              <h1>ABDUL AZIZ A. DE BORJA</h1>
              <h2>JUNIOR WEB DEVELOPER</h2>
              <div className="contact-icons">
              <img  src="/image/phone.png"></img>
              <img  src="/image/email.png"></img>
              </div>
            </div>
            <div className="contact-form col-lg-6 col-md-12">
              <h3>
                CONTACT <span>ME</span>
              </h3>
              <form
                method="POST"
                action="https://formsubmit.co/abduldb09@gmail.com"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="short-input"
                      placeholder="name"
                    ></input>
                  </div>
                  <div className="email-input col-lg-5 col-md-12">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                       className="short-input"
                      placeholder="Email"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <label htmlFor="sub">Subject</label>
                    <input
                      id="sub"
                      type="text"
                      name="_subject"
                      placeholder="Subject"
                       className="long-input"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <label htmlFor="msg">Message</label>
                    <input
                      id="msg"
                      type="text"
                      name="message"
                      placeholder="Message"
                               className="long-input"
                      required
                    ></input>
                  </div>
                </div>
              <div className="btn-div"><button type="submit">SUBMIT</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="contact-container" id="contact">
        <div className="inner-div">
          <div className="row">
            <div className="col-lg-6 col-md-12">sdsd</div>
            <div className="contact-form col-lg-6 col-md-12">
              <h3>
                CONTACT <span>ME</span>
              </h3>
              <form
                method="POST"
                action="https://formsubmit.co/abduldb09@gmail.com"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="name"
                    ></input>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <label for="sub">Subject</label>
                    <input
                      id="sub"
                      type="text"
                      name="_subject"
                      placeholder="Subject"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <label for="msg">Message</label>
                    <input
                      id="msg"
                      type="text"
                      name="message"
                      placeholder="Message"
                      required
                    ></input>
                  </div>
                </div>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

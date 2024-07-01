import Head from "next/head";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="nav-inner container-fluid ">
          <a className="navbar-brand" href="#">
            <img className="logo" src={`/image/logo.png`} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto sm-collapse">
              <a className="nav-link text-white" href="#">
                HOME
              </a>
              <a className="nav-link text-white" href="#">
                ABOUT ME
              </a>
              <a className="nav-link text-white " href="#">
                EXPERTISE
              </a>
              <a className="nav-link  text-white ">PROJECTS</a>

              <a className="nav-link  text-white ">REACH OUT!</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

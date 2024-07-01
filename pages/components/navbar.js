import Head from "next/head";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="nav-inner container-fluid ">
          <a className="navbar-brand" href="#">
            <img className="logo" src={`/image/logo.png`} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body" id="navbarNavAltMarkup">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  De Borja
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="navbar-nav ml-auto sm-collapse">
                <a className="nav-link text-white" href="#">
                  HOME
                </a>
                <a className="nav-link text-white" href="#about">
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
        </div>
      </nav>
    </>
  );
}

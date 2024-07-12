import { useState } from 'react';

const OffcanvasNavbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const closeNavbar = () => {
        setShowNavbar(false);
    };

    const handleLinkClick = () => {
        closeNavbar(); 
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="nav-inner container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={`/image/logo.png`} alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`offcanvas offcanvas-end text-bg-dark ${showNavbar ? 'show' : ''}`}
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
                                onClick={closeNavbar}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="navbar-nav ml-auto sm-collapse">
                            <a className="nav-link text-white" href="#" onClick={handleLinkClick}>
                                HOME
                            </a>
                            <a className="nav-link text-white" href="#about" onClick={handleLinkClick}>
                                ABOUT ME
                            </a>
                            <a className="nav-link text-white" href="#projects" onClick={handleLinkClick}>
                                PROJECTS
                            </a>
                            <a className="nav-link text-white" href="#" onClick={handleLinkClick}>
                                EXPERTISE
                            </a>
                            <a className="nav-link text-white" href="#contact" onClick={handleLinkClick}>
                                REACH OUT!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default OffcanvasNavbar;

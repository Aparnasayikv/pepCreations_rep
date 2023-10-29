import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand navbar-toggler" data-toggle="collapse" href="#">
          <img
            style={{ height: "50px" }}
            src="https://cdn.bitrix24.in/b25992183/disk/65a/65a8ac7979cdbe55cd0405c947184627/1640ef4ef59d550ae5a75770dce39cae"
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item main active ">
              <a class="nav-link  mr-5 pr-5 " href="#">
                <img
                  style={{ height: "50px" }}
                  src="https://cdn.bitrix24.in/b25992183/disk/65a/65a8ac7979cdbe55cd0405c947184627/1640ef4ef59d550ae5a75770dce39cae"
                  alt="Logo"
                />
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="tel:+919384806335">
                +919384806335 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:info@pepcreations.com">
                INFO@PEPCREATIONS.COM
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#carouselExampleControls">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                BITRIX24
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                OUR PORTFOLIO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#partners">
                OUR PARTNERS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CAREER
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

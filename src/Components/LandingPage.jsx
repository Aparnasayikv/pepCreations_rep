import React from "react";

const LandingPage = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleControls"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="container-fluid"
            style={{
              background: "linear-gradient(180deg, #ffd6ff 0%, #00b4d8 100%)",
              height: "40vw",
              paddingTop: "15%",
            }}
          >
            <div className="row">
              <div className="col-6 h-100 m-auto">
                <span className="ai">AI - ERP</span>
                <p className="noc">
                  NOC & SOC
                  <br />
                </p>
                <p className="noc">SAAS & PAAS</p>
                <p className="desc">
                  Managed IT Solution for Cloud & On Premises <br />
                  Server Development, Animation Studio.
                </p>
              </div>{" "}
              <div className="col-6">
                <img
                  style={{ width: "-webkit-fill-available" }}
                  className="d-block"
                  src="https://cdn.bitrix24.in/b25992183/landing/a0b/a0bfe545e854652a549a62d350862ddf/multi-platform.d1b9ab4c_1x.png"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="container-fluid"
            style={{
              background: "linear-gradient(180deg, #ffd6ff 0%, #00b4d8 100%)",
              height: "40vw",
              paddingTop: "15%",
            }}
          >
            <div className="row">
              <h2 className="off col-6 text-uppercase align-middle text-center font-weight-bold m-auto">
                Official <br />
                Bitrix24 Partner
              </h2>
              <div className="col-6">
                <img
                  style={{ width: "-webkit-fill-available" }}
                  className="d-block"
                  src="https://cdn.bitrix24.in/b25992183/landing/bd4/bd43516d7054910a7a6f2cadd4f1fd4d/bitrix24_logo_1x.png"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default LandingPage;

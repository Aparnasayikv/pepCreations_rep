import React from "react";

const Portfolio = () => {
  return (
    <>
      <h1 className="centered-heading text-center" id="portfolio">
        Our Portfolio & Products
      </h1>

      <div class="card-deck ">
        <div class="card mx-5 ">
          <img
            class="card-img-top"
            src="https://cdn.bitrix24.in/b25992183/landing/acc/accf2d98edd39cecd8a8e90c59b3780a/Screenshot_2023-08-14_162336_1x.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <div className="float_icon">
              <i class="fa-brands fa-audible"></i>
            </div>
            <h5 class="card-title">SHAREPOINT ERP</h5>
            <p class="card-text">WE HAVE BUILT AN ERP IN THE MS-SHAREPOINT</p>
            <p class="card-text-sub">coustamizable</p>
            <div class="row">
              <div class="column card-text-des "> Delivery in 2 Weeks</div>
              <div class="column card-text-des ">
                HRMS, CRM, ERP, Marketing, ETC
              </div>
              <div class="column card-text-des">200 Rs Per Hour</div>
            </div>

            <div class="text-center">
              <button type="button" class="btn btn-green">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://cdn.bitrix24.in/b25992183/landing/c4e/c4e10d3dc0fcae6d4d4c79802f6d41fe/Screenshot_2023-08-14_163544_1x.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <div className="float_icon">
              <i class="fa-brands fa-battle-net"></i>
            </div>
            <h5 class="card-title">MIS REPORT</h5>
            <p class="card-text">
              WE CAN BUILT YOU A MSI REPORT IN AN ANALYTICAL VIEW ON POWER
              BI,TABULA,G-STUDIO ETC
            </p>
            <p class="card-text-sub">live report</p>
            <div class="row">
              <div class="column card-text-des "> Delivery in 2 Days</div>
              <div class="column card-text-des ">Live Recurrent Report</div>
              <div class="column card-text-des">300 Rs Per Hour</div>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-green">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://cdn.bitrix24.in/b25992183/landing/2c0/2c0107b5588b7c24a78d41bbf1931b9f/MicrosoftTeams-image_15_1x.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <div className="float_icon">
              <i class="fa-brands fa-android"></i>
            </div>
            <h5 class="card-title">BPO PORTAL</h5>
            <p class="card-text">
              WE CAN BUILT YOU A BPO & ERP PORTAL FOR YOU WITH CODING IN BOTH
              SAAS & PAAS
            </p>
            <p class="card-text-sub">server hosting</p>
            <div class="row">
              <div class="column card-text-des "> Delivery in One Month</div>
              <div class="column card-text-des ">SQL & Data Analysis</div>
              <div class="column card-text-des">500 Rs Per Hour</div>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-green">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

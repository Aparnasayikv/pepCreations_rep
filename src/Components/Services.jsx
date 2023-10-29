import React from "react";

const Services = () => {
  return (
    <>
      <div className="services-heading">Our Services</div>
      <div class="container pb-5 ">
        <div class=" services row">
          <div class="col-1 bg-white icon-green ">
            <i class="fa-regular fa-square-check"></i>
          </div>
          <div class="col-5 bg-white pb-5">
            <h2 className="headings">MANAGED IT SERVICES</h2>
            <p>
              With our Client-Focused Managed IT Services, you can focus on
              growing your business while we take care of your technology needs.
              Experience seamless IT operations, enhanced security, and expert
              guidance that drives your business forward. Let us be your trusted
              technology partner, dedicated to your success.
            </p>
          </div>
          <div class="col-1 bg-white icon-green ">
            <i class="fa-solid fa-chart-pie"></i>
          </div>
          <div class="col-5 bg-white">
            <h2 className="headings">CYBER SECURITY</h2>
            <p>
              In today's digital landscape, cybersecurity is paramount to the
              success and sustainability of your business. Our Comprehensive
              Cybersecurity Solutions offer a multi-faceted approach to
              safeguard your sensitive data, protect your assets, and fortify
              your digital presence against ever-evolving threats.
            </p>
          </div>
          <div class="col-1 bg-white icon-green ">
            <i class="fa-solid fa-box-archive"></i>
          </div>
          <div class="col-5 bg-white">
            <h2 className="headings">ENTERPRIZE SUPPORT</h2>
            <p>
              With our Enterprise Support Services, you gain a strategic partner
              dedicated to your organization's success. We understand the
              demands of operating at scale and are committed to delivering
              solutions that enable you to focus on innovation, growth, and
              achieving your business goals. Let us be your dependable support
              pillar, empowering your enterprise to flourish.
            </p>
          </div>
          <div class="col-1 bg-white">
            <i class="fa-solid fa-truck icon-green"></i>
          </div>
          <div class="col-5 bg-white">
            <h2 className="headings">24/7 HELP DESK</h2>
            <p>
              With our 24/7 Help Desk Services, you gain a reliable partner
              dedicated to keeping your technology running smoothly at all
              times. Whether it's a technical glitch or a simple query, our
              experts are just a call or click away. Let us be the lifeline that
              ensures your business remains productive and efficient, day and
              night.
            </p>
          </div>
        </div>
      </div>
      <div className=" container text-center">
        <button className="view-button">VIEW OTHER SERVICES</button>
      </div>
    </>
  );
};

export default Services;

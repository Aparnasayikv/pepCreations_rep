import React from "react";
import "bootstrap";

const ContactPage = () => {
  return (
    <div className="contack-bg d-flex justify-content-center ">
      <div className="label-wrap">
        <div
          style={{ width: "45vw" }}
          className="d-flex bg-white mx-5 my-5 pb-4 flex-column align-items-center rounded"
        >
          <h3 className="pt-4">Contact form</h3>
          <hr className="hrl" />
          <form className=" d-flex flex-column w-100 px-5 form_label">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Country" />
            <input placeholder="Phone Number" />
            <input placeholder="E-mail" />
            <textarea placeholder="Comment" />
            <button type="submit" className="btn btn-primary py-3 ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from "react";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="partner-page">
      <div className="our-partners">
        <h2>Our Partners</h2>{" "}
      </div>
    </div>
  );
}

export default function App() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <span id="partners"> {""}</span>
      <SamplePrevArrow />
      <Slider {...settings}>
        {products?.map((item, index) => {
          return (
            <div className="slider-s" style={{}}>
              <img
                src={item.image}
                style={{
                  width: "-webkit-fill-available",
                  height: "min-content",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

const products = [
  {
    id: 1,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/273/2732f7aa78a1ed5e2ffe6870b01518de/images_1_1x.png",
  },
  {
    id: 2,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/bc7/bc742fce8f33b0b065f2eced1ca354c5/download_2_1x.png",
  },
  {
    id: 3,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/be2/be2ff0408b28acfcadf77083a09f796d/images_5_1x.png",
  },
  {
    id: 4,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/999/999bf2805bfe2f4933d38eed5b4ccf96/images_1_1x.png",
  },

  {
    id: 5,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/96a/96ae162538245f39ada71a46328a59b4/images_1x.png",
  },
  {
    id: 6,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/ba9/ba9e7cfaab1feda2a9d6569aedf64766/manageeengine-logo_1x.png",
  },
  {
    id: 7,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/2d3/2d33a6c19c5114c3b1e570fc852e3d08/images_2_1x.png",
  },

  {
    id: 8,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/614/614e7e59e5c531e93532dd7154e28f6e/images_4_1x.png",
  },
  {
    id: 9,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/16d/16dfe32613b9e54f0567591cbe0db93d/images_3_1x.png",
  },
  {
    id: 10,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/bd4/bd43516d7054910a7a6f2cadd4f1fd4d/bitrix24_logo_1x.png",
  },
  {
    id: 11,
    image:
      "https://cdn.bitrix24.in/b25992183/landing/396/396386311f0a6eb5d396976c20c0e5ca/images_1x.png",
  },
];

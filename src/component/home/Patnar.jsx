import React from 'react';
import Slider from 'react-slick';

const Patnar = () => {
  const settings = {
    dots: false,       // hide dots
    arrows: false,     // hide arrows
    infinite: true,
    speed: 500,
    slidesToShow: 4,   // একসাথে কত logos দেখাবে
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const logos = [
    "/images/patnar-logo/p-1.png",
    "/images/patnar-logo/p-2.png",
    "/images/patnar-logo/p-3.png",
    "/images/patnar-logo/p-4.png",
    "/images/patnar-logo/p-2.png",
    "/images/patnar-logo/p-3.png",
  ];

  return (
    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
      <div className="container">
        <Slider {...settings} className="patnar-slied">
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="singel-patnar text-center mt-40">
                <img src={logo} alt="Logo" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Patnar;

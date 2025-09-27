import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "20px",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <i className="fa fa-angle-left fa-4x text-white"></i>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <i className="fa fa-angle-right fa-4x text-white"></i>
  </div>
);

const HeroSlider = () => {
  const doAnimations = (elements) => {
    const animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    elements.forEach((el) => {
      const delay = el.getAttribute("data-delay");
      const type = "animate__animated " + el.getAttribute("data-animation");

      el.style.animationDelay = delay;
      el.style.webkitAnimationDelay = delay;

      el.classList.add(...type.split(" "));

      const handleAnimationEnd = () => {
        el.classList.remove(...type.split(" "));
        el.removeEventListener("animationend", handleAnimationEnd);
      };

      el.addEventListener("animationend", handleAnimationEnd);
    });
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
    onInit: () => {
      const firstAnimating = document
        .querySelector(".single-slider")
        .querySelectorAll("[data-animation]");
      doAnimations(Array.from(firstAnimating));
    },
    beforeChange: (oldIndex, newIndex) => {
      const nextSlide = document.querySelector(
        `.single-slider[data-index="${newIndex}"]`
      );
      if (nextSlide) {
        const animating = nextSlide.querySelectorAll("[data-animation]");
        doAnimations(Array.from(animating));
      }
    },
  };

  return (
    <section id="slider-part" className="slider-active">
      <Slider {...settings}>
        {/* Slide 1 */}
       <div>
         <div
          className="single-slider slider-2 bg_cover"
          style={{ backgroundImage: `url(/images/slider/s-2.jpg)` }}
          data-overlay="4"
          data-index="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10">
                <div className="slider-cont">
                  <h1 data-animation="animate__bounceInLeft" data-delay="1s">
                    More than 5,000+ courses for develop your skill
                  </h1>
                  <a
                    data-animation="animate__fadeInUp"
                    data-delay="1.3s"
                    href="#"
                    className="main-btn"
                  >
                    Start Trial now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>

        {/* Slide 2 */}
        <div>
            <div
            className="single-slider slider-2 bg_cover"
            style={{ backgroundImage: `url(/images/slider/s-3.jpg)` }}
            data-overlay="4"
            data-index="1"
            >
            <div className="container">
                <div className="row">
                <div className="col-xl-9 col-lg-10">
                    <div className="slider-cont">
                    <h1 data-animation="animate__bounceInLeft" data-delay="1s">
                        Learn skills with expert instructors
                    </h1>
                    <a
                        data-animation="animate__fadeInUp"
                        data-delay="1.3s"
                        href="#"
                        className="main-btn"
                    >
                        Join Now
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div
            className="single-slider slider-2 bg_cover"
            style={{ backgroundImage: `url(/images/slider/s-1.jpg)` }}
            data-overlay="4"
            data-index="2"
            >
            <div className="container">
                <div className="row">
                <div className="col-xl-9 col-lg-10">
                    <div className="slider-cont">
                    <h1 data-animation="animate__bounceInLeft" data-delay="1s">
                        Upgrade your career today
                    </h1>
                    <a
                        data-animation="animate__fadeInUp"
                        data-delay="1.3s"
                        href="#"
                        className="main-btn"
                    >
                        Explore Courses
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSlider;

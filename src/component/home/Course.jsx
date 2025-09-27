import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
     <section id="course-part" className="pt-115 pb-115">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-45">
                        <h5>Our course</h5>
                        <h2>Featured courses </h2>
                    </div> 
                </div>
            </div>
            <div className="course-slied mt-30">
                <Slider {...settings}>
                    <div className="p-3">
                        <div className="singel-course-2 ">
                            <div className="thum">
                                <div className="image">
                                    <img src="images/course/cu-1.jpg" alt="Course"/>
                                </div>
                                <div className="price">
                                    <span>Free</span>
                                </div>
                                <div className="course-teacher">
                                    <div className="thum">
                                        <a href="courses-singel.html"><img src="images/course/teacher/t-1.jpg" alt="teacher"/></a>
                                    </div>
                                    <div className="name">
                                        <a href="#"><h6>Mark anthem</h6></a>
                                    </div>
                                    <div className="review">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont">
                                <a href="#"><h4>Learn basis javascirpt from start for beginner</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="singel-course-2">
                            <div className="thum">
                                <div className="image">
                                    <img src="images/course/cu-2.jpg" alt="Course"/>
                                </div>
                                <div className="price">
                                    <span>Free</span>
                                </div>
                                <div className="course-teacher">
                                    <div className="thum">
                                        <a href="courses-singel.html"><img src="images/course/teacher/t-2.jpg" alt="teacher"/></a>
                                    </div>
                                    <div className="name">
                                        <a href="#"><h6>Mark anthem</h6></a>
                                    </div>
                                    <div className="review">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont">
                                <a href="#"><h4>Learn basis javascirpt from start for beginner</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="singel-course-2">
                            <div className="thum">
                                <div className="image">
                                    <img src="images/course/cu-3.jpg" alt="Course"/>
                                </div>
                                <div className="price">
                                    <span>Free</span>
                                </div>
                                <div className="course-teacher">
                                    <div className="thum">
                                        <a href="courses-singel.html"><img src="images/course/teacher/t-3.jpg" alt="teacher"/></a>
                                    </div>
                                    <div className="name">
                                        <a href="#"><h6>Mark anthem</h6></a>
                                    </div>
                                    <div className="review">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont">
                                <a href="#"><h4>Learn basis javascirpt from start for beginner</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="singel-course-2">
                            <div className="thum">
                                <div className="image">
                                    <img src="images/course/cu-4.jpg" alt="Course"/>
                                </div>
                                <div className="price">
                                    <span>Free</span>
                                </div>
                                <div className="course-teacher">
                                    <div className="thum">
                                        <a href="courses-singel.html"><img src="images/course/teacher/t-4.jpg" alt="teacher"/></a>
                                    </div>
                                    <div className="name">
                                        <a href="#"><h6>Mark anthem</h6></a>
                                    </div>
                                    <div className="review">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont">
                                <a href="#"><h4>Learn basis javascirpt from start for beginner</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="singel-course-2">
                            <div className="thum">
                                <div className="image">
                                    <img src="images/course/cu-5.jpg" alt="Course"/>
                                </div>
                                <div className="price">
                                    <span>Free</span>
                                </div>
                                <div className="course-teacher">
                                    <div className="thum">
                                        <a href="courses-singel.html"><img src="images/course/teacher/t-5.jpg" alt="teacher"/></a>
                                    </div>
                                    <div className="name">
                                        <a href="#"><h6>Mark anthem</h6></a>
                                    </div>
                                    <div className="review">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont">
                                <a href="#"><h4>Learn basis javascirpt from start for beginner</h4></a>
                            </div>
                        </div>
                    </div>
                    </Slider>
            </div>
        </div>
    </section>


    
  );
}
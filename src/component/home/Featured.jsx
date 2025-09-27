import React from 'react'
import Slider from 'react-slick';

const Featured = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
  return (
      <section id="teachers-part" className="pt-65 pb-120 gray-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title mt-50 pb-25">
                        <h5>Top Tutors</h5>
                        <h2>Featured Teachers</h2>
                    </div> {/* section title */}
                    <div className="teachers-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="teachers-2-singel mt-30">
                                    <div className="thum">
                                        <img src="images/teachers/teacher-2/tc-1.jpg" alt="Teacher"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-singel.html"><h5>Mark anthem</h5></a>
                                        <p>JAVA Expert</p>
                                        <span><i className="fa fa-book"></i>10 Courses</span>
                                    </div>
                                </div> {/* teachers 2 singel */}
                            </div>
                            <div className="col-md-6">
                                <div className="teachers-2-singel mt-30">
                                    <div className="thum">
                                        <img src="images/teachers/teacher-2/tc-2.jpg" alt="Teacher"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-singel.html"><h5>Hellen Mark</h5></a>
                                        <p>Laravel Expert</p>
                                        <span><i className="fa fa-book"></i>05 Courses</span>
                                    </div>
                                </div> {/* teachers 2 singel */}
                            </div>
                            <div className="col-md-6">
                                <div className="teachers-2-singel mt-30">
                                    <div className="thum">
                                        <img src="images/teachers/teacher-2/tc-1.jpg" alt="Teacher"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-singel.html"><h5>Maria Noor</h5></a>
                                        <p>JAVA Expert</p>
                                        <span><i className="fa fa-book"></i>10 Courses</span>
                                    </div>
                                </div> {/* teachers 2 singel */}
                            </div>
                            <div className="col-md-6">
                                <div className="teachers-2-singel mt-30">
                                    <div className="thum">
                                        <img src="images/teachers/teacher-2/tc-1.jpg" alt="Teacher"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-singel.html"><h5>Alan hen</h5></a>
                                        <p>Laravel Expert</p>
                                        <span><i className="fa fa-book"></i>05 Courses</span>
                                    </div>
                                </div> {/* teachers 2 singel */}
                            </div>
                        </div> {/* row */}
                    </div> {/* teachers 2 */}
                </div>
                <div className="col-lg-6 ">
                    <div className="happy-student mt-55">
                        <div className="happy-title">
                            <h3>Happy Students</h3>
                        </div>
                        <div className="student-slied">
                            <Slider>
                                <div className="singel-student">
                                    <img src="images/teachers/teacher-2/quote.png" alt="Quote"/>
                                    <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet</p>
                                    <h6>Mark anthem</h6>
                                    <span>Bsc, Engineering</span>
                                </div> {/* singel student */}
                                
                                <div className="singel-student">
                                    <img src="images/teachers/teacher-2/quote.png" alt="Quote"/>
                                    <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet</p>
                                    <h6>Mark anthem</h6>
                                    <span>Bsc, Engineering</span>
                                </div> {/* singel student */}
                                
                                <div className="singel-student">
                                    <img src="images/teachers/teacher-2/quote.png" alt="Quote"/>
                                    <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet</p>
                                    <h6>Mark anthem</h6>
                                    <span>Bsc, Engineering</span>
                                </div> {/* singel student */}
                            </Slider>
                        </div> {/* student slied */}
                        <div className="student-image">
                            <img src="images/teachers/teacher-2/happy.png" alt="Image"/>
                        </div>
                    </div> {/* happy student */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
  )
}

export default Featured
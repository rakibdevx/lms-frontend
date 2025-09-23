import React from 'react'
import Common from '../../common/Common'

const Home = () => {
  return (
    <Common>
      <section id="slider-part" className="slider-active">
        <div className="single-slider slider-2 bg_cover" style={{ backgroundImage: `url(/images/slider/s-2.jpg)` }} data-overlay="4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-10">
                        <div className="slider-cont">
                            <h1 data-animation="bounceInLeft" data-delay="1s">More than 5,000+ courses for develop your skill</h1>
                            <a data-animation="fadeInUp" data-delay="1.3s" href="#" className="main-btn">Start Trial now</a>
                        </div>
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* single slider */}
        
        <div className="single-slider slider-2 bg_cover" style={{backgroundImage: `url(images/slider/s-3.jpg)`}} data-overlay="4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-10">
                        <div className="slider-cont">
                            <h1 data-animation="bounceInLeft" data-delay="1s">More than 5,000+ courses for develop your skill</h1>
                            <a data-animation="fadeInUp" data-delay="1.3s" href="#" className="main-btn">Start Trial now</a>
                        </div>
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* single slider */}
        
        <div className="single-slider slider-2 bg_cover" style={{backgroundImage: `url(images/slider/s-1.jpg)`}} data-overlay="4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-10">
                        <div className="slider-cont">
                            <h1 data-animation="bounceInLeft" data-delay="1s">More than 5,000+ courses for develop your skill</h1>
                            <a data-animation="fadeInUp" data-delay="1.3s" href="#" className="main-btn">Start Trial now</a>
                        </div>
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* single slider */}
      </section>
    
    {/*====== SLIDER PART ENDS ======*/}
   
    {/*====== CATEGORY PART START ======*/}
    
    <section id="category-2-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="category-2-items pt-10">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="singel-items text-center mt-30">
                                    <div className="items-image">
                                        <img src="images/category/ctg-1.jpg" alt="Category"/>
                                    </div>
                                    <div className="items-cont">
                                        <a href="#">
                                            <h5>App Design</h5>
                                            <span>24 courses</span>
                                        </a>
                                    </div>
                                </div> {/* singel items */}
                            </div>
                            <div className="col-md-6">
                                <div className="singel-items text-center mt-30">
                                    <div className="items-image">
                                        <img src="images/category/ctg-2.jpg" alt="Category"/>
                                    </div>
                                    <div className="items-cont">
                                        <a href="#">
                                            <h5>App development</h5>
                                            <span>57 courses </span>
                                        </a>
                                    </div>
                                </div> {/* singel items */}
                            </div>
                            <div className="col-md-6">
                                <div className="singel-items text-center mt-30">
                                    <div className="items-image">
                                        <img src="images/category/ctg-3.jpg" alt="Category"/>
                                    </div>
                                    <div className="items-cont">
                                        <a href="#">
                                            <h5>UI/ UX Design</h5>
                                            <span>103 courses</span>
                                        </a>
                                    </div>
                                </div> {/* singel items */}
                            </div>
                            <div className="col-md-6">
                                <div className="singel-items text-center mt-30">
                                    <div className="items-image">
                                        <img src="images/category/ctg-4.jpg" alt="Category"/>
                                    </div>
                                    <div className="items-cont">
                                        <a href="#">
                                            <h5>Photography</h5>
                                            <span>17 courses </span>
                                        </a>
                                    </div>
                                </div> {/* singel items */}
                            </div>
                            <div className="col-md-6">
                                <div className="singel-items text-center mt-30">
                                    <div className="items-image">
                                        <img src="images/category/ctg-5.jpg" alt="Category"/>
                                    </div>
                                    <div className="items-cont">
                                        <a href="#">
                                            <h5>Finance</h5>
                                            <span>103 courses </span>
                                        </a>
                                    </div>
                                </div> {/* singel items */}
                            </div>
                            <div className="col-md-6">
                                <div className="singel-items text-center mt-30">
                                    <div className="items-image">
                                        <img src="images/category/ctg-6.jpg" alt="Category"/>
                                    </div>
                                    <div className="items-cont">
                                        <a href="#">
                                            <h5>Science</h5>
                                            <span>17 courses </span>
                                        </a>
                                    </div>
                                </div> {/* singel items */}
                            </div>
                        </div> {/* row */}
                    </div> {/* category */}
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <div className="category-form">
                        <div className="form-title text-center">
                            <h3>Get 50 courses free!</h3>
                            <span>Sign up now </span>
                        </div>
                        <div className="main-form">
                            <form action="#">
                                <div className="singel-form">
                                    <input type="text" placeholder="Your name"/>
                                </div>
                                <div className="singel-form">
                                    <input type="email" placeholder="Your Mail"/>
                                </div>
                                <div className="singel-form">
                                    <input type="text" placeholder="Your Phone"/>
                                </div>
                                <div className="singel-form">
                                    <button className="main-btn" type="button">Get it Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
    
    {/*====== CATEGORY PART ENDS ======*/}
   
    {/*====== COURSE PART START ======*/}
    
    <section id="course-part" className="pt-115 pb-115">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-45">
                        <h5>Our course</h5>
                        <h2>Featured courses </h2>
                    </div> {/* section title */}
                </div>
            </div> {/* row */}
            <div className="row course-slied mt-30">
                <div className="col-lg-4">
                    <div className="singel-course-2">
                        <div className="thum">
                            <div className="image">
                                <img src="images/course/cu-1.jpg" alt="Course"/>
                            </div>
                            <div className="price">
                                <span>Free</span>
                            </div>
                            <div className="course-teacher">
                                <div className="thum">
                                    <a href="courses-singel.html"><img src="images/course/teacher/t-1.jpg" alt="Teacher"/></a>
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
                    </div> {/* singel course */}
                </div>
                <div className="col-lg-4">
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
                                    <a href="courses-singel.html"><img src="images/course/teacher/t-2.jpg" alt="Teacher"/></a>
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
                    </div> {/* singel course */}
                </div>
                <div className="col-lg-4">
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
                                    <a href="courses-singel.html"><img src="images/course/teacher/t-3.jpg" alt="Teacher"/></a>
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
                    </div> {/* singel course */}
                </div>
                <div className="col-lg-4">
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
                                    <a href="courses-singel.html"><img src="images/course/teacher/t-4.jpg" alt="Teacher"/></a>
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
                    </div> {/* singel course */}
                </div>
                <div className="col-lg-4">
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
                                    <a href="courses-singel.html"><img src="images/course/teacher/t-5.jpg" alt="Teacher"/></a>
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
                    </div> {/* singel course */}
                </div>
            </div> {/* course slied */}
        </div> {/* container */}
    </section>
    
    {/*====== COURSE PART ENDS ======*/}
    
    {/*====== COUNTER PART START ======*/}
    
    <div id="counter-part" className="bg_cover pt-65 pb-110" data-overlay="8" style={{backgroundImage: `url(images/bg-2.jpg)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter">30,000</span>+</span>
                        <p>Students enrolled</p>
                    </div> {/* singel counter */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter">41,000</span>+</span>
                        <p>Courses Uploaded</p>
                    </div> {/* singel counter */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter">11,000</span>+</span>
                        <p>People certifie</p>
                    </div> {/* singel counter */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter">39,000</span>+</span>
                        <p>Global Teachers</p>
                    </div> {/* singel counter */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </div>
    
    {/*====== COUNTER PART ENDS ======*/}
    
    {/*====== TEACHERS PART START ======*/}
    
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
                        </div> {/* student slied */}
                        <div className="student-image">
                            <img src="images/teachers/teacher-2/happy.png" alt="Image"/>
                        </div>
                    </div> {/* happy student */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
    
    {/*====== TEACHERS PART ENDS ======*/}
    
    {/*====== EVENT 2 PART START ======*/}
    
    <section id="event-part" className="pt-120">
        <div className="container">
            <div className="event-bg bg_cover" style={{backgroundImage: `url(images/bg-3.jpg)`}}>
                <div className="row">
                    <div className="col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                        <div className="event-2 pt-90 pb-70">
                            <div className="event-title">
                                <h3>Upcoming events</h3>
                            </div> {/* event title */}
                            <ul>
                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>Campus clean workshop</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>Enviroement conference</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>
                            </ul> 
                        </div> {/* event 2 */}
                    </div>
                </div> {/* row */}
            </div>
        </div> {/* container */}
    </section>
    
    {/*====== EVENT 2 PART ENDS ======*/}
   
    {/*====== NEWS PART START ======*/}
    
    <section id="news-part" className="pt-115 pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-50">
                        <h5>Latest News</h5>
                        <h2>From the news</h2>
                    </div> {/* section title */}
                </div>
            </div> {/* row */}
            <div className="row">
                <div className="col-lg-6">
                    <div className="singel-news mt-30">
                        <div className="news-thum pb-25">
                            <img src="images/news/n-1.jpg" alt="News"/>
                        </div>
                        <div className="news-cont">
                            <ul>
                                <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                <li><a href="#"> <span>By</span> Adam linn</a></li>
                            </ul>
                            <a href="blog-singel.html"><h3>Tips to grade high cgpa in university life</h3></a>
                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt .</p>
                        </div>
                    </div> {/* singel news */}
                </div>
                <div className="col-lg-6">
                    <div className="singel-news news-list">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-thum mt-30">
                                    <img src="images/news/ns-1.jpg" alt="News"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-cont mt-30">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                        <li><a href="#"> <span>By</span> Adam linn</a></li>
                                    </ul>
                                    <a href="blog-singel.html"><h3>Intellectual communication</h3></a>
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                                </div>
                            </div>
                        </div> {/* row */}
                    </div> {/* singel news */}
                    <div className="singel-news news-list">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-thum mt-30">
                                    <img src="images/news/ns-2.jpg" alt="News"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-cont mt-30">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                        <li><a href="#"> <span>By</span> Adam linn</a></li>
                                    </ul>
                                    <a href="blog-singel.html"><h3>Study makes you perfect</h3></a>
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                                </div>
                            </div>
                        </div> {/* row */}
                    </div> {/* singel news */}
                    <div className="singel-news news-list">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-thum mt-30">
                                    <img src="images/news/ns-3.jpg" alt="News"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-cont mt-30">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                        <li><a href="#"> <span>By</span> Adam linn</a></li>
                                    </ul>
                                    <a href="blog-singel.html"><h3>Technology edcution is now....</h3></a>
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                                </div>
                            </div>
                        </div> {/* row */}
                    </div> {/* singel news */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
    
    {/*====== NEWS PART ENDS ======*/}
   
    {/*====== PATNAR LOGO PART START ======*/}
    
    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
        <div className="container">
            <div className="row patnar-slied">
                <div className="col-lg-12">
                    <div className="singel-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-1.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="singel-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-2.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="singel-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-3.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="singel-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-4.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="singel-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-2.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="singel-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-3.png" alt="Logo"/>
                    </div>
                </div>
            </div> {/* row */}
        </div>{/* container */}
    </div> 
    </Common>
  )
}

export default Home
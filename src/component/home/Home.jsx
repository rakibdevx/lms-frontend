import React from 'react'
import Common from '../../common/Common'
import HeroSlider from './Slider'
import CourseSlider from './Course'
import CountUp from "react-countup";
import Featured from './Featured';
import Patnar from './Patnar';
const Home = () => {
  return (
    <Common>
    <HeroSlider/>
   
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
    
    <CourseSlider/>
    
    {/*====== COURSE PART ENDS ======*/}
    
    {/*====== COUNTER PART START ======*/}
    
    <div id="counter-part" className="bg_cover pt-65 pb-110" data-overlay="8" style={{backgroundImage: `url(images/bg-2.jpg)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter"><CountUp end={30000} separator="," duration={2} /></span>+</span>
                        <p>Students enrolled</p>
                    </div> {/* singel counter */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter"><CountUp end={20000} separator="," duration={2} /></span>+</span>
                        <p>Courses Uploaded</p>
                    </div> {/* singel counter */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter"><CountUp end={37000} separator="," duration={2} /></span>+</span>
                        <p>People certifie</p>
                    </div> {/* singel counter */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="singel-counter text-center mt-40">
                        <span><span className="counter"><CountUp end={30900} separator="," duration={2} /></span>+</span>
                        <p>Global Teachers</p>
                    </div> {/* singel counter */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </div>
    
    {/*====== COUNTER PART ENDS ======*/}
    
    {/*====== TEACHERS PART START ======*/}
    
    <Featured/>
    
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
    
    
    <Patnar/>
    </Common>
  )
}

export default Home
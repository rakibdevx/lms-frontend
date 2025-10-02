import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SettingsContext } from '../context/SettingsContext'

const Footer = () => {
    const { settings } = useContext(SettingsContext);
  return (
    <footer id="footer-part">
        <div className="footer-top pt-40 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-about mt-40">
                            <div className="logo">
                                <Link to="/"><img src={settings?.dark_logo} alt={settings?.site_title}/></Link>
                            </div>
                            <p>{settings?.site_footer_text}</p>
                            <ul className="mt-20">
                                <li><Link to={settings?.facebook_url}><i className="fa fa-facebook-f"></i></Link></li>
                                <li><Link to={settings?.twitter_url}><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to={settings?.youtube_url}><i className="fa fa-youtube"></i></Link></li>
                                <li><Link to={settings?.instagram_url}><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-link mt-40">
                            <div className="footer-title pb-25">
                                <h6>Sitemap</h6>
                            </div>
                            <ul>
                                <li><Link to="/"><i className="fa fa-angle-right"></i>Home</Link></li>
                                <li><Link to="/about"><i className="fa fa-angle-right"></i>About us</Link></li>
                                <li><Link to="/courses"><i className="fa fa-angle-right"></i>Courses</Link></li>
                                <li><Link to="/"><i className="fa fa-angle-right"></i>News</Link></li>
                                <li><Link to="/"><i className="fa fa-angle-right"></i>Event</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>Gallery</Link></li>
                                <li><Link to="shop.html"><i className="fa fa-angle-right"></i>Shop</Link></li>
                                <li><Link to="teachers.html"><i className="fa fa-angle-right"></i>Teachers</Link></li>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>Support</Link></li>
                                <li><Link to="contact.html"><i className="fa fa-angle-right"></i>Contact</Link></li>
                            </ul>
                        </div> {/* footer link */}
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-link support mt-40">
                            <div className="footer-title pb-25">
                                <h6>Support</h6>
                            </div>
                            <ul>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>FAQS</Link></li>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>Privacy</Link></li>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>Policy</Link></li>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>Support</Link></li>
                                <li><Link to="#"><i className="fa fa-angle-right"></i>Documentation</Link></li>
                            </ul>
                        </div> {/* support */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-address mt-40">
                            <div className="footer-title pb-25">
                                <h6>Contact Us</h6>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fa fa-home"></i>
                                    </div>
                                    <div className="cont">
                                        <p>{settings?.contact_address}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="cont">
                                        <p>{settings?.contact_phone}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fa fa-envelope-o"></i>
                                    </div>
                                    <div className="cont">
                                        <p>{settings?.contact_email}</p>
                                    </div>
                                </li>
                            </ul>
                        </div> {/* footer address */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* footer top */}
        
         <div className="footer-copyright pt-10 pb-25">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="copyright text-md-left text-center pt-15">
                    <p>
                        {settings?.site_copyright}
                    </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="copyright text-md-right text-center pt-15">
                    <p>Developed with ❤️ by Rakibul Islam</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
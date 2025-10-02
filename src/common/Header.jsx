import React, { useContext, useState } from 'react'
import Navigation from './Navigation'
import Search from './Search'
import { Link, NavLink } from 'react-router-dom';
import { SettingsContext } from "../context/SettingsContext";

const header = () => {
    const [show, setShow] = useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const { settings } = useContext(SettingsContext);
    console.log(settings);
  return (
    <>
     {/* <div className="preloader">
        <div className="loader rubix-cube">
            <div className="layer layer-1"></div>
            <div className="layer layer-2"></div>
            <div className="layer layer-3 color-1"></div>
            <div className="layer layer-4"></div>
            <div className="layer layer-5"></div>
            <div className="layer layer-6"></div>
            <div className="layer layer-7"></div>
            <div className="layer layer-8"></div>
        </div>
    </div> */}
     <header id="header-part">
       
        <div className="header-top d-none d-md-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="header-contact text-lg-left text-center">
                            <ul>
                                <li><i className="fa fa-phone text-color"></i><span>{settings?.contact_phone}</span></li>
                                <li><i className="fa fa-envelope-o text-color"></i><span>{settings?.contact_email}</span></li>
                                <li><i className="fa fa-address-book text-color"></i><span>{settings?.contact_address}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header-social text-lg-right text-center">
                            <ul>
                                <li><NavLink to={settings?.facebook_url} ><i className="fa fa-facebook-f"></i></NavLink></li>
                                <li><NavLink to={settings?.twitter_url} ><i className="fa fa-twitter"></i></NavLink></li>
                                <li><NavLink to={settings?.instagram_url} ><i className="fa fa-instagram"></i></NavLink></li>
                                <li><NavLink to={settings?.linkedin_url} ><i className="fa fa-linkedin"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* header top */}
        
        <div className="navigation navigation-2">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-11 col-md-10 col-sm-9 col-9">
                        <nav className="navbar navbar-expand-lg">
                            <NavLink to="/event" className={({ isActive }) => (isActive ? "active" : "")}>
                                <img src={settings?.site_logo} alt={settings?.site_name}/>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <Navigation/>
                            </div>
                        </nav> {/* nav */}
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-3 col-3">
                        <div className="right-icon text-right">
                            <ul>
                                <li><Link to="" id="search" onClick={handleOpen}> <i className="fa fa-search"></i></Link></li>
                            </ul>
                        </div> {/* right icon */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div>
        
    </header>
        <Search show={show} handleClose={handleClose} />
    </>
  )
}

export default header
import React, { useContext } from 'react'
import Common from '../../common/Common'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { SettingsContext } from '../../context/SettingsContext'

const Dashboard = () => {
  const{settings} = useContext(SettingsContext);
  return (
    <Common>
      <section
        id="page-banner"
        className="pt-10 pb-10 bg_cover"
        data-overlay="8"
        style={{ backgroundImage: `url(${settings?.banner_image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-cont">
                <h2>Dashboard</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-page" className="pt-10 pb-15 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar/>
            </div>
            <div className="col-lg-10">
              <div className="contact-from mt-30">
                <div className="row">
                  <div className="col-md-4">
                    total course
                  </div>
                  <div className="col-md-4">
                    fsdfds
                  </div>
                  <div className="col-md-4">
                    dfsdf
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Common>
  )
}

export default Dashboard
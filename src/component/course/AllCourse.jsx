import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../account/Sidebar'
import Common from '../../common/Common'

const AllCourse = () => {
  return (
    <Common>
      <section
        id="page-banner"
        className="pt-10 pb-10 bg_cover"
        data-overlay="8"
        style={{ backgroundImage: "url('/images/page-banner-4.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-cont">
                <h2>Courses</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Courses</li>
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
            <div className="col-lg-3">
              <Sidebar/>
            </div>
            <div className="col-lg-9">
              <div className="contact-from mt-30 pt-4">
                <div className="section-title d-flex justify-content-between align-item-center">
                  <h4>All Course</h4>
                  <Link to="/course/create">Create</Link>
                </div>
                <div className="main-form pt-15">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Common>
  )
}

export default AllCourse
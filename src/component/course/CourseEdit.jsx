import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { api } from '../../common/Config';
import Common from '../../common/Common';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../account/Sidebar';
import toast from 'react-hot-toast';
import CourseDetailsEdit from './CourseDetailsEdit';
import Outcome from './Outcome';
import Requirement from './Requirement';

const CourseEdit = () => {
  const[course, setCourse] = useState(null);
  const { slug } = useParams();
  const fetchCourse = async () => {
    try {
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const res = await axios.get(`${api}course/edit/${slug}`, {
        headers: {
          Authorization: `Bearer ${lmsUser.token}`,
        },
      });
      setCourse(res.data);
    } catch (error) { 
      console.error(error);
      toast.error("Failed to fetch course");
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);
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
                <h2>Course</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Course</li>
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
                <div className="row">
                  <div className="col-md-8">
                    <div className="contact-from mt-30 pl-4 pr-4">
                      <div className="section-title">
                        <h5>Course</h5>
                      </div>
                      <div className="main-form pt-15">
                        {!course ? (
                          <p>Loading...</p>
                          ) : (
                          <CourseDetailsEdit course={course} />
                        )}
                       </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div className="bg-white mt-30 pl-4 pr-4 p-2">
                        <div className="d-flex align-items-end justify-content-center">
                          <Link className='main-btn btn-sm b' to="/course">Back</Link>
                          <Link className='main-btn btn-sm ml-3 background-navy text-color hover-color' to="/">Publish</Link>
                        </div>
                      </div>
                    </div>
                    {!course ? (
                      <div className="bg-white mt-30 pl-4 pr-4 p-2">
                        <p>Loading... <i className="fa fa-spinner fa-spin mr-2"></i></p>
                      </div>
                      ) : (
                      <Outcome course={course} refreshCourse={fetchCourse} />
                    )}
                    {!course ? (
                      <div className="bg-white mt-30 pl-4 pr-4 p-2">
                        <p>Loading... <i className="fa fa-spinner fa-spin mr-2"></i></p>
                      </div>
                      ) : (
                      <Requirement course={course} refreshCourse={fetchCourse}/>
                    )}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Common>
  );
}

export default CourseEdit

import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { api } from '../../common/Config';
import Common from '../../common/Common';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../account/Sidebar';
import toast from 'react-hot-toast';
import { SettingsContext } from '../../context/SettingsContext';

const CourseCreate = () => {
  const [titleError, settitleError] = useState('');
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    settitleError('');
    setServerError('');

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    let hasError = false;

    if (!values.title) {
      settitleError('Title is required');
      hasError = true;
    } else if (values.title.length < 3) {
      settitleError('Title is too short');
      hasError = true;
    }

    if (!hasError) {
      formData.append('id', lmsUser.user.id);

      try {
        const response = await axios.post(`${api}course/create`, formData, {
          headers: {
            Authorization: `Bearer ${lmsUser.token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        const slug = response.data.course.slug;
        toast.success("Course created successfully!");
        navigate(`/course/edit/${slug}`);

      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            if (errors.title) settitleError(errors.title[0]);
          } else if (error.response.data.message) {
            setServerError(error.response.data.message);
          }
        } else {
          toast.error("Something went wrong!");
        }
      }
    }

    setLoading(false);
  };
const {settings } =useContext(SettingsContext);
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
                <h2>Profile</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Course</li>
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
                <div className="section-title">
                  <h5>Course</h5>
                  <h2>Create a new course</h2>
                </div>
                <div className="main-form pt-15">
                  <div className="help-block with-errors">
                      <ul className="list-unstyled">
                          <li>{serverError}</li>
                      </ul>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="title"
                            type="Title"
                            placeholder="Course Title"
                          />
                        </div>
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{titleError}</li>
                            </ul>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="main-btn">
                             {loading ? (
                                <>
                                  <i className="fa fa-spinner fa-spin mr-2"></i>
                                  Creating...
                                </>
                              ) : (
                                "Create"
                              )}
                          </button>
                          <Link to="/course" className='main-btn background-navy text-color ml-3'>Back</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Common>
  );
}

export default CourseCreate

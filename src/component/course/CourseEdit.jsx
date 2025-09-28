import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { api } from '../../common/Config';
import Common from '../../common/Common';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../account/Sidebar';
import toast from 'react-hot-toast';

const CourseEdit = () => {
  const[serverError,setServerError ] = useState();
  const[loading,setLoading ] = useState();
  const[titleError ,setTitleError  ] = useState();
  const[descriptionError ,setDescriptionError  ] = useState();
  const[categoryError ,setCategoryError  ] = useState();
  const[priceError ,setPriceError  ] = useState();
  const[discountError ,setDiscountError  ] = useState();
  const[course, setCourse] = useState(null);

  const { slug } = useParams();
    useEffect(() => {
      const fetchCourse = async () => {
        try {
          const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
          const res = await axios.get(`${api}course/edit/${slug}`, {
            headers: {
              Authorization: `Bearer ${lmsUser.token}`,
            },
          });
          setCourse(res.data.course);
        } catch (error) { 
          console.error(error);
          toast.error("Failed to fetch course");
        }
      };

      fetchCourse();
    }, []);

  if (!course) return <p>Loading...</p>;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
  }
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
              <div className="contact-from mt-30">
                <div className="row">
                  <div className="col-md-8">
                    <div className="section-title">
                      <h5>Course</h5>
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
                              <label htmlFor="title">Course Title</label>
                              <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter Course Title"
                                defaultValue={course.title}
                              />
                            </div>
                            <div className="help-block with-errors">
                              <ul className="list-unstyled">
                                <li>{titleError}</li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <label htmlFor="description">Description</label>
                              <textarea
                                id="description"
                                name="description"
                                placeholder="Enter Course Description"
                                rows="4"
                                defaultValue={course.description}
                              ></textarea>
                            </div>
                            <div className="help-block with-errors">
                              <ul className="list-unstyled">
                                <li>{descriptionError}</li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <label htmlFor="category_id">Category</label>
                              <select id="category_id" name="category_id" >
                                <option value="">Select Category</option>
                                <option value="1">Category 1</option>
                                <option value="2">Category 2</option>
                              </select>
                            </div>
                            <div className="help-block with-errors">
                              <ul className="list-unstyled">
                                <li>{categoryError}</li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <label htmlFor="price">Price</label>
                              <input
                                id="price"
                                name="price"
                                type="number"
                                placeholder="Enter Price"
                                min="0"
                                step="0.01"
                                defaultValue={course.price}
                              />
                            </div>
                            <div className="help-block with-errors">
                              <ul className="list-unstyled">
                                <li>{priceError}</li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <label htmlFor="discount_price">Discount Price</label>
                              <input
                                id="discount_price"
                                name="discount_price"
                                type="number"
                                placeholder="Enter Discount Price"
                                min="0"
                                step="0.01"
                                defaultValue={course.discount_price}
                              />
                            </div>
                            <div className="help-block with-errors">
                              <ul className="list-unstyled">
                                <li>{discountError}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <label htmlFor="duration">Duration</label>
                              <input
                                id="duration"
                                name="duration"
                                type="text"
                                placeholder="e.g. 10h 30m"
                                defaultValue={course.duration}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <label htmlFor="level">Level</label>
                              <select
                                id="level"
                                name="level"
                                defaultValue={course.level}  // ekhane course.level use koro
                              >
                                <option value="">Select Level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="singel-form form-group">
                              <input
                                className="checkbox"
                                type="checkbox"
                                name="is_featured"
                                id="is_featured"
                                defaultChecked={course.is_featured} // ekhane backend data use kora hocche
                              />
                              <label htmlFor="is_featured" className="ml-2">Featured</label>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="singel-form form-group">
                              <input
                                className="checkbox"
                                type="checkbox"
                                name="flash_sale"
                                id="flash_sale"
                                defaultChecked={course.flash_sale} // ekhaneo backend data
                              />
                              <label htmlFor="flash_sale" className="ml-2">Flash Sale</label>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="singel-form">
                              <button type="submit" className="main-btn">
                                {loading ? (
                                    <>
                                      <i className="fa fa-spinner fa-spin mr-2"></i>
                                      Updating...
                                    </>
                                  ) : (
                                    "Update"
                                  )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                   <div>
                      <div className="section-title">
                        <h5>Outcomes</h5>
                      </div>
                      <div className="main-form pt-15">
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{serverError}</li>
                            </ul>
                        </div>
                      </div>
                   </div>
                   <div>
                      <div className="section-title">
                        <h5>requirements</h5>
                      </div>
                      <div className="main-form pt-15">
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{serverError}</li>
                            </ul>
                        </div>
                      </div>
                   </div>
                   {/* dddfdfsd */}
                  </div>
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

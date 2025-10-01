import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { api } from '../../common/Config';
import Common from '../../common/Common';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../account/Sidebar';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import CourseDetailsEdit from './CourseDetailsEdit';

const CourseEdit = () => {
  const[serverError,setServerError ] = useState();
  const[outcomeserverError,setOutcomeServerError ] = useState();
  const[requirementserverError,setRequirementServerError ] = useState();

  const[loading,setLoading ] = useState();
  const[outComeloading,setOutComeloading ] = useState();
  const[requirementloading,setRequirementloading ] = useState();


  const[titleError ,setTitleError  ] = useState();
  const[descriptionError ,setDescriptionError  ] = useState();
  const[categoryError ,setCategoryError  ] = useState();
  const[priceError ,setPriceError  ] = useState();
  const[discountError ,setDiscountError  ] = useState();
  const[durationError ,setDurationError  ] = useState();
  const[flash_saleError ,setFlash_saleError  ] = useState();
  const[levelError ,setLevelError  ] = useState();
  const[is_featuredError ,setIs_featuredError  ] = useState();
  const[languageError ,setLanguageError  ] = useState();
  const[course, setCourse] = useState(null);


  const[outcome, setOutcome] = useState(null);
  const[requirement, setRequirement] = useState(null);

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

  if (!course) return <p>Loading...</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

    try {
      formData.append("_method", "PUT");
      const response = await axios.post(
        `${api}course/edit/${course.course.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${lmsUser.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Course updated successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            if (errors.title) setTitleError(errors.title[0]);
            if (errors.description) setDescriptionError(errors.description[0]);
            if (errors.category_id) setCategoryError(errors.category_id[0]);
            if (errors.price) setPriceError(errors.price[0]);
            if (errors.discount_price) setDiscountError(errors.discount_price[0]);
            if (errors.duration) setDurationError(errors.duration[0]);
            if (errors.flash_sale) setFlash_saleError(errors.flash_sale[0]);
            if (errors.level_id) setLevelError(errors.level_id[0]);
            if (errors.is_featured) setIs_featuredError(errors.is_featured[0]);
            if (errors.language_id) setLanguageError(errors.language_id[0]);
          } else if (error.response.data.message) {
            setServerError(error.response.data.message);
          }
        } else {
          toast.error("Something went wrong!");
        }
    } finally {
      setLoading(false);
    }
  };

    const handleOutcomeSubmit = async (e) => {
      setOutcome('');
      e.preventDefault();
      setOutComeloading(true);

      const formData = new FormData(e.target);
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const values = Object.fromEntries(formData.entries());
      let data = false;
      if(!values.outcome){
        setOutcome('Outcome Is Required');
        data=true;
      }
      
      if(data == false)
      {
        try {
          formData.append('course_id', course.course.id);
          const response = await axios.post(
          `${api}course/outcome/create`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${lmsUser.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Outcome Create successfully!");
        e.target.reset();
        } catch (error) {
          if (error.response && error.response.data) {
            if (error.response.data.errors) {
              const errors = error.response.data.errors;
              if (errors.outcome) setOutcome(errors.outcome[0]);
            } else if (error.response.data.message) {
              setOutcomeServerError(error.response.data.message);
            }
        
          }else {
            toast.error("Something went wrong!");
          }
        }
      }
      setOutComeloading(false);
      fetchCourse();
    }

    const handleDeleteOutcome = async (e)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
                    await axios.delete(`${api}course/outcome/delete/${e}`, {
                        headers: { Authorization: `Bearer ${lmsUser.token}` },
                    });
                    toast.success("Outcome deleted successfully");
                    fetchCourse();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Outcome has been deleted.",
                        icon: "success"
                    });
                } catch (error) { 
                    toast.error("Failed to delete Outcome");
                    console.log(error);
                }
            }
        });
    };

    const handleRequirementSubmit = async (e) => {
      setRequirement('');
      e.preventDefault();
      setRequirementloading(true);

      const formData = new FormData(e.target);
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const values = Object.fromEntries(formData.entries());
      let data = false;
      if(!values.requirement){
        setRequirement('Requirement Is Required');
        data=true;
      }
      
      if(data == false)
      {
        try {
          formData.append('course_id', course.course.id);
          const response = await axios.post(
          `${api}course/requirement/create`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${lmsUser.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Requirement Create successfully!");
        e.target.reset();
        } catch (error) {
          if (error.response && error.response.data) {
            if (error.response.data.errors) {
              const errors = error.response.data.errors;
              if (errors.requirement) setRequirement(errors.requirement[0]);
            } else if (error.response.data.message) {
              setRequirementServerError(error.response.data.message);
            }
        
          }else {
            toast.error("Something went wrong!");
          }
        }
      }
      setRequirementloading(false);
      fetchCourse();
    }




    const handleDeleteRequirement = async (e)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
                    await axios.delete(`${api}course/requirement/delete/${e}`, {
                        headers: { Authorization: `Bearer ${lmsUser.token}` },
                    });
                    toast.success("Outcome deleted successfully");
                    fetchCourse();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Outcome has been deleted.",
                        icon: "success"
                    });
                } catch (error) { 
                    toast.error("Failed to delete Outcome");
                    console.log(error);
                }
            }
        });
    };
    

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
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{serverError}</li>
                            </ul>
                        </div>
                        <div className="main-form pt-15"></div>
                         <CourseDetailsEdit course={course} />
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                    
                  <div className="contact-from mt-30 pl-4 pr-4">
                    <div className="section-title">
                      <h5>Outcomes</h5>
                    </div>
                    <div className="main-form pt-15">
                      <form onSubmit={handleOutcomeSubmit}>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="singel-form form-group">
                                <label htmlFor="title">Outcome</label>
                                <div className="d-flex align-items-center justify-content-center">
                                  <input
                                  id="outcome"
                                  name="outcome"
                                  type="text"
                                  placeholder="Outcome"
                                />
                                <button type="submit" className="main-btn px-3">
                                    {outComeloading ? (
                                        <>
                                          <i className="fa fa-spinner fa-spin mr-2"></i>
                                        </>
                                      ) : (
                                        <i className="fa fa-arrow-up mr-2"></i>
                                      )}
                                  </button>
                                </div>
                                <div className="help-block with-errors">
                                    <ul className="list-unstyled">
                                        <li>{outcome}</li>
                                    </ul>
                                </div>
                              </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="main-form pt-15">
                      <div className="help-block with-errors">
                          <ul className="list-unstyled">
                              <li>{outcomeserverError}</li>
                          </ul>
                      </div>
                    </div>
                      {course.course.outcomes.map((outcome, index) => (
                        <div className="card mb-2 d-flex flex-row justify-content-between align-items-center" key={index}>
                          <div className="card-body p-2 m-0">
                            {outcome.outcome}
                          </div>
                          <button
                            className="btn btn-sm btn-danger mr-2"
                            onClick={() => handleDeleteOutcome(outcome.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      ))}

                  </div>
                  <div className="contact-from mt-30 pl-4 pr-4">
                    <div className="section-title">
                      <h5>Requirements</h5>
                    </div>
                    <div className="main-form pt-15">
                      <form onSubmit={handleRequirementSubmit}>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="singel-form form-group">
                                <label htmlFor="title">Requirement</label>
                                <div className="d-flex align-items-center justify-content-center">
                                  <input
                                  id="requirement"
                                  name="requirement"
                                  type="text"
                                  placeholder="Requirement"
                                />
                                <button type="submit" className="main-btn px-3">
                                    {requirementloading ? (
                                        <>
                                          <i className="fa fa-spinner fa-spin mr-2"></i>
                                        </>
                                      ) : (
                                        <i className="fa fa-arrow-up mr-2"></i>
                                      )}
                                  </button>
                                </div>
                                <div className="help-block with-errors">
                                    <ul className="list-unstyled">
                                        <li>{requirement}</li>
                                    </ul>
                                </div>
                              </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="main-form pt-15">
                      <div className="help-block with-errors">
                          <ul className="list-unstyled">
                              <li>{requirementserverError}</li>
                          </ul>
                      </div>
                    </div>
                      {course.course.requirements.map((requirement, index) => (
                         <div className="card mb-2 d-flex flex-row justify-content-between align-items-center" key={index}>
                          <div className="card-body p-2 m-0">
                            {requirement.requirement}
                          </div>
                          <button
                            className="btn btn-sm btn-danger mr-2"
                            onClick={() => handleDeleteRequirement(requirement.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      ))}
                  </div>
                   {/* dddfdfsd */}
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

import React, { useContext, useEffect, useState } from 'react'
import Common from '../../common/Common'
import { SettingsContext } from '../../context/SettingsContext'
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../../common/Config';
import axios from 'axios';
import toast from 'react-hot-toast';

const Course = () => {
  const {settings} = useContext(SettingsContext);
  const[courses, setCourses]=useState();
  const[page, setPage ]=useState();
  const [searchParams]  = useSearchParams()
  const fetchCourses = async (page) => {
    try {
        const res = await axios.get(`${api}front/courses?page=${page}`);
        setCourses(res.data.courses)
    } catch (error) {
        console.log(error);
        toast.error("Failed to fetch courses");
    }
  };
  console.log(courses);
  useEffect(() => {
      const page = searchParams.get("page") || 1;
      fetchCourses(page);
      setPage(page);
  }, [searchParams]);
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



    <section id="courses-part" className="pt-120 pb-120 gray-bg">
        <div className="container">
       {!courses ? 'loading...':
           <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="courses-top-search">
                        <ul className="nav float-left" id="myTab" role="tablist">
                            {/* <li className="nav-item">
                                <Link id="courses-list-tab" data-toggle="tab" to="#courses-list" role="tab" aria-controls="courses-list" aria-selected="false"><i className="fa fa-th-list"></i></Link>
                            </li> */}
                            <li className="nav-item">Showning 4 0f 24 Results</li>
                        </ul> 
                        
                        <div className="courses-search float-right">
                            <form action="#">
                                <input type="text" placeholder="Search"/>
                                <button type="button"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
             <div className="row">
                  {courses.data.map((course,index)=>(
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="singel-course mt-30">
                          <div className="thum">
                              <div className="image">
                                  <img src={course.thumbnail_full??settings.default_image} alt="Course"/>
                              </div>
                              <div className="price">
                                  <span>{course?.price > 0 ? course.price : "Free"}</span>
                              </div>
                          </div>
                          <div className="cont">
                              <ul>
                                    {[...Array(5)].map((_, index) => {
                                        const starNumber = index + 1;
                                        if (starNumber <= Math.floor(course.comments_avg_rating)) {
                                        return (
                                            <li key={index}><i className="fa fa-star"></i></li>
                                        );
                                        }
                                        if (
                                        starNumber === Math.ceil(course.comments_avg_rating) &&
                                        course.comments_avg_rating % 1 !== 0
                                        ) {
                                        return (
                                            <li key={index}>
                                            <i className="fa fa-star-half-o"></i>
                                            </li>
                                        );
                                        }
                                        
                                        return (
                                        <li key={index}>
                                            <i className="fa fa-star-o" style={{ color: '#ccc' }}></i>
                                        </li>
                                        );
                                    })}
                              </ul>
                              <span>({course.comments_count} Reviws)</span>
                              <Link to={`/course/${course.slug}`}><h4>{course?.title}</h4></Link>
                              <div className="course-teacher">
                                  <div className="thum">
                                      <Link to=""><img src={course?.tutor?.profile_image} alt="teacher"/></Link>
                                  </div>
                                  <div className="name">
                                      <Link to=""><h6>{course?.tutor?.name}</h6></Link>
                                  </div>
                                  <div className="admin">
                                      <ul>
                                          <li><Link to=""><i className="fa fa-user"></i>Total Enroll: <span>{course.enroll_count}</span></Link></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                ))};
              </div> 
            <div className="row">
                <div className="col-lg-12">
                    <nav className="courses-pagination mt-50">
                        <ul className="pagination justify-content-center">
                            {courses?.links?.length >3 ?
                                courses?.links?.map((link, index) => (
                                    <li key={index} className={"page-item"}>
                                        <Link
                                        className={`${link.active ? 'active' : ''}`}
                                        disabled={`${!link.url ? 'disabled' : ''}`}
                                        to={`?page=${link.page?link.page:page}`}
                                        >
                                        {link.label.includes('Previous') ? (
                                            <i className="fa fa-angle-left"></i>
                                        ) : link.label.includes('Next') ? (
                                            <i className="fa fa-angle-right"></i>
                                        ) : (
                                            <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                                        )}
                                        </Link>
                                    </li>
                                )) : ''
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            </>
          }
        </div>
    </section>
    </Common>
  )
}

export default Course
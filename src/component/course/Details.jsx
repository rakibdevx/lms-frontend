import React, { useContext, useEffect, useState } from 'react'
import Common from '../../common/Common'
import { Link, useParams } from 'react-router-dom'
import { SettingsContext } from '../../context/SettingsContext'
import { api } from '../../common/Config'
import axios from 'axios'
import toast from 'react-hot-toast'
import Lession from './Lession'
import Comment from './Comment'


const Details = () => {  
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
    const { settings } = useContext(SettingsContext);
    const [course, setCourse] = useState(null);
    console.log(course);
    const [loading, setLoading] = useState();
    const params = useParams();

    const fetchCourse = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${api}front/course/${params.slug}`);
            setCourse(res.data.course);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch course");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCourse();
    }, [params]);


    return (
    <Common>
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay="8" 
        style={{ backgroundImage: `url(${settings?.banner_image})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-cont">
                        <h2>
                            {!course?'loading...':course.title}
                        </h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to={'courses'}>Courses</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Learn basic javasript</li>
                            </ol>
                        </nav>
                    </div> 
                </div>
            </div>
        </div>  
    </section>
    
    
    <section id="corses-singel" className="pt-90 pb-120 gray-bg">
        <div className="container">
           {loading ? (
                <p>Loading...</p>
                ) : !course ? (
                <p>Not Found</p>
                ) : (
                <>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="corses-singel-left mt-30">
                            <div className="title">
                                <h3>{course.title}</h3>
                            </div> 
                            <div className="course-terms">
                                <ul>
                                    <li>
                                        <div className="teacher-name">
                                            <div className="thum">
                                                <img src={course.tutor?.profile_image} alt="Teacher"/>
                                            </div>
                                            <div className="name">
                                                <span>{course.tutor?.role}</span>
                                                <h6>{course.tutor?.name}</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="course-category">
                                            <span>Category</span>
                                            <h6>{course.category?.name} </h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="review">
                                            <span>Review</span>
                                            <ul>
                                               {[...Array(5)].map((_, index) => {
                                                    const starNumber = index + 1;
                                                    if (starNumber <= Math.floor(course.comments_avg_rating)) 
                                                    {
                                                        return (
                                                            <li key={index}><i className="fa fa-star"></i></li>
                                                        );
                                                    }
                                                    if (
                                                    starNumber === Math.ceil(course.comments_avg_rating) && course.comments_avg_rating % 1 !== 0) 
                                                    {
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
                                                <li className="rating">({course.comments_count} Reviws)</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="corses-singel-image pt-50">
                                <img src={course.thumbnail_full??settings.defaultImage} alt="Courses"/>
                            </div>
                            
                            <div className="corses-tab mt-30">
                                <ul className="nav nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="curriculam-tab" data-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false">Curriculam</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="instructor-tab" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                    </li>
                                </ul>
                                
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                        <div className="overview-description">
                                            <div className="singel-description pt-40">
                                                {course.description}    
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                        <div className="curriculam-cont">
                                            <div className="title">
                                                <h6>{course.title}</h6>
                                            </div>
                                            <div className="accordion" id="chapter">
                                                {course.chapters.map((chapter, index) => (
                                                    <div className="card" key={index}>
                                                        <div className="card-header" id={`heading${index}`}>
                                                            <a
                                                                href="#"
                                                                data-toggle="collapse"
                                                                data-target={`#collapse${index}`}
                                                                aria-expanded="false"
                                                                aria-controls={`collapse${index}`}
                                                            >
                                                                <ul>
                                                                <li><i className="fa fa-file-o"></i></li>
                                                                <li><span className="lecture">Lecture {index + 1}</span></li>
                                                                <li><span className="head">{chapter.title}</span></li>
                                                                <li>
                                                                    <span className="time d-none d-md-block">
                                                                    <i className="fa fa-clock-o"></i>
                                                                <span>{'00:00:00'}</span>
                                                                    </span>
                                                                </li>
                                                                </ul>
                                                            </a>
                                                            </div>

                                                            <div
                                                            id={`collapse${index}`}
                                                            className={`collapse${index === 0 ? ' show' : ''}`}
                                                            aria-labelledby={`heading${index}`}
                                                            data-parent="#chapter"
                                                            >
                                                            <div className="card-body">
                                                                <p>{chapter.description || 'No description available.'}</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                        <div className="instructor-cont">
                                            <div className="instructor-author">
                                                <div className="author-thum">
                                                    <img src={course.tutor.profile_image??settings.default_image} alt="Instructor"/>
                                                </div>
                                                <div className="author-name">
                                                    <a href="#"><h5>{course.tutor.name}</h5></a>
                                                    <span>{course.tutor?.info?.position}</span>
                                                    <ul className="social">
                                                        <li><a href={course.tutor?.info?.facebook}><i className="fa fa-facebook-f"></i></a></li>
                                                        <li><a href={course.tutor?.info?.twitter}><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href={course.tutor?.info?.youtube}><i className="fa fa-youtube"></i></a></li>
                                                        <li><a href={course.tutor?.info?.instagram}><i className="fa fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="instructor-description pt-25">
                                                <p>{course.tutor?.info?.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        <div className="reviews-cont">
                                            <div className="title">
                                                <h6>Student Reviews</h6>
                                            </div>
                                            <ul>
                                                {course.comments.map((comment,index)=>(
                                                    <li>
                                                        <div className="singel-reviews">
                                                                <div className="reviews-author">
                                                                    <div className="author-thum">
                                                                        <img src={comment.user.profile_image??settings.default_image} alt=""/>
                                                                    </div>
                                                                    <div className="author-name">
                                                                        <h6>{comment.user.name}</h6>
                                                                        <span>{new Date(comment.created_at).toLocaleDateString('en-GB', {
                                                                            day: '2-digit',
                                                                            month: 'short',
                                                                            year: 'numeric'
                                                                        })}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="reviews-description pt-20">
                                                                    <p>{comment.comment}</p>
                                                                    <div className="rating">
                                                                        <ul className="rating-stars" style={{ display: 'flex', gap: '5px' }}>
                                                                            {[1, 2, 3, 4, 5].map((star, index) => {
                                                                                const full = comment.rating >= star;
                                                                                const half = comment.rating >= star - 0.5 && comment.rating < star;

                                                                                return (
                                                                                <li key={index}>
                                                                                    <i
                                                                                    className={`fa ${
                                                                                        full
                                                                                        ? 'fa-star'
                                                                                        : half
                                                                                        ? 'fa-star-half-o'
                                                                                        : 'fa-star-o'
                                                                                    }`}
                                                                                    style={{ color: '#f4c150' }}
                                                                                    ></i>
                                                                                </li>
                                                                                );
                                                                            })}
                                                                            </ul>

                                                                        <span>/ {comment.rating} Star</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            {lmsUser && (
                                                <>
                                                    <div className="title pt-15">
                                                        <h6>Leave A Comment</h6>
                                                    </div>
                                                    <div className="reviews-form">
                                                        <Comment data={course.id} refreshCourse={fetchCourse}/>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <div className="course-features mt-30">
                                <h4>Course Features </h4>
                                    <ul>
                                        <li><i className="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
                                        <li><i className="fa fa-clone"></i>Leactures : <span>09</span></li>
                                        <li><i className="fa fa-beer"></i>Quizzes :  <span>05</span></li>
                                        <li><i className="fa fa-user-o"></i>Students :  <span>{course.enroll_count}</span></li>
                                    </ul>
                                    <div className="price-button pt-10">
                                        <span>Price : <b>$25</b></span>
                                        <a href="#" className="main-btn">Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="You-makelike mt-30">
                                    <h4>You make like </h4> 
                                    <div className="singel-makelike mt-20">
                                        <div className="image">
                                            <img src="images/your-make/y-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="cont">
                                            <a href="#"><h4>Introduction to machine languages</h4></a>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user"></i>31</a></li>
                                                <li>$50</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="singel-makelike mt-20">
                                        <div className="image">
                                            <img src="images/your-make/y-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="cont">
                                            <a href="#"><h4>How to build a basis game with java </h4></a>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user"></i>31</a></li>
                                                <li>$50</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="singel-makelike mt-20">
                                        <div className="image">
                                            <img src="images/your-make/y-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="cont">
                                            <a href="#"><h4>Basic accounting from primary</h4></a>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user"></i>31</a></li>
                                                <li>$50</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="releted-courses pt-95">
                            <div className="title">
                                <h3>Releted Courses</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="singel-course mt-30">
                                        <div className="thum">
                                            <div className="image">
                                                <img src="images/course/cu-2.jpg" alt="Course"/>
                                            </div>
                                            <div className="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                        <div className="cont">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviws)</span>
                                            <a href="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></a>
                                            <div className="course-teacher">
                                                <div className="thum">
                                                    <a href="#"><img src="images/course/teacher/t-2.jpg" alt="teacher"/></a>
                                                </div>
                                                <div className="name">
                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                </div>
                                                <div className="admin">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-md-6">
                                    <div className="singel-course mt-30">
                                        <div className="thum">
                                            <div className="image">
                                                <img src="images/course/cu-1.jpg" alt="Course"/>
                                            </div>
                                            <div className="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                        <div className="cont">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviws)</span>
                                            <a href="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></a>
                                            <div className="course-teacher">
                                                <div className="thum">
                                                    <a href="#"><img src="images/course/teacher/t-3.jpg" alt="teacher"/></a>
                                                </div>
                                                <div className="name">
                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                </div>
                                                <div className="admin">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </>
            )}
        </div> 
    </section>


    </Common>
  )
}

export default Details
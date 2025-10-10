import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../common/Config';
import Common from '../../common/Common'
import axios from 'axios';
import { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import Sidebar from '../account/Sidebar';
import QuizQuestion from '../course/QuizQuestion';
import Questions from './Questions';

const QuizzeEdit = () => {
    const { id } = useParams();
    const [quizze , setQuizze] = useState();
    console.log(quizze);
    const [loading , setLoading] = useState();
    const [submitLoading , setSubmitLoading] = useState();
    const [title , setTitle] = useState();
    const [description , setDescription] = useState();
    const {settings}= useContext(SettingsContext);
    const fetchQuizze = async () => {
        setLoading(true);
        try {
            const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
            const res = await axios.get(`${api}course/quizze/${id}`, {
                headers: {
                Authorization: `Bearer ${lmsUser.token}`,
                },
            });
            setQuizze(res.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch Quizze");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuizze();
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);

        const formData = new FormData(e.target);
        let hasError = false;

        const title = formData.get("title");
        const description = formData.get("description");

        if (!title) {
            toast.error("Title is required");
            hasError = true;
        }
        if (!description) {
            toast.error("Description is required");
            hasError = true;
        }


        if (hasError) {
            setSubmitLoading(false);
            return;
        }

        try {
            const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
            formData.append("_method", "PUT");
            await axios.post(`${api}course/quizze/${quizze.data.id}`, formData, {
            headers: {
                Authorization: `Bearer ${lmsUser.token}`,
                "Content-Type": "multipart/form-data",
            },
            });

            toast.success("Quizze updated successfully!");
            fetchQuizze();
        } catch (error) {
            toast.error("Failed to update quizze");
            console.error(error);
        } finally {
            setSubmitLoading(false);
        }
    };
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
                            <h2>Course</h2>
                            <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/course">Course</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{quizze?.data?.course?.title}</li>
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
                            <div className="col-md-12">
                                <div className="contact-from mt-30 pt-4">
                                    <div className="section-title d-flex justify-content-between align-item-center">
                                        <h4>{quizze?.course?.title}</h4>
                                    </div>
                                    <div className="main-form pt-15">
                                    {
                                            loading ? (
                                                "Loading..."
                                            ) : !quizze ? (
                                                <>
                                                <h5>No Data Found</h5>
                                                </>
                                            ) : (
                                            <form onSubmit={handleSubmit}>
                                                <div className="col-md-12">
                                                    <div className="singel-form form-group">
                                                        <label htmlFor="title">Title</label>
                                                        <input
                                                        id="title"
                                                        name="title"
                                                        type="text"
                                                        placeholder="Title"
                                                        defaultValue={quizze?.data?.title}
                                                        />
                                                    </div>
                                                    <div className="help-block with-errors">
                                                        <ul className="list-unstyled">
                                                            <li>{title}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="singel-form form-group">
                                                        <label htmlFor="description">Description</label>
                                                        <textarea
                                                        id="description"
                                                        name="description"
                                                        placeholder="Description"
                                                        defaultValue={quizze?.data?.description}
                                                        ></textarea>
                                                    </div>
                                                    <div className="help-block with-errors">
                                                        <ul className="list-unstyled">
                                                            <li>{description}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="singel-form form-group">
                                                        <button type="submit" className="main-btn px-3">
                                                            {submitLoading ? (
                                                            <>
                                                                Updating...<i className="fa fa-spinner fa-spin mr-2"></i>
                                                            </>
                                                            ) : (
                                                            "Update"
                                                            )}
                                                        </button>
                                                        <Link
                                                            to={`/course/edit/${quizze?.data?.course?.slug || ''}`}
                                                            className="main-btn background-navy text-color ml-3"
                                                        >
                                                            Back
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                            )
                                        }
                                    </div>
                                </div>       
                            </div>    
                            {!quizze ? (
                                <>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-12">
                                        <div className="contact-from mt-30 pt-4">
                                            <div className="section-title d-flex justify-content-between align-item-center">
                                                <h4>{quizze?.data?.title}</h4>
                                            </div>
                                            <div className="main-form pt-15">
                                                <QuizQuestion quizze={quizze?.data?.id}></QuizQuestion>
                                            </div>
                                        </div>       
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="contact-from mt-30 pt-4">
                                            <div className="section-title d-flex justify-content-between align-item-center">
                                                <h4>{quizze?.data?.title}</h4>
                                            </div>
                                            <div className="main-form pt-15">
                                                <Questions  quizze ={quizze } />
                                            </div>
                                        </div>       
                                    </div> 
                                </>
                            )}                 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Common>
  )
}

export default QuizzeEdit
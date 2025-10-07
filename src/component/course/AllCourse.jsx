import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Sidebar from '../account/Sidebar'
import Common from '../../common/Common'
import { api } from '../../common/Config';
import toast from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2'
import { SettingsContext } from '../../context/SettingsContext';


const AllCourse = () => {
    const [searchParams] = useSearchParams();
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState([]);

    const fetchCourses = async (page) => {
        try {
            const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
            const res = await axios.get(`${api}courses?page=${page}`, {
            headers: {
                Authorization: `Bearer ${lmsUser.token}`,
            },
            });
            setCourses(res.data.courses)
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch courses");
        }
    };

    useEffect(() => {
        const page = searchParams.get("page") || 1;
        fetchCourses(page);
        setPage(page);
    }, [searchParams]);
    
    const handleDelete = async (id) => {
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
                    await axios.delete(`${api}course/${id}`, {
                        headers: { Authorization: `Bearer ${lmsUser.token}` },
                    });
                    setCourses(prev => prev.filter(course => course.id !== id));

                    toast.success("Course deleted successfully");
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your course has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    toast.error("Failed to delete course");
                    console.log(error);
                }
            }
        });
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
                    <div className="col-lg-2">
                    <Sidebar/>
                    </div>
                    <div className="col-lg-10">
                        <div className="contact-from mt-30 pt-4">
                            <div className="section-title d-flex justify-content-between align-item-center">
                            <h4>All Course</h4>
                            <Link className='main-btn' to="/course/create" style={{ lineHeight: 2 }}>Create</Link>
                            </div>
                            <div className="main-form pt-15">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                {!courses.data ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                                Loading...
                                            </td>
                                        </tr>
                                    ) : courses.data.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                                No Data Found
                                            </td>
                                        </tr>
                                    ) : (
                                        courses.data.map((course) => (
                                            <tr key={course.id}>
                                                <th scope="row">{course.id}</th>
                                                <td>
                                                    <img
                                                        src={course.thumbnail_full || settings?.default_image}
                                                        alt={course.title}
                                                        style={{
                                                            width: 30,
                                                            height: 30,
                                                            objectFit: "cover",
                                                            borderRadius: 15,
                                                        }}
                                                    />
                                                </td>
                                                <td>{course.title}</td>
                                                <td>
                                                    <span
                                                        className={`badge text-white ${
                                                            course.status === "draft" ? "bg-warning" : "bg-success"
                                                        }`}
                                                    >
                                                        {course.status === "draft" ? "Draft" : "Publish"}
                                                    </span>
                                                </td>
                                                <td className="d-flex justify-content-end">
                                                    <Link
                                                        to={`/course/edit/${course.slug}`}
                                                        className="btn btn-sm btn-primary mr-2"
                                                    >
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(course.id)}
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="courses-pagination mt-50">
                                    <ul className="pagination justify-content-center">
                                        {courses?.links?.map((link, index) => (
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
                                        ))}
                                    </ul>
                                </nav> 
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
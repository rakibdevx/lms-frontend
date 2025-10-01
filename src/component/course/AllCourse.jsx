import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../account/Sidebar'
import Common from '../../common/Common'
import { api } from '../../common/Config';
import toast from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2'


const AllCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
                const res = await axios.get(`${api}courses`, {
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

        fetchCourses();
    }, []);



    const handleEdit = (id) => {
        
    };

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
                                {courses.map((course, index) => (
                                <tr key={course.id}>
                                    <th scope="row">{course.id}</th>
                                    <td>
                                    <img
                                        src={course.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhJLd5eesDYOhKxCI49IYuhabLfhANfpD9A&s'}
                                        alt={course.title}
                                        style={{ width: 30, height: 30, objectFit: "cover", borderRadius: 15 }}
                                    />
                                    </td>
                                    <td>{course.title}</td>
                                    <td>
                                        <span
                                            className={`badge text-white ${
                                            course.status === 'draft' ? "bg-warning" : "bg-success"
                                            }`}
                                        >
                                            {course.status === 'draft' ? "Draft" : "Publish"}
                                        </span>
                                        </td>

                                    <td className="d-flex justify-content-right">
                                        <Link 
                                            to={`/course/edit/${course.slug}`} 
                                            className="btn btn-sm btn-primary background-color mr-2"
                                            >
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(course.id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
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
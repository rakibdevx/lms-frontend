import React from 'react'
import Common from '../../common/Common'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { api } from '../../common/Config';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Sidebar = () => {
    const navigate = useNavigate();
    const isCourseActive = location.pathname.startsWith("/course"); 
    const handleLogout = async () => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33", 
        confirmButtonText: "Yes, log out!"
        }).then(async (result) => {
        if (result.isConfirmed) {
            const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
            try {
            await axios.post(
                `${api}logout`,
                { user_id: lmsUser.user.id },
                {
                headers: { Authorization: `Bearer ${lmsUser.token}` },
                }
            );
            localStorage.removeItem("lmsUser");
            toast.success("Logged out successfully");
            navigate("/login");
            } catch (e) {
            console.error(e);
            localStorage.removeItem("lmsUser");
            toast.success("Logged out successfully");
            navigate("/login");
            }
        }
        });
    };

  return (
         <div className="d-flex flex-column flex-shrink-0 p-3 mt-30 card" >
            
            <ul className="nav nav-pills flex-column mb-auto">                
               <li>
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/profile" 
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/course" 
                        className={isCourseActive ? "nav-link active" : "nav-link"}
                    >
                        Courses
                    </NavLink>
                </li>
                <li>
                    <button 
                        className="nav-link btn btn-link" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar
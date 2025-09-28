import React from 'react'
import Common from '../../common/Common'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { api } from '../../common/Config';
import toast from 'react-hot-toast';

const Sidebar = () => {
    const navigate = useNavigate();
    const isCourseActive = location.pathname.startsWith("/course"); 
    const handleLogout = async () => {
        const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

        try {
        await axios.post(
            `${api}logout`,
            { user_id: lmsUser.user.id }, 
            {
            headers: { Authorization: `Bearer ${lmsUser.token}` },
            }
        );
        toast.success("Log Out Successfully");
        navigate("/login");
        } catch (e) {
        console.error(e);
        toast.error("Logout failed! Try again.");
        }
        localStorage.removeItem("lmsUser");
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
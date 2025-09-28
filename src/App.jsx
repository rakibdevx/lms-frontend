import { Link, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

import Home from './component/home/Home'
import About from './component/about/About'
import Course from './component/course/Course'
import Details from './component/course/Details'
import Event from './component/event/Event'
import Blog from './component/blog/Blog'
import Teacher from './component/teacher/Teacher'
import Contact from './component/contact/Contact'
import Dashboard from './component/account/Dashboard'

import Preloader from './common/Preloader'

import login from './component/auth/login'
import Registration from './component/auth/Registration'
import Profile from './component/account/Profile';
import ProtectedRoute from './common/ProtectedRoute';
import CourseCreate from './component/course/CourseCreate';
import CourseEdit from './component/course/CourseEdit';
import AllCourse from './component/course/AllCourse';

function App() {

  return (
    <>
    {/* <Preloader/> */}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/courses' Component={Course} />
        <Route path='/event' Component={Event} />
        <Route path='/blog' Component={Blog} />
        <Route path='/teacher' Component={Teacher} />
        <Route path='/contact' Component={Contact} />
        <Route path='/details' Component={Details} />



        
        <Route path='/login' Component={login} />
        <Route path='/registration' Component={Registration} />


        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<AllCourse/>} />
          <Route path="/course/create" element={<CourseCreate/>} />
          <Route path="/course/edit/:id" element={<CourseEdit/>} />
        </Route>

      </Routes>
      
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App

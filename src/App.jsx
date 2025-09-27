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
import Dashboard from './component/dashboard/Dashboard'

import Preloader from './common/Preloader'

import login from './component/auth/login'
import Registration from './component/auth/Registration'

function App() {

  return (
    <>
    {/* <Preloader/> */}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/course' Component={Course} />
        <Route path='/event' Component={Event} />
        <Route path='/blog' Component={Blog} />
        <Route path='/teacher' Component={Teacher} />
        <Route path='/contact' Component={Contact} />
        <Route path='/details' Component={Details} />

        
        <Route path='/login' Component={login} />
        <Route path='/registration' Component={Registration} />



        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App

import React, { useState } from 'react'
import Common from '../../common/Common'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

const registration = () => {

  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [password_confirmation,setConfirm_Password]= useState('');
  const [error,setError]= useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
     setName('');
    setEmail('');
    setPassword('');
    setConfirm_Password('');

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    if(!values.name)
    {
        setName('Name is required');
    }else if(values.name.length <3)
    {
        setName('Name is Too short');
    }

    if(!values.email)
    {
        setEmail('Email is required');
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        setEmail('Please enter a valid email');
    }

    if(!values.password)
    {
        setPassword('Password is required');
    }
    if(!values.password_confirmation)
    {
        setConfirm_Password('Password Confirmation is required');
    }
    else if(values.password_confirmation !== values.password)
    {
        setConfirm_Password('Password Not Matched');
    }
    console.log(values);
    toast.success('Successfully toasted!')
  };
  return (
    <Common>
      <section id="page-banner" className="pt-10 pb-10 bg_cover" data-overlay="8" style={{backgroundImage: "url('/images/page-banner-4.jpg')"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-cont">
                        <h2>Registration</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Registration</li>
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
                <div className="col-lg-7 mx-auto">
                    <div className="contact-from mt-30">
                        <div className="section-title">
                            <h5>Registration</h5>
                            <h2>Register Your Account</h2>
                        </div>
                        <div className="main-form pt-15">
                            <form id="contact-form" action="#" method="post" data-toggle="validator" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="singel-form form-group">
                                            <input name="name" type="text" placeholder="Your name"
                                            />
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>{name}</li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-12">
                                        <div className="singel-form form-group">
                                            <input name="email" type="email" placeholder="Email"
                                            />
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>{email}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="singel-form form-group">
                                            <input name="password" type="password" placeholder="password"
                                            />
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>{password}</li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-12">
                                        <div className="singel-form form-group">
                                            <input name="password_confirmation" type="password" placeholder="Confirm Password"
                                            />
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>{password_confirmation}</li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    <p className="form-message col-md-12">Already have an account? <Link to="/login">Log in</Link></p>
                                    <div className="col-md-12">
                                        <div className="singel-form">
                                            <button type="submit" className="main-btn">Send</button>
                                        </div> 
                                    </div> 
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
    </Common>
  )
}

export default registration
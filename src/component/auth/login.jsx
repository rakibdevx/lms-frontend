import React, { useState } from 'react';
import Common from '../../common/Common';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";
import { api } from '../../common/Config';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState(''); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    
    setLoading(true)
    e.preventDefault();
    setEmail('');
    setPassword('');
    setServerError('');
    let hasError = false;
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    if(!values.email){
      setEmail('Email Is required')
      hasError = true;
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
      setEmail('Enter a valid email')
      hasError = true;
    }
    if(!values.password){
      setPassword('Password Is required')
      hasError = true;
    }
    if (hasError == false) {
        try {
          const response = await axios.post(`${api}login`, values);
          toast.success("Login successful!");
          const { token, token_type, user } = response.data;
          const lmsUser = {token,token_type,user,};
          localStorage.setItem("lmsUser", JSON.stringify(lmsUser));
          navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.data.errors) {            
                if(error.response.data.errors.email)
                    {
                        setEmail(error.response.data.errors.email)
                    } 
                if(error.response.data.errors.name)
                    {
                        setName(error.response.data.errors.name)
                    } 
                if(error.response.data.errors.password)
                    {
                        setConfirm_Password(error.response.data.errors.password)
                    } 
            } else if (error.response.data.message) {
              setServerError(error.response.data.message);
            } else {
            toast.error("Something went wrong!");
            }
        }
      }
      setLoading(false);
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
                <h2>Log In</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Login</li>
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
                  <h5>Log In</h5>
                  <h2>Login Your Account</h2>
                </div>
                <div className="main-form pt-15">
                  <div className="help-block with-errors">
                      <ul className="list-unstyled">
                          <li>{serverError}</li>
                      </ul>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{email}</li>
                            </ul>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="password"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="help-block with-errors">
                          <ul className="list-unstyled">
                              <li>{password}</li>
                          </ul>
                      </div>
                      </div>

                      <p className="text-sm text-gray-600 col-md-12">
                        No account? Don’t worry <Link to="/registration" className="text-blue-600 font-semibold active">Register</Link>
                      </p>

                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="main-btn">{loading ? (
                                <>
                                  <i className="fa fa-spinner fa-spin mr-2"></i>
                                  Trying...
                                </>
                              ) : (
                                "Log In"
                              )} 
                            </button>
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
  );
};

export default Login;

import React, { useEffect, useState } from 'react'
import Common from '../../common/Common'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { api } from '../../common/Config';
import Sidebar from './Sidebar';

const Profile = () => {
  const [serverError, setserverError] = useState();
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [imageError, setImageError] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

    if (lmsUser && lmsUser.user) {
       setFormData({
        name: lmsUser.user.name || "",
        email: lmsUser.user.email || "",
        phone: lmsUser.user.phone || "",
        password: "",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
     e.preventDefault();const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    let hasError = false;
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

    setserverError('')
    setNameError('')
    setEmailError('')
    setPhoneError('')
    setPasswordError('')
    setImageError('')

    if(!values.name)
    {
        setNameError('Name is required');
        hasError = true;
    }else if(values.name.length <3)
    {
        setNameError('Name is Too short');
        hasError = true;
    }
    // email validation
    if(!values.email)
    {
        setEmailError('Email is required');
        hasError = true;
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        setEmailError('Please enter a valid email');
        hasError = true;
    }
    if (values.phone && (values.phone.length < 9 || values.phone.length > 12))
    {
        setPhoneError('In valid Phone');
        hasError = true;
    }
    if(values.password && values.password.length <6)
    {
        setPasswordError('Password at least 6 character ');
        hasError = true;
    }

    if(hasError == false)
    {
      formData.append('id', lmsUser.user.id);
      try {
        const response = await axios.post(
          `${api}profile`, formData,
          {
            headers: {
              Authorization: `Bearer ${lmsUser.token}`,
              'Content-Type': 'multipart/form-data', // jodi formData hoy
            },
          }
        );
        const updatedUser = {
          ...lmsUser,           // copy existing lmsUser object
          user: response.data.user, // overwrite/update the 'user' property
        };
        localStorage.setItem("lmsUser", JSON.stringify(updatedUser)); // save back to localStorage

        toast.success("Profile updated successfully!");

      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            if (errors.name) setNameError(errors.name[0]);
            if (errors.email) setEmailError(errors.email[0]);
            if (errors.phone) setPhoneError(errors.phone[0]);
            if (errors.password) setPasswordError(errors.password[0]);
          } else if (error.response.data.message) {
            setServerError(error.response.data.message);
          }
        } else {
          toast.error("Something went wrong!");
        }
      }

    }
  }
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
                <h2>Profile</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
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
            <div className="col-lg-3">
              <Sidebar/>
            </div>
            <div className="col-lg-7">
              <div className="contact-from mt-30">
                <div className="section-title">
                  <h5>Profile</h5>
                  <h2>Edit Your Profile</h2>
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
                            name="name"
                            type="name"
                            placeholder="Name"
                            defaultValue={formData.name}
                          />
                        </div>
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{nameError}</li>
                            </ul>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            defaultValue={formData.email}
                          />
                        </div>
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{emailError}</li>
                            </ul>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="phone"
                            type="number"
                            placeholder="Phone"
                            defaultValue={formData.phone}
                          />
                        </div>
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{phoneError}</li>
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
                              <li>{passwordError}</li>
                          </ul>
                      </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="main-btn">Update</button>
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
}

export default Profile
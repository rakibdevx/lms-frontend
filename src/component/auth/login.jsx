import React, { useState } from 'react';
import Common from '../../common/Common';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setApiError(data.message || 'Login failed');
      } else {
        console.log('Login success:', data);
        // Optionally store token: localStorage.setItem('token', data.token)
        navigate('/dashboard'); // redirect after login
      }
    } catch (error) {
      setApiError('Something went wrong. Try again.');
      console.error(error);
    }
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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      {apiError && (
                        <div className="col-md-12">
                          <p className="text-danger">{apiError}</p>
                        </div>
                      )}

                      <p className="text-sm text-gray-600 col-md-12">
                        No account? Don’t worry <Link to="/registration" className="text-blue-600 font-semibold active">Register</Link>
                      </p>

                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="main-btn">Log In</button>
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

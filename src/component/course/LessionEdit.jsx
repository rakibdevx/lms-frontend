import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../common/Config';
import toast from 'react-hot-toast';
import Common from '../../common/Common';
import { SettingsContext } from '../../context/SettingsContext';
import Sidebar from '../account/Sidebar';

const LessionEdit = () => {
  const settings = useContext(SettingsContext);
  const [lession, setLession] = useState();
  const [serverError, setServerError] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [status, setStatus] = useState();
  const [video_type, setVideo_type] = useState();
  const [is_free, setIs_free] = useState();
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false);
  const [videoType, setVideoType] = useState("youtube");
  const [isFree, setIsFree] = useState(false);
  const lessionId = useParams();

  const fetchChapter = async () => {
    try {
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const res = await axios.get(`${api}course/lession/${lessionId.id}`, {
        headers: {
          Authorization: `Bearer ${lmsUser.token}`,
        },
      });
      setLession(res.data);
      setVideoType(res.data.lession.video_type || "youtube");
      setIsFree(res.data.lession.is_free === "yes");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chapters");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChapter();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTitle('');
      setDescription('');
      setDuration('');
      setStatus('');
      setVideo_type('');
      setIs_free('');
      setVideo('');
      setVideo('');
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const formData = new FormData();
      formData.append('title', e.target.title.value);
      formData.append('description', e.target.description.value);
      formData.append('duration', e.target.duration.value);
      formData.append('status', e.target.status.value);
      formData.append('video_type', videoType);
      formData.append('is_free', isFree ? 'yes' : 'no');
      
      if (videoType === "youtube") {
        formData.append('youtube_link', e.target.youtube_link.value);
      } else {
        formData.append('uploaded_video', e.target.uploaded_video.files[0]);
      }

      formData.append('_method', 'PUT'); // spoof PUT
      const res = await axios.post(`${api}course/lession/${lessionId.id}`, formData, {
        headers: {
          Authorization: `Bearer ${lmsUser.token}`,
        },
      });
      fetchChapter()
      toast.success("Lesson updated successfully");
    } catch (error) {
      if (error.response && error.response.data) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            if (errors.title) setTitle(errors.title[0]);
            if (errors.description) setDescription(errors.description[0]);
            if (errors.duration) setDuration(errors.duration[0]);
            if (errors.status) setStatus(errors.status[0]);
            if (errors.video_type) setVideo_type(errors.video_type[0]);
            if (errors.is_free) setIs_free(errors.is_free[0]);
            if (errors.youtube_link) setVideo(errors.youtube_link[0]);
            if (errors.uploaded_video) setVideo(errors.uploaded_video[0]);
          }else if (error.response.data.message) {
            setServerError(error.response.data.message);
          }
      }
      toast.error("Failed to update lesson");
    } finally {
      setLoading(false);
    }
  };

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
                    <li className="breadcrumb-item active" aria-current="page">Lession</li>
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
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <div className="contact-from mt-30 pt-4">
                <div className="section-title d-flex justify-content-between align-item-center">
                  <h5>Edit Lession</h5>
                </div>
                {
                  !lession ? (
                    <div>Loading...</div>
                  ) : (
                    <form className="main-form pt-15" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="help-block with-errors">
                          <ul className="list-unstyled">
                              <li>{serverError}</li>
                          </ul>
                      </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <label htmlFor="title">Title</label>
                            <input
                              id="title"
                              name="title"
                              type="text"
                              placeholder="Title"
                              defaultValue={lession?.lession?.title}
                            />
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{title}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                              id="description"
                              name="description"
                              placeholder="Description"
                              defaultValue={lession?.lession?.description}
                              className="form-control"
                              rows={5}
                            />
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{description}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <label htmlFor="duration">Duration <small>In Min</small></label>
                            <input
                              id="duration"
                              name="duration"
                              type="number"
                              placeholder="Duration in minutes"
                              defaultValue={lession?.lession?.duration}
                            />
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{duration}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <label htmlFor="status">Status</label>
                            <select id="status" name="status" defaultValue={lession?.lession?.status}>
                              <option value="draft">Draft</option>
                              <option value="published">Published</option>
                            </select>
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{status}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <label className="text-navy mb-0">Video Type</label>
                            <div className="d-flex align-items-center mt-2">
                              <div className="mr-3 d-flex align-items-center">
                                <input
                                  type="radio"
                                  id="youtube"
                                  name="videoType"
                                  value="youtube"
                                  checked={videoType === "youtube"}
                                  onChange={() => setVideoType("youtube")}
                                />
                                <label htmlFor="youtube" className="m-0">Youtube</label>
                              </div>
                              <div className="mr-3 d-flex align-items-center">
                                <input
                                  type="radio"
                                  id="uploaded"
                                  name="videoType"
                                  value="uploaded"
                                  checked={videoType === "uploaded"}
                                  onChange={() => setVideoType("uploaded")}
                                />
                                <label htmlFor="uploaded" className="m-0">Upload</label>
                              </div>
                            </div>
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{video_type}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mt-3">
                            {videoType === "youtube" ? (
                              <input
                                type="text"
                                name="youtube_link"
                                placeholder="Youtube video link"
                                defaultValue={lession?.lession?.video_url}
                                className="form-control"
                              />
                            ) : (
                              <input
                                type="file"
                                name="uploaded_video"
                                className="form-control"
                              />
                            )}
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{video}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mt-3">
                            <input
                              type="checkbox"
                              name="is_free"
                              id="is_free"
                              checked={isFree}
                              onChange={(e) => setIsFree(e.target.checked)}
                            />
                            <label htmlFor="is_free" className="ml-2">Is Free?</label>
                          </div>
                          <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li>{is_free}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <button type="submit" className="main-btn px-3">
                              {loading ? (
                                <>
                                  Updating...<i className="fa fa-spinner fa-spin mr-2"></i>
                                </>
                              ) : (
                                "Update"
                              )}
                            </button>
                            <Link
                              to={`/course/edit/${lession?.lession?.chapter?.course?.slug || ''}`}
                              className="main-btn background-navy text-color ml-3"
                            >
                              Back
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  )
                }                
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-10">
              <div className="contact-from mt-30 pt-4">
                {
                  !lession ? (
                    <div>Loading...</div>
                  ) : (
                      <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <h2>Video Lession</h2>
                      {
                        lession?.lession?.video_type === 'uploaded' ? (
                          <video
                            src={lession?.lession?.uploaded_url}
                            controls
                            width="600"
                            style={{ borderRadius: '10px' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <iframe
                            width="600"
                            height="340"
                            src={lession?.lession?.video_url}
                            title="YouTube video"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        )
                      }

                      </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Common>
  );
};

export default LessionEdit;




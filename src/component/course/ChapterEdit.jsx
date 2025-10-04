import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../common/Config';
import toast from 'react-hot-toast';

const ChapterEdit = ({course,refreshChapter}) => {
    
    const [showChapterModal, setShowChapterModal] = useState(false);
    const [loading, setLoading] = useState();
    const [title, setTitle] = useState();
    const [status, setStatus] = useState();
    const [serverError, setServerError] = useState();
    const toggleChapterModal = () => {
        setShowChapterModal(!showChapterModal);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const values = Object.fromEntries(formData.entries());
      let data = false;
      if(!values.title){
          setTitle('Title Is Required');
          data=true;
      }
      if(data == false)
      {
          try {
              setStatus('');
              setTitle('');
              formData.append('course_id', course);
              const response = await axios.post(
              `${api}course/chapter/create`,
              formData,
              {
              headers: {
                  Authorization: `Bearer ${lmsUser.token}`,
                  "Content-Type": "multipart/form-data",
              },
              }
          );
          toast.success("Outcome Create successfully!");
          toggleChapterModal();
          e.target.reset();
          } catch (error) {
              if (error.response && error.response.data) {
              if (error.response.data.errors) {
                  const errors = error.response.data.errors;
                  if (errors.title) setTitle(errors.title[0]);
                  if (errors.status) setStatus(errors.status[0]);
              } else if (error.response.data.message) {
                  setServerError(error.response.data.message);
              }
          
              }else {
              toast.error("Something went wrong!");
              }
              console.log(error)
          }
          refreshChapter();
      }
      setLoading(false);
    }
  return (
    <>
        <Link
            className="main-btn px-1 ml-1"
            style={{ lineHeight: 2, cursor: "pointer" }}
            onClick={toggleChapterModal}
            >
            Chapter 
        </Link>
        {showChapterModal && (
          <div
            className={`modal fade ${showChapterModal ? "show d-block" : ""}`}
            tabIndex="-1"
            aria-labelledby="chapterModalLabel"
            aria-hidden={!showChapterModal}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Add Chapter</h5>
                  <button type="button" className="main-btn px-2 ml-1" onClick={toggleChapterModal} aria-label="Close" style={{ lineHeight: "2" }}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="modal-body p-0">
                  <div className="contact-from p-0 pl-4 pr-4">
                    <div className="main-form pt-15">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="singel-form form-group m-0">
                              <label htmlFor="title">Chapter Title</label>
                              <div className="d-flex align-items-center justify-content-center">
                                  <input
                                  id="title"
                                  name="title"
                                  type="text"
                                  placeholder="title"
                              />
                              </div>
                              <div className="help-block with-errors">
                                  <ul className="list-unstyled">
                                      <li>{title}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <label htmlFor="description">Chapter Description</label>
                            <div className="d-flex align-items-center justify-content-center">
                              <textarea
                                id="description"
                                name="description"
                                placeholder="Enter Chapter Description"
                                rows="4"
                                >
                              </textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                              <label htmlFor="status">Status</label>
                              <select id="status" name="status">
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
                            
                      </div>
                      <div className="help-block with-errors">
                          <ul className="list-unstyled">
                          <li>{serverError}</li>
                          </ul>
                      </div>
                    </div>
          
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="main-btn px-2 ml-1"  onClick={toggleChapterModal} style={{ lineHeight: "2" }}>Close</button>
                  <button type="submit" className="main-btn px-2 ml-1 background-navy text-color" style={{ lineHeight: "2" }}>
                    {loading ? (
                      <>
                          Wait....<i className="fa fa-spinner fa-spin mr-2"></i>
                      </>
                      ) : (
                        "Save Chapter"
                      )}
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default ChapterEdit
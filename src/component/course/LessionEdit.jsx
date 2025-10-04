import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LessionEdit = () => {
    
    const [showLessionModal, setShowLessionModal] = useState(false);
    const toggleLessionModal = () => {
        setShowLessionModal(!showLessionModal);
    };
  return (
    <>
        <Link
            className="main-btn px-1 ml-1"
            style={{ lineHeight: 2, cursor: "pointer" }}
            onClick={toggleLessionModal}
            >
            Lession
        </Link>
        {showLessionModal && (
          <div
            className={`modal fade ${showLessionModal ? "show d-block" : ""}`}
            tabIndex="-1"
            aria-labelledby="lessionModalLabel"
            aria-hidden={!showLessionModal}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Add Lession</h5>
                  <button type="button" className="main-btn px-2 ml-1" onClick={toggleLessionModal} aria-label="Close" style={{ lineHeight: "2" }}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <form >
                <div className="modal-body p-0">
                  <div className="contact-from p-0 pl-4 pr-4">
                    <div className="main-form pt-15">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="singel-form form-group m-0">
                              <label htmlFor="title">Lession Title</label>
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
                                      <li></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <label htmlFor="description">Lession Description</label>
                            <div className="d-flex align-items-center justify-content-center">
                              <textarea
                                id="description"
                                name="description"
                                placeholder="Enter Lession Description"
                                rows="4"
                                >
                              </textarea>
                            </div>
                              <div className="help-block with-errors">
                                  <ul className="list-unstyled">
                                      <li></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                              <label htmlFor="status">Category</label>
                              <select id="status" name="status">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                              </select>
                          </div>
                          <div className="help-block with-errors">
                              <ul className="list-unstyled">
                              <li></li>
                              </ul>
                          </div>
                      </div>
                            
                    </div>
                    </div>
                    <div className="main-form pt-15">
                        <div className="help-block with-errors">
                            <ul className="list-unstyled">
                                <li></li>
                            </ul>
                        </div>
                    </div>
          
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="main-btn px-2 ml-1"  onClick={toggleLessionModal} style={{ lineHeight: "2" }}>Close</button>
                  <button type="submit" className="main-btn px-2 ml-1 background-navy text-color" style={{ lineHeight: "2" }}>Save Lession</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default LessionEdit
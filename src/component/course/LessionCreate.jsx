import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../common/Config';
import toast from 'react-hot-toast';

const LessionCreate = ({chapters,refreshChapter}) => {
    const [showLessionModal, setShowLessionModal] = useState(false);
    const [loading, setloading] = useState();
    const [title, setTitle] = useState();
    const [chapter, setChapter] = useState();
    const [serverError, setServerError] = useState();
    const toggleLessionModal = () => {
        setShowLessionModal(!showLessionModal);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle('');
    setChapter('');
    setServerError('');
    setloading(true);

    const formData = new FormData(e.target);
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
    const values = Object.fromEntries(formData.entries());
    let data = false;
    if(!values.chapter){
        setChapter('Chapter Is Required');
        data=true;
    }
    if(!values.title){
        setTitle('Chapter Is Required');
        data=true;
    }
    
    if(data == false)
    {
        try {
            const response = await axios.post(
            `${api}course/lession/create`,
            formData,
            {
            headers: {
                Authorization: `Bearer ${lmsUser.token}`,
                "Content-Type": "multipart/form-data",
            },
            }
        );
        refreshChapter();
        toast.success("Lession Create successfully!");
        e.target.reset();
        } catch (error) {
            if (error.response && error.response.data) {
            if (error.response.data.errors) {
                const errors = error.response.data.errors;
                if (errors.chapter_id) setChapter(errors.chapter_id[0]);
                if (errors.title) setTitle(errors.title[0]);
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
        setloading(false);
    }


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
                <form onSubmit={handleSubmit}>
                <div className="modal-body p-0">
                  <div className="contact-from p-0 pl-4 pr-4">
                    <div className="main-form pt-15">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                              <label htmlFor="chapter">Chapter</label>
                              <select id="chapter" name="chapter">
                                <option value="">Select a chapter</option>
                                 {chapters?.chapter?.map((value, index) => (
                                  <option className='text-truncate' key={index} value={value.id}>
                                    {value.title}
                                  </option>
                                ))}
                              </select>
                          </div>
                          <div className="help-block with-errors">
                              <ul className="list-unstyled">
                              <li>{chapter}</li>
                              </ul>
                          </div>
                        </div>
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
                                <li>{title}</li>
                              </ul>
                            </div>
                          </div>
                        </div>      
                      </div>
                    </div>
                    <div className="main-form pt-15">
                      <div className="help-block with-errors">
                        <ul className="list-unstyled">
                          <li>{serverError}</li>
                        </ul>
                      </div>
                    </div>        
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="main-btn px-2 ml-1"  onClick={toggleLessionModal} style={{ lineHeight: "2" }}>Close</button>
                  <button type="submit" className="main-btn px-2 ml-1 background-navy text-color" style={{ lineHeight: "2" }}>
                    {loading ? (
                    <>
                        Wait...<i className="fa fa-spinner fa-spin mr-2"></i>
                    </>
                    ) : (
                    "Save Lession"
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

export default LessionCreate
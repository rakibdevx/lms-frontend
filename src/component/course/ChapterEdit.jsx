import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../common/Config';

const ChapterEdit = ({ data, refreshChapter, closeModal }) => {
  const [chapter, setChapter] = useState({
    title: "",
    description: "",
    status: "draft",
  });
  const [serverError, setServerError] = useState();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    if (data?.id) {
      fetchChapterDetails(data.id);
    }
  }, [data]);

  const fetchChapterDetails = async (id) => {
    try {
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const res = await axios.get(`${api}course/chapter/edit/${id}`, {
        headers: { Authorization: `Bearer ${lmsUser.token}` },
      });
      setChapter({
        title: res.data.chapter?.title || "",
        description: res.data.chapter?.description || "",
        status: res.data.chapter?.status || "draft",
      });
    } catch (error) {
      toast.error("Failed to get chapter!");
      console.error(error);
    }
  };

  const handleSubmitdata = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setTitle('');
    setServerError('');

    const formData = new FormData(e.target);
    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
    const values = Object.fromEntries(formData.entries());
    let hasError = false;

    if (!values.title) {
      setTitle('Title is required');
      hasError = true;
    }

    if (!values.status) {
      setStatus('Status is required');
      hasError = true;
    }

    if (!hasError) {
      try {
        formData.append('course_id', data?.course_id);
        formData.append('_method', 'PUT');

        await axios.post(
          `${api}course/chapter/update/${data?.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${lmsUser.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        toast.success("Chapter updated successfully!");
        closeModal();
        e.target.reset();
        refreshChapter();
      } catch (error) {
        if (error.response?.data) {
          const errors = error.response.data.errors || {};
          if (errors.title) setTitle(errors.title[0]);
          if (errors.status) setStatus(errors.status[0]);
          if (error.response.data.message) setServerError(error.response.data.message);
        } else {
          toast.error("Something went wrong!");
        }
        console.error(error);
      }
    }

    setLoading(false);
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      aria-labelledby="chapterModalLabel"
      aria-hidden="false"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        pointerEvents: "auto"
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Edit Chapter</h5>
            <button
              type="button"
              className="main-btn px-2 ml-1"
              onClick={closeModal}
              aria-label="Close"
              style={{ lineHeight: "2" }}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>

          <form onSubmit={handleSubmitdata}>
            <div className="modal-body p-0">
              <div className="contact-from p-0 pl-4 pr-4">
                <div className="main-form pt-15">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="singel-form form-group m-0">
                        <label className="text-navy" htmlFor="title">
                          Chapter Title
                        </label>
                        <input
                          id="title"
                          name="title"
                          type="text"
                          placeholder="Enter title"
                          defaultValue={chapter?.title}
                        />
                        <div className="help-block with-errors">
                          <ul className="list-unstyled">
                            <li>{title}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="singel-form form-group">
                        <label className="text-navy" htmlFor="description">
                          Chapter Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Enter Chapter Description"
                          rows="4"
                          defaultValue={chapter?.description}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="singel-form form-group">
                        <label className="text-navy" htmlFor="status">
                          Status
                        </label>
                        <select
                           id="status"
                           name="status"
                            value={chapter.status}
                            onChange={(e) =>
                            setChapter({ ...chapter, status: e.target.value })
                            }
                        >
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
              <button
                type="button"
                className="main-btn px-2 ml-1"
                onClick={closeModal}
                style={{ lineHeight: "2" }}
              >
                Close
              </button>

              <button
                type="submit"
                className="main-btn px-2 ml-1 background-navy text-color"
                style={{ lineHeight: "2" }}
              >
                {loading ? (
                  <>
                    Wait... <i className="fa fa-spinner fa-spin mr-2"></i>
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
  );
};

export default ChapterEdit;
// fhjkefhewiofb
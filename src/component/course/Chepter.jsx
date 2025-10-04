import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from '../../common/Config';
import Lessons from '../course/Lessons';
import toast from 'react-hot-toast';
import ChapterCreate from './ChapterCreate';
import LessionEdit from './LessionEdit';
import Swal from 'sweetalert2';
import ChepterEdit from './ChepterEdit';

const Chapter = ({ course }) => {
  const [chapters, setChapters] = useState();
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchChapter = async () => {
    try {
      const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
      const res = await axios.get(`${api}course/chapter/${course}`, {
        headers: {
          Authorization: `Bearer ${lmsUser.token}`,
        },
      });
      setChapters(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chapters");
    }
  };

  useEffect(() => {
    fetchChapter();
  }, []);

  const chapterDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the chapter.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
          await axios.delete(`${api}course/chapter/delete/${id}`, {
            headers: { Authorization: `Bearer ${lmsUser.token}` },
          });

          toast.success("Chapter deleted successfully!");
          fetchChapter();
          Swal.fire("Deleted!", "Your Chapter has been deleted.", "success");
        } catch (error) {
          toast.error("Failed to delete chapter!");
          console.error(error);
        }
      }
    });
  };

  return (
    <>
      <div className="contact-from mt-30 pl-4 pr-4">
        <div className="section-title d-flex align-items-center justify-content-between">
          <h5>Add Chapter And Lesson</h5>
          <div>
            <ChapterCreate course={course} refreshChapter={fetchChapter} />
            <LessionEdit course={course} />
          </div>
        </div>

        <div className="tab-pane fade show" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
          <div className="curriculam-cont py-3 px-0">
            <div className="accordion" id="lession">
              {!chapters ? (
                <p>Loading...</p>
              ) : (
                chapters?.chapter?.map((data, index) => (
                  <div className="card" key={data.id || index}>
                    <div className="card-header" id={`heading_${index}`}>
                      <a
                        href="#"
                        className="collapsed"
                        data-toggle="collapse"
                        data-target={`#collapse_${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse_${index}`}
                      >
                        <ul className="d-flex">
                          <li className="w-25">
                            <i className="fa fa-file-o"></i>
                            <span className="lecture">Lecture {index + 1}</span>
                          </li>
                          <li className="w-50 text-truncate head text-navy text-capitalize">
                            {data.title}
                          </li>
                          <li className="w-25 d-flex align-items-between justify-content-center">
                            <span className="time d-none d-md-block">
                              <span
                                className={`badge ${data.status === "draft"
                                  ? "background-color text-navy"
                                  : "background-navy text-color"
                                  }`}
                              >
                                {data.status === "draft" ? "Draft" : "Publish"}
                              </span>
                            </span>
                            <div className="d-flex">
                              <button
                                className="main-btn p-0 background-navy text-color"
                                style={{ lineHeight: 2, cursor: "pointer", fontSize: 10 }}
                                onClick={() => {
                                  setSelectedChapter(data);
                                  setShowEditModal(true);
                                }}
                              >
                                <i className="fa fa-gear p-1"></i>
                              </button>
                              <button
                                className="main-btn p-0"
                                style={{ lineHeight: 2, cursor: "pointer", fontSize: 10 }}
                                onClick={() => chapterDelete(data.id)}
                              >
                                <i className="fa fa-trash p-1"></i>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </a>
                    </div>

                    <div
                      id={`collapse_${index}`}
                      className="collapse"
                      aria-labelledby={`heading_${index}`}
                      data-parent="#lession"
                    >
                      <div className="card-body">
                        <p>{data?.description}</p>
                        {data.lessons?.map((lesson, idx) => (
                          <Lessons key={lesson.id || idx} lesson={lesson} idx={idx} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🧩 Modal placed here once, globally */}
      {showEditModal && (
        <ChepterEdit
          data={selectedChapter}
          refreshChapter={fetchChapter}
          closeModal={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};

export default Chapter;

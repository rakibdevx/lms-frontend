import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { api } from "../../common/Config";

const Lession = ({ lession, idx, refreshChapter }) => {
  if (!lession) return null;

  const { id, title, description, duration } = lession;
  const lessionAccordionId = `lessionAccordion_${idx}`;
  const headingId = `heading_${idx}_${id}`;
  const collapseId = `collapse_${idx}_${id}`;

  const lessionDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the lesson.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
          await axios.delete(`${api}course/lession/delete/${id}`, {
            headers: { Authorization: `Bearer ${lmsUser?.token}` },
          });
          toast.success("Lesson deleted successfully!");
          refreshChapter();
        } catch (error) {
          console.error(error);
          toast.error("Failed to delete lesson!");
        }
      }
    });
  };

  return (
    <div className="accordion" id={lessionAccordionId}>
      <div className="card">
        <div className="card-header" id={headingId}>
          <div
              role="button"
              tabIndex={0}
              className="btn btn-link w-100 text-left collapsed"
              data-toggle="collapse"
              data-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <ul className="d-flex justify-content-between align-items-center mb-0">
              <li>
                <i className="fa fa-file-o"></i>{" "}
                <span className="lecture">Lesson {idx + 1}</span>
              </li>
              <li className="text-navy text-truncate" title={title}>
                {title}
              </li>
              <li className="">
                <div className="d-flex align-items-center">
                <Link
                  to={`/course/lession/${id}`}
                  className="main-btn p-0 background-navy text-color border-0 mr-1"
                  style={{ lineHeight: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fa fa-gear p-1"></i>
                </Link>
                <button
                  className="main-btn p-0"
                  style={{ lineHeight: 2, cursor: "pointer", fontSize: 10 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    lessionDelete(id);
                  }}
                >
                  <i className="fa fa-trash p-1"></i>
                </button>

                <span className="time ml-1">
                  <i className="fa fa-clock-o"></i> {duration || "—"}
                </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          id={collapseId}
          className="collapse"
          aria-labelledby={headingId}
          data-parent={`#${lessionAccordionId}`}
        >
          <div className="card-body">
            <p>{description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lession;

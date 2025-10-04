import React from "react";

const Lessons = ({ lesson, idx, chapterIndex }) => {
  if (!lesson) return null;

  const lessonAccordionId = `lessonAccordion_${chapterIndex}`;
  const headingId = `heading_${chapterIndex}_${lesson.id}`;
  const collapseId = `collapse_${chapterIndex}_${lesson.id}`;

  return (
    <div className="accordion" id={lessonAccordionId}>
      <div className="card">
        <div className="card-header" id={headingId}>
          <a
            href="#"
            data-toggle="collapse"
            className="collapsed"
            data-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <i className="fa fa-file-o"></i>{" "}
                <span className="lecture">Lesson {idx + 1}</span>
              </li>
              <li className="text-navy">{lesson.title}</li>
              <li>
                <span className="time d-none d-md-block">
                  <i className="fa fa-clock-o"></i> {lesson.duration || "—"}
                </span>
              </li>
            </ul>
          </a>
        </div>

        <div
          id={collapseId}
          className="collapse"
          aria-labelledby={headingId}
          data-parent={`#${lessonAccordionId}`}
        >
          <div className="card-body">
            <p>{lesson.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;

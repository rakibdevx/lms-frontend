import React from 'react';

const Lessons = ({ lesson,idx }) => {
    if (!lesson) return null;

    return (
        <div className="curriculam-cont p-0">
            <div className="accordion" id={`lession_${lesson.id}`}>
                <div className="card">
                    <div className="card-header" id={`heading_${lesson.id}`}>
                        <a 
                            href="#" 
                            data-toggle="collapse" 
                            className="collapsed" 
                            data-target={`#collapse_${lesson.id}`} 
                            aria-expanded="false" 
                            aria-controls={`collapse_${lesson.id}`}
                        >
                            <ul>
                                <li><i className="fa fa-file-o"></i></li>
                                <li><span className="lecture">Lesson {idx + 1}</span></li>
                                <li><span className="head">{lesson.title}</span></li>
                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> {lesson.duration}</span></span></li>
                            </ul>
                        </a>
                    </div>
                    <div 
                        id={`collapse_${lesson.id}`} 
                        className="collapse" 
                        aria-labelledby={`heading_${lesson.id}`} 
                        data-parent={`#lession_${lesson.id}`}
                    >
                        <div className="card-body">
                            <p>{lesson.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;

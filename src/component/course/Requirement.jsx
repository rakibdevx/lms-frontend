import React, { useState } from 'react'
import { api } from '../../common/Config';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import axios from 'axios';

const Requirement = ({course,refreshCourse}) => {
    const[serverError,setServerError ] = useState();
    const[loading,setLoading ] = useState();
    const[dataLoading,setDataLoading ] = useState();
    const[requirement, setRequirement] = useState(null);

    const handleSubmit = async (e) => {
        setRequirement('');
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
        const values = Object.fromEntries(formData.entries());
        let data = false;
        if(!values.requirement){
            setRequirement('Requirement Is Required');
            data=true;
        }
        
        if(data == false)
        {
            try {
            formData.append('course_id', course.course.id);
            const response = await axios.post(
            `${api}course/requirement/create`,
            formData,
            {
                headers: {
                Authorization: `Bearer ${lmsUser.token}`,
                "Content-Type": "multipart/form-data",
                },
            }
            );
            toast.success("Requirement Create successfully!");
            e.target.reset();
            } catch (error) {
            if (error.response && error.response.data) {
                if (error.response.data.errors) {
                const errors = error.response.data.errors;
                if (errors.requirement) setRequirement(errors.requirement[0]);
                } else if (error.response.data.message) {
                setServerError(error.response.data.message);
                }
            
            }else {
                toast.error("Something went wrong!");
            }
            console.log(error);
            }
            refreshCourse();
        }
        setLoading(false);
    }

    const handleDeleteRequirement = async (e)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    setDataLoading('true');
                    const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
                    await axios.delete(`${api}course/requirement/delete/${e}`, {
                        headers: { Authorization: `Bearer ${lmsUser.token}` },
                    });
                    toast.success("Outcome deleted successfully");
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Outcome has been deleted.",
                        icon: "success"
                    }); 
                    refreshCourse();
                } catch (error) { 
                    toast.error("Failed to delete Outcome");
                    console.log(error);
                }finally {
                    setDataLoading(false);
                }
            }
        });
    };

  return (
    <div className="contact-from mt-30 pl-4 pr-4">
        <div className="section-title">
            <h5>Requirements</h5>
        </div>
        <div className="main-form pt-15">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-md-12">
                    <div className="singel-form form-group">
                    <label htmlFor="title">Requirement</label>
                    <div className="d-flex align-items-center justify-content-center">
                        <input
                        id="requirement"
                        name="requirement"
                        type="text"
                        placeholder="Requirement"
                    />
                    <button type="submit" className="main-btn px-3">
                        {loading ? (
                            <>
                                <i className="fa fa-spinner fa-spin mr-2"></i>
                            </>
                            ) : (
                            <i className="fa fa-arrow-up mr-2"></i>
                            )}
                        </button>
                    </div>
                    <div className="help-block with-errors">
                        <ul className="list-unstyled">
                            <li>{requirement}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        <div className="main-form pt-15">
            <div className="help-block with-errors">
                <ul className="list-unstyled">
                    <li>{serverError}</li>
                </ul>
            </div>
        </div>
       {dataLoading ? (
            <p>Deleting... <i className="fa fa-spinner fa-spin mr-2"></i></p>
        ) : (
            course.course.requirements.map((requirement, index) => (
                <div className="card mb-2 d-flex flex-row justify-content-between align-items-center" key={index}>
                <div className="card-body p-2 m-0">
                {requirement.requirement}
                </div>
                <button
                className="btn btn-sm btn-danger mr-2"
                onClick={() => handleDeleteRequirement(requirement.id)}
                >
                <i className="fa fa-trash"></i>
                </button>
            </div>
            ))
        )}
        </div>
  )
}

export default Requirement
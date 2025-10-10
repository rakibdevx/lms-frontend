import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../common/Config';
import axios from 'axios';

    const Comment = ({data,refreshCourse}) => {
        const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
        const [rating, setRating] = useState(0);
        const [loading, setLoading] = useState();
        const [comment, setComment] = useState();
        const [ratingErr, setRatingErr] = useState();

        const handleSubmit = async (e) => {
            setRatingErr('');
            setComment('');
            e.preventDefault(); 
            setLoading(true);
            const formData = new FormData(e.target);
            formData.append('rating', rating);

            let hasError = false;

            if (!formData.get('comment')) {
                toast.error('Comment is required');
                hasError = true;
            }

            if (!formData.get('rating')) {
                toast.error('Rating is required');
                hasError = true;
            }

            if (!hasError) {
                try {
                    const res = await axios.post(
                        `${api}course/comment/${data}`,
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${lmsUser.token}`,
                                'Content-Type': 'multipart/form-data',
                            },
                        }
                    );
                    toast.success('Comment posted successfully!');

                }catch (error) {
                    if (error.response && error.response.data) {
                        if (error.response.data.errors) {
                            const errors = error.response.data.errors;
                            if (errors.comment) setComment(errors.comment[0]);
                            if (errors.rating) setRatingErr(errors.rating[0]);
                        } else if (error.response.data.message) {
                            setServerError(error.response.data.message);
                        }
                    } else {
                        toast.error("Something went wrong!");
                    } 
                    console.log(error);
                }
                finally {
                    setLoading(false);
                }
            }
        refreshCourse();
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-singel">
                        <textarea name="comment" placeholder="Comment"></textarea>
                    </div>
                     <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{comment}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-singel">
                        <div className="rate-wrapper">
                            <div className="rate-label">Your Rating:</div>
                            <div className="rate">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <div
                                        key={star}
                                        className="rate-item"
                                        onClick={() => setRating(star)}
                                        style={{ color: star <= rating ? '#ffc107' : '#ccc', cursor: 'pointer' }}
                                    >
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                     <div className="help-block with-errors">
                        <ul className="list-unstyled">
                        <li>{ratingErr}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-singel">
                        <button type="submit" className="main-btn">
                            {loading ? (
                                <>
                                Posting....<i className="fa fa-spinner fa-spin mr-2"></i>
                                </>
                            ) : (
                                "Post Comment"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Comment;

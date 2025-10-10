import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { api } from "../../common/Config";

export default function QuizQuestion({ quizze }) {
    const [questionText, setQuestionText] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctOption, setCorrectOption] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(false);
    const [serverError, setServerError] = useState();

    const handleOptionChange = (index, value) => {
      const newOptions = [...options];
      newOptions[index] = value;
      setOptions(newOptions);
    };

    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();

      if (!questionText) {
        toast.success("Please enter the question.");
        return;
      }
      if (options.some((opt) => !opt.trim())) {
        toast.success("Please fill all options.");
        return;
      }
      if (correctOption === null) {
        toast.success("Please select the correct option.");
        return;
      }


      try {
        const payload = {
          quizze_id: quizze,
          question_text: questionText,
          options: options,
          correct_option: correctOption,
        };

        const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));
        const res = await axios.post(`${api}course/quizze/question`,payload, {
            headers: {
              Authorization: `Bearer ${lmsUser.token}`,
              "Content-Type": "multipart/form-data",
            },
        });


        toast.success("Question created successfully!");
        setQuestionText("");
        setOptions(["", "", "", ""]);
        setCorrectOption(null);
      } catch (error) {
        setLoading(false);
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          const allErrors = Object.values(errors).flat().join("\n");
          setServerError(allErrors);
          toast.error("Validation failed!");
        } else if (error.response?.data?.message) {
          setServerError(error.response.data.message);
        } else {
          toast.error("Something went wrong!");
        }
      }


      setLoading(false);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="singel-form form-group">
            <label htmlFor="question">Question: </label>
            <input
              id="question"
              name="question"
              type="text"
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Question"
            />
          </div>
          <div className="help-block with-errors">
              <ul className="list-unstyled">
                  <li>{title}</li>
              </ul>
          </div>
        </div>

       <div className="col-md-12">
          <div className="singel-form form-group">
          <label>Options:</label>
          {options.map((opt, idx) => (
            <div key={idx} className="d-flex ml-2">
              <input
                type="text"
                className="w-auto"
                placeholder={`Option ${idx + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                required
              />
              <label  className="d-flex align-items-center ml-2">
                <input
                  type="radio"
                  className="w-auto"
                  name="correctOption"
                  checked={correctOption === idx}
                  onChange={() => setCorrectOption(idx)}
                  required
                />
                Correct
              </label>
            </div>
          ))}
        </div>
        </div>
        <div className="help-block with-errors">
            <ul className="list-unstyled">
                <li>{serverError}</li>
            </ul>
        </div>


      
         <div className="col-md-12">
            <div className="singel-form form-group">
                <button type="submit" className="main-btn px-3">
                    {loading ? (
                    <>
                        Updating...<i className="fa fa-spinner fa-spin mr-2"></i>
                    </>
                    ) : (
                    "Update"
                    )}
                </button>
            </div>
        </div>
      </form>
    );
  }


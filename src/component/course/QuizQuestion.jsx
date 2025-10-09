import React, { useState } from "react";
import axios from "axios";

export default function QuizQuestionForm({ quizId }) {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!questionText.trim()) {
      alert("Please enter the question.");
      return;
    }
    if (options.some((opt) => !opt.trim())) {
      alert("Please fill all options.");
      return;
    }
    if (correctOption === null) {
      alert("Please select the correct option.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        quiz_id: quizId,
        question_text: questionText,
        options: options,
        correct_option: correctOption,
      };

      const res = await axios.post("/api/questions", payload); // Adjust API path

      alert("Question created successfully!");
      // reset form if needed
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectOption(null);
    } catch (error) {
      alert("Failed to create question.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          rows={3}
          required
        />
      </div>

      <div>
        <label>Options:</label>
        {options.map((opt, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <input
              type="text"
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              required
            />
            <label style={{ marginLeft: 8 }}>
              <input
                type="radio"
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

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Question"}
      </button>
    </form>
  );
}

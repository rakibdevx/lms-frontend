import React from 'react'

const Questions = ({quizze}) => {
  return (
<div className="quiz-paper">
  {quizze?.data?.questions?.length > 0 ? (
    quizze.data.questions.map((question, qIndex) => (
      <div key={qIndex} className="question-card mb-4 p-3 border rounded">

        <div className="mb-2">
          <strong>Q{qIndex + 1}:</strong> {question.question_text}
        </div>

        <div className="d-flex flex-wrap gap-3">
          {question.options?.map((option, oIndex) => {
            const optionLabel = String.fromCharCode(65 + oIndex);
            const isCorrect = question.correct_option === oIndex;

            return (
              <div
                key={oIndex}
                className={`option-card px-2 py-1 border rounded ${
                  isCorrect ? "bg-success text-white" : ""
                }`}
                style={{ minWidth: "80px", textAlign: "center" }}
              >
                <strong>{optionLabel}.</strong> {option.option_text}
              </div>
            );
          })}
        </div>
      </div>
    ))
  ) : (
    <p>No questions found for this quiz.</p>
  )}
</div>


  )
}

export default Questions
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

        <div className="row">
          {question.options?.map((option, oIndex) => {
            const optionLabel = String.fromCharCode(65 + oIndex);
            return (
              <div
                key={oIndex}className={`col-md-3 bordered border rounded text-truncate ${option.is_correct == true?"bg-success text-white":""}`}>
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
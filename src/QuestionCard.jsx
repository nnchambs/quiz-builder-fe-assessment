import React, { Component } from 'react';


const QuestionCard = ({ questionTitle, answers, id, setScore}) => {
  const answerButtons = answers.map(a => {
    return(
      <label key={a.score}><input type="radio" value={a.score} name="answer"  />{a.title}<br></br></label>
    )
  })
  return(
  <div key={id}>
    <h3 >{questionTitle}</h3>
    <form>
      {answerButtons}
    </form>
  </div>
)}

export default QuestionCard

import React, { Component } from 'react';


const QuestionCard = ({ questionTitle, answers, id}) => {
  console.log('answers', answers)
  const answerButtons = answers.map(a => {
    return(
      <label><input type="radio" value={a.score} name="answer" />{a.title}<br></br></label>
    )
  })
  return(
  <div>
    <h3 key={id}>{questionTitle}</h3>
    <form>
      {answerButtons}
    </form>
  </div>
)}

export default QuestionCard

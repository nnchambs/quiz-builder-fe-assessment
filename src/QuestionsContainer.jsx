import React, { Component } from 'react';
import QuestionCard from './QuestionCard.jsx';


class Questions extends React.Component {
  constructor() {
    super()
  }

  render() {
    const questions = this.props.questions
    const title = questions.title
    console.log('questions', questions)
    const questionCards = questions.questions.map(m => {
      return(
        <QuestionCard
        id={m.id}
        key={m.id}
        questionTitle={m.title}
        answers ={m.answers}
        />
      )
    })
    return(
      <div>
        {title}
        {questionCards}
        <input type="submit" />
      </div>
    )
  }
}

export default Questions

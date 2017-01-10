import React, { Component } from 'react';
import QuestionCard from './QuestionCard.jsx';


class Questions extends React.Component {
  render() {
      debugger;
      const questions = this.props.questions ? this.props.questions : null
      const title = questions ? questions.title : null
      const questionCards = !questions ? <div>Loading...</div> : questions.questions.map(m => {
        return(
          <QuestionCard
          key={m.id}
          questionTitle={m.title}
          />
        )
      })
  return(
    <div>
      {title}
      {questionCards}
    </div>
  )
}
}

export default Questions

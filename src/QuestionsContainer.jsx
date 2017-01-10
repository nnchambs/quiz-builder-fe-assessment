import React, { Component } from 'react';
import QuestionCard from './QuestionCard.jsx';


class Questions extends React.Component {
  render() {
    const questions = this.props.questions ? this.props.questions : null
    const title = questions ? questions.title : null
    console.log('questions', questions)
    const questionCards = !questions ? <div>Loading quizzies, be patient...</div> : questions.questions.map(m => {
      return(
        <QuestionCard
        id={m.id}
        questionTitle={m.title}
        answers ={m.answers}
        />
      )
    })
    return(
      <div>
        {title}
          <form>
            {questionCards}
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Questions

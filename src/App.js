import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Questions from './QuestionsContainer.jsx'


class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzies: [],
    }
  }

  componentDidMount() {
    this.getQuiz();
  }

  getQuiz() {
    axios.get('/quizzes')
      .then((response) => {
        return response
      })
      .then((response) => {
        this.setState({quizzies: response})
      })
      .catch(error => console.error('Error retrieving quizzies from API', error.message))
  }

   render() {
    let quizData
    if(this.state.quizzies.data) {
      quizData = this.state.quizzies.data.quizzes[0]
    }
    return (
      <div className="App">
        <div className="App-body">
          {quizData ? <Questions questions={quizData}/> : <div>Loading quizzies, be patient...</div>}
        </div>
      </div>
    );
  }
}

export default App;

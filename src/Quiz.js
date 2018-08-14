import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {quiz_position: 1}
  }
  render() {
    const isQuizEnd = true;
    var quizDisplay;
    if(isQuizEnd){
      quizDisplay = <QuizEnd />;
    }
    else{
      quizDisplay = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>;
    }
    return (
      <div>
        {quizDisplay}
      </div>
    );
  }
}

export default Quiz;
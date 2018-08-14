import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {quiz_position: 1}
  }
  showNextQuestion() {
    this.setState = {quiz_position: quiz_position + 1}
  }
  render() {
    const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length);
    var quizDisplay;
    if(isQuizEnd){
      quizDisplay = <QuizEnd />;
    }
    else{
      quizDisplay = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />;
    }
    return (
      <div>
        {quizDisplay}
      </div>
    );
  }
}

export default Quiz;
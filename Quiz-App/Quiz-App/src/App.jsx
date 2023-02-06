import { useState } from 'react'
import './App.css'

function App() {
  

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        {answerText: 'New York', isCorrect: false},
        {answerText: 'London', isCorrect: false},
        {answerText: 'Paris', isCorrect: true},
        {answerText: 'Dublin', isCorrect: false},
      ],
    },

    {
      questionText: "What is the capital of Philippines?",
      answerOptions: [
        {answerText: 'Pasig', isCorrect: false},
        {answerText: 'Manila', isCorrect: true},
        {answerText: 'Davao', isCorrect: false},
        {answerText: 'Cebu', isCorrect: false},
      ],
    },

    {
      questionText: "What is the chemical bond of water?",
      answerOptions: [
        {answerText: 'NaCl', isCorrect: false},
        {answerText: 'Fe', isCorrect: false},
        {answerText: 'H2O', isCorrect: true},
        {answerText: 'Au', isCorrect: false},
      ],
    },

    {
      questionText: "What is the latin word of Gold?",
      answerOptions: [
        {answerText: 'Aurum', isCorrect: true},
        {answerText: 'Berilium', isCorrect: false},
        {answerText: 'Potassium', isCorrect: false},
        {answerText: 'Argon', isCorrect: false},
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  function handleAnswerClick(isCorrect) {
    if (isCorrect === true){
      setScore(score + 1)
    }
  
    const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true)
    }
  }

  return (
    <div className="app">
      {showScore ? (<div className="score-section">
        Your scored {score} out of {questions.length} questions.
      </div>) : (
    
    <>
      <div className="question-section">
        <div className="question-count">
          <span>question {currentQuestion + 1}/ {questions.length}</span>
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>

      <div className="anser-section">
        {questions[currentQuestion].answerOptions.map((answerOptions) => (
          <button onClick={() => handleAnswerClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
        ))}
      </div>
    </>
  )}
  </div>
  )
}

export default App

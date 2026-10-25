import { useState } from "react";
import questions from "./data/questions";
import Start from "./components/Start";
import Question from "./components/Question";
import QuizProgress from "./components/QuizProgress";
import Result from "./components/Result";
import "./App.css";
import Question from "./components/Questions";
import QuizProgress from "./components/Quizprogress";

function App() {
  const [stage, setStage] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  function handleStart() {
    setStage("quiz");
  }

  function handleSelect(index) {
    setSelected(index);
  }

  function handleNext() {
    // check if the answer is right
    if (selected === currentQuestion.answer) {
      setScore(score + 1);
    }

    // last question? show the result
    if (currentIndex + 1 === questions.length) {
      setStage("result");
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setStage("start");
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
  }

  return (
    <div className="app">
      {stage === "start" && (
        <Start total={questions.length} onStart={handleStart} />
      )}

      {stage === "quiz" && (
        <div>
          <QuizProgress current={currentIndex + 1} total={questions.length} />
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            selected={selected}
            onSelect={handleSelect}
          />
          <button
            className="main-btn"
            onClick={handleNext}
            disabled={selected === null}
          >
            {currentIndex + 1 === questions.length ? "Finish" : "Next Question"}
          </button>
        </div>
      )}

      {stage === "result" && (
        <Result
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
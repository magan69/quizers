function Result(props) {
  const wrong = props.total - props.score;
  const percent = (props.score / props.total) * 100;

  // pick a message based on the score
  let message = "";
  if (percent >= 80) {
    message = "Excellent work!";
  } else if (percent >= 50) {
    message = "Good job, keep practicing!";
  } else {
    message = "Don't give up, try again!";
  }

  return (
    <div>
      <h1>Your Result</h1>
      <p>Score: {props.score} / {props.total}</p>
      <p>Correct: {props.score}</p>
      <p>Incorrect: {wrong}</p>
      <h2>{message}</h2>
      <button className="main-btn" onClick={props.onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
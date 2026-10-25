function QuizProgress(props) {
  return (
    <div>
      <p>Question {props.current} / {props.total}</p>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: (props.current / props.total) * 100 + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default QuizProgress;
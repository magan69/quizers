function Start(props) {
  return (
    <div>
      <h1>Quiz App</h1>
      <p>Test your React and web development knowledge.</p>
      <p>Total questions: {props.total}</p>
      <button className="main-btn" onClick={props.onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default Start;
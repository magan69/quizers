function Option(props) {
  return (
    <button
      className={props.isSelected ? "option selected" : "option"}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Option;

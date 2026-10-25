import Option from "./Option";

function Question(props) {
  return (
    <div>
      <h2>{props.question}</h2>
      <div className="options">
        {props.options.map((text, index) => (
          <Option
            key={text}
            text={text}
            isSelected={props.selected === index}
            onClick={() => props.onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
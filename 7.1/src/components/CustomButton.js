import "./style.css";

function CustomButton(props) {
  return (
    <>
      <button
        onClick={() => {
          props.setColorName(props.color);
        }}
        className={"cus-btn " + props.color}
      >
        {props.color}
      </button>
    </>
  );
}

export default CustomButton;

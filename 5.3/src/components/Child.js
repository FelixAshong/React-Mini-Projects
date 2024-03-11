import Balloon from "./Balloon";
import "./style.css";

const Child = (props) => {
  return (
    <>
      {props.children}
      <Balloon color={props.color} />
    </>
  );
};

export default Child;

import "./style.css";

const Balloon = ({ color }) => {
  return <div className={"balloon-wrapper " + color}></div>;
};
export default Balloon;

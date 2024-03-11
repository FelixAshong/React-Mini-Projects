const Box = ({ size, left }) => {
  return (
    <div className="slider" style={{ 'height': 30 * size + "px" }}>
      <div className="box" style={{ 'height': 30 * size + "px" ,'width': 30 * size + "px", 'left': left+'px'}}></div>
    </div>
  );
};

export default Box;

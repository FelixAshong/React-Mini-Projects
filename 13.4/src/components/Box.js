const Box = ({ className , degree }) => {
  return (
      <div className={`box ${className}`} style={{ 'transform': 'rotate('+degree+'deg)'}}>Spining</div>
  );
};

export default Box;

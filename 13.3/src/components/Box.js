const Box = ({ className , color }) => {
  return (
      <div className={`box ${className}`} style={{ 'backgroundColor': color}}></div>
  );
};

export default Box;

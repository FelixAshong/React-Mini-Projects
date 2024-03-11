import "./style.css";

const Names = ({ names }) => {
  return (
    <>
    <h2>All people in the database:</h2>
      {names.map((name,index) => (
        <h3 key={100+index}>Name: {name}</h3>
      ))}
    </>
  );
};

export default Names;

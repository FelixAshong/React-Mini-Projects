import "./App.css";
function App() {
  let dataStr ='';
  const data = ["hello", "world"];
  data.forEach(word => {
    dataStr += word.charAt(0).toUpperCase() + word.slice(1)+' ';
  });
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";

  return (
    <div className="App">
      <h2>A:</h2>
      <p>{dataStr}</p>
      <h2>B:</h2>
      <p>
        {number1} + {number2} = {number1 + number2}
      </p>
      <h2>C:</h2>
      <p>length is: {string.length}</p>
    </div>
  );
}

export default App;

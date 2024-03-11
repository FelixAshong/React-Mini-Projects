import Card from "./components/Card";




function App() {
  const cardInfo = [
    {
      description: "Random description 1",
      title: "A random Title 1",
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      link1: "https://github.com/eladjmc/Mincraft-Game",
      link2: "https://github.com/eladjmc/Mincraft-Game"
    },
    {
      description: "Random description 2",
      title: "A random Title 2",
      imgUrl: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
      link1: "https://github.com/eladjmc/dice-game",
      link2: "https://github.com/eladjmc/dice-game"
    },
    {
      description: "Random description 3",
      title: "A random Title 3",
      imgUrl: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
      link1: "https://elad-personal.netlify.app/",
      link2: "https://elad-personal.netlify.app/"
    }
  ]
  return (
    <div className="App">
      <Card data={cardInfo[0]} />
      <Card data={cardInfo[1]} />
      <Card data={cardInfo[2]} />
    </div>

  );
}

export default App;

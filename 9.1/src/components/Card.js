import "./style.css";

const Card = (props) => {
  const getFoodAsString = (meatsArray) => {
    console.log('blablbablablablablalbalblabalbal',meatsArray);
    const meatsString = meatsArray.join(" ");
    return meatsString;
  };
  return (
    <>
      <div className="card">
        <h3>Details:</h3>
        <span>Name: {props.person.name}</span>
        <span>Birthday: {props.person.birthday}</span>
        <h4>Favorite foods:</h4>
        <span>Meats: {getFoodAsString(props.person.favoriteFoods.meats)}</span>
        <span>fish: {getFoodAsString(props.person.favoriteFoods.fish)}</span>
      </div>
    </>
  );
};

export default Card;

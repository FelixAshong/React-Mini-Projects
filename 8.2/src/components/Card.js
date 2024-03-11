import "./style.css";
import Topping from './Topping';

const Card = ({turtle , toppingClicked}) => {
  return (
    <>
      <div className="card">
        <h3>{turtle.name}</h3>
        <img src={turtle.image} alt="" />
        <h3>Toppings:</h3>
        <div className="toppings">
        {turtle.toppings.map((topping,index)=>{
            return <Topping toppingClicked={toppingClicked} key={1000+index+turtle.id} topping={topping}/>
        })}
        </div>
      </div>
    </>
  );
};

export default Card;

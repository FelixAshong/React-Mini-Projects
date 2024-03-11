import './style.css'

const OrderedItem = ({ toppings }) => {
  return (
    <div className="ordered-item">
      {toppings.map((topping, index) => {
        return (
          <div key={index}>
            <h3>{topping.name}</h3>
            <img width={100} height={100} src={topping.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default OrderedItem;

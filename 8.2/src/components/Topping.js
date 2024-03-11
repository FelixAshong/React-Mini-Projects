import "./style.css";




const Topping = ({topping, toppingClicked}) => {
    const handleClickOnButton = () => {
        console.log(topping,'clicked');
        toppingClicked(topping);
    }

  return <>
  <button onClick={handleClickOnButton}>{topping}</button>
  </>;
};
export default Topping;

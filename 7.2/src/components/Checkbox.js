import { useState } from "react";

const Checkbox = (props) => {
    const handleChange = () => {
        console.log(`Checkbox: ${props.index} changed to ${!isChecked}`);
        setIsChecked(!isChecked);
    }

    const [isChecked,setIsChecked] = useState(props.checked);
  return (
    <>
      <label>
        <input type="checkbox"  checked={isChecked} onChange={handleChange} />
        {props.text}
      </label>
    </>
  );
};

export default Checkbox;

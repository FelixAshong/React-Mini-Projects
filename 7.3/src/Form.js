import { useState } from 'react';
import React from 'react'
import './Form.css';

const Form = (props) => {

  const [submitted, setSubmitted] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <>
      <form className='form' onSubmit={(e) => handlerSubmit(e)}>
        First Name:
        <input onChange={(e) => props.handlerFirstName(e.target.value)}/><br/>
        Last Name:
        <input onChange={(e) => props.handlerLastName(e.target.value)}/><br/>
        Age
        <select onChange={(e) => props.handlerSetAge(e.target.selectedOptions[0].label)}>
          <option value="0-15">0-15</option>
          <option value="16-30">16-30</option>
          <option value="31-50">31-50</option>
          <option value="51-70">51-70</option>
          <option value="71-120">71-120</option>
        </select><br/>
        <textarea  onChange={(e) => props.handlerSetText(e.target.value)}/><br/>
        <input type='submit'/>
        
      </form>
      {submitted && (
            <div className='form-conformation'>
              <p>{props.firstName}</p>
              <p>{props.lastName}</p>
              <p>{props.age}</p>
              <p>{props.text}</p>
              <div className='buttons'>
                <button>send</button>
                <button>reset</button>
              </div>
            </div>
          )}
      </>
  )
}

export default Form
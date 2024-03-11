import './App.css';
import { useState } from 'react';
import Form from './Form';

function App() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [age, setAge] = useState('0-15');
const [text, setText] = useState('');

console.log('firstName= ', firstName);
console.log('lastName= ', lastName);
console.log('age= ', age);
console.log('textArea= ', text);
  return (
    <div className='./App.css'>
      <Form 
        age={age}
        firstName={firstName}
        lastName={lastName}
        text={text}
        handlerSetAge={setAge}
        handlerSetText={setText}
        handlerLastName={setLastName}
        handlerFirstName={setFirstName}
      />
    </div>
    
  );
}

export default App;

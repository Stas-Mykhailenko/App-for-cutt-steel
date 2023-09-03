import {useState} from 'react';
import {increment} from "../../features/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux'

function NameInput() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch() 
  const handleChange = event => {
    setMessage(event.target.value);
  };
  console.log('value is:', message);
	return (
<div className='input-container'>
      <h1 className='input-label'>Наименование профиля:</h1>
      <input
        className='input-field'
        type='text'
        step='any'
        placeholder="Введите название профиля..."
        required
        onBlur={() => dispatch(increment(message))}
        onChange={handleChange}
        value={message}
      />
    </div>
	);
 }
 
 export default NameInput;
 
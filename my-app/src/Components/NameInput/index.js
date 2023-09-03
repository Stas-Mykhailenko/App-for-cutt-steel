import {useState} from 'react';


function NameInput() {
  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };
    
	return (
<div className='input-container'>
      <h1 className='input-label'>Наименование профиля:</h1>
      <input
        className='input-field'
        type='text'
        step='any'
        placeholder="Введите название профиля..."
        required
        onChange={handleChange}
        value={message}
      />
    </div>
	);
 }
 
 export default NameInput;
 
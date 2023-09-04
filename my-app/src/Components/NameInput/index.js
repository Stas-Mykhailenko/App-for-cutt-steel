// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getValue, increment } from "../../features/counter/counterSlice";

function NameInput({ message, setMessage }) {
  // const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const f = useSelector(getValue);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  console.log("value is:", message);
  const onBlur = () => dispatch(increment(message));

  return (
    <div className="input-container">
      <h1 className="input-label">Наименование профиля:{f}</h1>
      <input
        required
        step="any"
        type="text"
        onBlur={onBlur}
        value={message}
        onChange={handleChange}
        className="input-field"
        placeholder="Введите название профиля..."
      />
    </div>
  );
}

export default NameInput;

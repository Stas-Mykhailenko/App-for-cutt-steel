function InputSizeCustom({ InputSizeCustomValue, setInputSizeCustomValue }) {
  const handleChange = (event) => {
    setInputSizeCustomValue(event.target.value);
  };
  console.log("value is:", InputSizeCustomValue);

  return (
    <div className="input-container">
      <h1 className="input-label">
        Введите размер заготовки в мм по умолчанию:
      </h1>
      <input
        required
        step="any"
        type="number"
        onChange={handleChange}
        className="input-field"
        placeholder="Размер в мм..."
        value={InputSizeCustomValue}
      />
    </div>
  );
}

export default InputSizeCustom;

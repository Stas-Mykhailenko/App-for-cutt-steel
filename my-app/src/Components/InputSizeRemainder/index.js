function InputSizeRemainder({
  InputSizeRemainderValue,
  setInputSizeRemainderValue,
}) {
  const handleChange = (event) => {
    setInputSizeRemainderValue(event.target.value);
  };

  return (
    <div className="input-container">
      <h1 className="input-label">Задать остаток в мм:</h1>
      <input
        required
        step="any"
        type="number"
        value={InputSizeRemainderValue}
        onChange={handleChange}
        className="input-field"
        placeholder="Введите название профиля..."
      />
    </div>
  );
}

export default InputSizeRemainder;

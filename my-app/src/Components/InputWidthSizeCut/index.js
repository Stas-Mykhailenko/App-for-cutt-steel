function InputWidthSizeCut({
  InputWidthSizeCutValue,
  setInputWidthSizeCutValue,
}) {
  const handleChange = (event) => {
    setInputWidthSizeCutValue(event.target.value);
  };

  return (
    <div className="input-container">
      <h1 className="input-label">Наименование профиля:</h1>
      <input
        required
        step="any"
        type="text"
        value={InputWidthSizeCutValue}
        onChange={handleChange}
        className="input-field"
        placeholder="Введите название профиля..."
      />
    </div>
  );
}

export default InputWidthSizeCut;

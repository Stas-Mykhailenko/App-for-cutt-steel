function NameInput({ nameInputValue, setNameInputValue }) {
  const handleChange = (event) => {
    setNameInputValue(event.target.value);
  };

  return (
    <div className="input-container">
      <h1 className="input-label">Наименование профиля:</h1>
      <input
        required
        step="any"
        type="text"
        value={nameInputValue}
        onChange={handleChange}
        className="input-field"
        placeholder="Введите название профиля..."
      />
    </div>
  );
}

export default NameInput;

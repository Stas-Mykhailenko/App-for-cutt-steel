function InputSizeCustom (){
	return (
<div class="input-container">
      <h1 class="input-label">Введите размер заготовки по умолчанию:</h1>
      <input
        class="input-field"
        type="number"
        step="any"
        placeholder="Размер в мм..."
        required
      />
    </div>
	)
}

export default InputSizeCustom
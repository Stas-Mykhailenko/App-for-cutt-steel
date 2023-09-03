
function InputSizeRemainder (){
	return (
<div className="input-container">
      <h1 className="input-label">Размер остатка:</h1>
      <input
        className="input-field"
        type="number"
        step="any"
        placeholder="Размер в мм..."
        required
      />
    </div>
	)
}

export default InputSizeRemainder
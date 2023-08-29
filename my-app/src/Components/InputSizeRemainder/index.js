import '../InputSizeRemainder/style.css'
function InputSizeRemainder (){
	return (
<form className ="form">
<label>
  Минимальный остаток при порезке мм:
  <input className="input" type="number" name="name" />
</label>
</form>
	)
}

export default InputSizeRemainder
import * as XLSX from "xlsx";

function DownloadSizeForCutingButton({
  hiddenFileInput,
  isValueExelForCuting,
  setIsValueExelForCuting,
}) {
  const handleChange = (e) => {
    e.preventDefault();

    var files = e.target.files,
      f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];
      // const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setIsValueExelForCuting(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(f);
  };
  console.log(isValueExelForCuting);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleChange} // ADDED
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <input
        className="submit-button btn-film"
        onClick={handleClick}
        type="button"
        value="Загрузить список отрезков Exel"
      />
    </div>
  );
}

export default DownloadSizeForCutingButton;

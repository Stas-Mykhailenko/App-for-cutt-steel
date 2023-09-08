import * as XLSX from "xlsx";
import React, { useRef } from "react";

function DownloadExelSizeButton({ isValueExelSize, setIsValueExelSize }) {
  const hiddenFileInput = useRef(null);

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
      setIsValueExelSize(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(f);
  };
  console.log(isValueExelSize);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <input
        type="button"
        onClick={handleClick}
        className="submit-button btn-film"
        value="Загрузить остаток со склада Exel"
      />
    </div>
  );
}
export default DownloadExelSizeButton;

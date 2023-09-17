import React from "react";
import * as Filesaver from "file-saver";
import XLSX from "sheetjs-style";
import moment from "moment";
// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function UploadExelButton() {
  const dataSet1 = [
    {
      Заготовка: "6 m",
      nameSecondColum: "64x40",
      nameThirdColum: "2 шт",
      nameFouthColum: "300 mm",
    },
    {
      nameFirstColum: "6 m",
      nameSecondColum: "64x40",
      nameThirdColum: "2 шт",
      nameFouthColum: "300 mm",
    },
    {
      nameFirstColum: "6 m",
      nameSecondColum: "64x40",
      nameThirdColum: "2 шт",
      nameFouthColum: "300 mm",
    },
    {
      nameFirstColum: "6 m",
      nameSecondColum: "64x40",
      nameThirdColum: "2 шт",
      nameFouthColum: "300 mm",
    },
  ];

  const fileType =
    "applicaction/vnd.openxlmformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = moment().format("ll LT");
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(dataSet1);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const exelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([exelBuffer], { type: fileType });
    Filesaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div>
      <input
        className="submit-button btn-film"
        type="button"
        value="Скачать список остатков Exel"
        onClick={(e) => exportToExcel(fileName)}
      />
    </div>
  );
}
export default UploadExelButton;

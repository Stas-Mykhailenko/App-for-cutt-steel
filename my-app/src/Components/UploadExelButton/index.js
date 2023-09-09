import React from "react";
// import ReactExport from "react-data-export";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function UploadExelButton() {
  // const dataSet1 = [
  //   {
  //     nameFirstColum: "6 m",
  //     nameSecondColum: "64x40",
  //     nameThirdColum: "2 шт",
  //     nameFouthColum: "300 mm",
  //   },
  //   {
  //     nameFirstColum: "6 m",
  //     nameSecondColum: "64x40",
  //     nameThirdColum: "2 шт",
  //     nameFouthColum: "300 mm",
  //   },
  //   {
  //     nameFirstColum: "6 m",
  //     nameSecondColum: "64x40",
  //     nameThirdColum: "2 шт",
  //     nameFouthColum: "300 mm",
  //   },
  //   {
  //     nameFirstColum: "6 m",
  //     nameSecondColum: "64x40",
  //     nameThirdColum: "2 шт",
  //     nameFouthColum: "300 mm",
  //   },
  // ];

  return (
    <div>
      {/* <ExcelFile
        element={
          <input
            className="submit-button btn-film"
            type="button"
            value="Скачать раскрой порезки металла Exel"
          />
        }
      >
        <ExcelSheet data={dataSet1} name="Employees">
          <ExcelColumn nameFirstColum="Name" value="name" />
          <ExcelColumn label="Wallet Money" value="amount" />
          <ExcelColumn label="Gender" value="sex" />
          <ExcelColumn label="Gender" value="sex" />
          <ExcelColumn
            label="Marital Status"
            value={(col) => (col.is_married ? "Married" : "Single")}
          />
        </ExcelSheet>
      </ExcelFile> */}
    </div>
  );
}
export default UploadExelButton;

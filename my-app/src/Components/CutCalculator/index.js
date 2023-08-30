import React from "react";

import "../CutCalculator/style.css";
import InputWidthSizeCut from "../InputWidthSizeCut/index.js";
import InputSizeCustom from "../InputSizeCustom/index.js";
import InputSizeRemainder from "../InputSizeRemainder/index.js";
import NameInput from "../NameInput/index.js";
import DownloadExelSizeButton from "../DownloadExelSizeButton/index.js";
import DownloadSizeForCutingButton from "../DownloadSizeForCutingButton/index.js";
import ShowResultButton from "../ShowResultButton/index.js";
import UploadExelButton from "../UploadExelButton/index.js";
import UploadExelSizeButton from "../UploadExelSizeButton/index.js";
import WindowResult from "../WindowResult/index.js";
function CutCalculator() {
  return (
    <div>
      <h1 className="body_titel">Раскрой порезки металла</h1>
      <div className="box">
        <div className="box_input">
          <NameInput />
          <InputSizeCustom />
          <InputWidthSizeCut />
          <InputSizeRemainder />
        </div>
        <div className="box_button">
          <DownloadExelSizeButton />
          <DownloadSizeForCutingButton />
          <UploadExelButton />
          <UploadExelSizeButton />
          <ShowResultButton />
        </div>
        <div className="box_result">
          <h2 className="result_title"> Эфективность раскроя металла</h2>
          <WindowResult />
        </div>
      </div>
    </div>
  );
}
export default CutCalculator;

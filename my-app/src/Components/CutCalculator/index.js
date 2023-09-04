import React, { useState } from "react";

import InputWidthSizeCut from "../InputWidthSizeCut";
import InputSizeRemainder from "../InputSizeRemainder";
import InputSizeCustom from "../InputSizeCustom";
import NameInput from "../NameInput";
import DownloadExelSizeButton from "../DownloadExelSizeButton";
import DownloadSizeForCutingButton from "../DownloadSizeForCutingButton";
import ShowResultButton from "../ShowResultButton";
import UploadExelButton from "../UploadExelButton";
import UploadExelSizeButton from "../UploadExelSizeButton";
import WindowResult from "../WindowResult";

import "../CutCalculator/style.css";

function CutCalculator() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1 className="body_titel">Раскрой порезки металла</h1>
      <div className="box">
        <div className="box_input">
          <NameInput message={message} setMessage={setMessage} />
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

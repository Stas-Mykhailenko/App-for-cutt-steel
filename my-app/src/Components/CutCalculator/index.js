import React, { useState, useRef } from "react";

import { NameInput } from "../NameInput";
import WindowResult from "../WindowResult";
import InputSizeCustom from "../InputSizeCustom";
import ShowResultButton from "../ShowResultButton";
import UploadExelButton from "../UploadExelButton";
import InputWidthSizeCut from "../InputWidthSizeCut";
import InputSizeRemainder from "../InputSizeRemainder";
import UploadExelSizeButton from "../UploadExelSizeButton";
import DownloadExelSizeButton from "../DownloadExelSizeButton";
import DownloadSizeForCutingButton from "../DownloadSizeForCutingButton";

import "../CutCalculator/style.css";

function CutCalculator() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [isValueExelForCuting, setIsValueExelForCuting] = useState("");
  const [InputSizeCustomValue, setInputSizeCustomValue] = useState("");
  const [InputWidthSizeCutValue, setInputWidthSizeCutValue] = useState("");
  const [InputSizeRemainderValue, setInputSizeRemainderValue] = useState("");

  const hiddenFileInput = useRef(null);

  return (
    <div>
      <h1 className="body_titel">Раскрой порезки металла</h1>
      <div className="box">
        <div className="box_input">
          <NameInput
            nameInputValue={nameInputValue}
            setNameInputValue={setNameInputValue}
          />
          <InputSizeCustom
            InputSizeCustomValue={InputSizeCustomValue}
            setInputSizeCustomValue={setInputSizeCustomValue}
          />
          <InputSizeRemainder
            InputSizeRemainderValue={InputSizeRemainderValue}
            setInputSizeRemainderValue={setInputSizeRemainderValue}
          />
          <InputWidthSizeCut
            InputWidthSizeCutValue={InputWidthSizeCutValue}
            setInputWidthSizeCutValue={setInputWidthSizeCutValue}
          />
        </div>

        <div className="box_button">
          <DownloadExelSizeButton />
          <DownloadSizeForCutingButton
            hiddenFileInput={hiddenFileInput}
            isValueExelForCuting={isValueExelForCuting}
            setIsValueExelForCuting={setIsValueExelForCuting}
          />
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

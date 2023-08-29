import React from "react";

import "../CutCalculator/style.css";
import InputWidthSizeCut from "../InputWidthSizeCut/index.js";
import InputSizeCustom from "../InputSizeCustom/index.js";
import InputSizeRemainder from "../InputSizeRemainder/index.js";
import NameInput from "../NameInput/index.js";
function CutCalculator() {
  return (
    <div className="body">
      <h1 className="body_titel">Раскрой порезки металла</h1>
      <div className="box_input">
        <InputWidthSizeCut />
        <InputSizeCustom />
        <InputSizeRemainder />
        <NameInput />
      </div>
      <div>
        
      </div>
    </div>
  );
}
export default CutCalculator;

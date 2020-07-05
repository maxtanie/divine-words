import React from "react";
import "./HeaderContent.scss";
import Button from "./Button/Button";

const HeaderContent = ({ titleWebsite, txtInfos }) => {
  const urlVid = "https://youtube.com/watch?v=47orBokt6Es";
  
  return (
    <div className="absolute-center" id="header-content">
      <div className="title-website uppercase white-col">{titleWebsite}</div>
      <p className="txt-infos roboto-light white-col auto">{txtInfos}</p>
      <Button urlVideo={urlVid}/>
    </div>
  );
};

export default HeaderContent;

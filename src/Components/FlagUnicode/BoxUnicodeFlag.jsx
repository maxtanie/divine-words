import React from "react";

const BoxUnicodeFlag = ({country}) => {
  return (
    <div className="box-flag-and-unicode">
      <h2 className="country-name">{country.name}</h2>
      <div className="absolute-content">
        <div
          className="block-img"
          style={{ backgroundImage: `url('${country.flag}')` }}
        ></div>
      </div>

      <h5 className="unicode">{country.dial_code}</h5>
    </div>
  );
};

export default BoxUnicodeFlag;

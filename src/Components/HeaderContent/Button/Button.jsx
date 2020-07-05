import React from "react";

import "./Button.scss";

const Button = ({urlVideo}) => {
  return (
    <a href={`${urlVideo}`} className="btn auto blue-col uppercase bold" target="_blank">
      <div className="content">Voir la video</div>
    </a>
  );
};

export default Button;

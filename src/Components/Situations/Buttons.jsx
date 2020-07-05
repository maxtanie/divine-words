import React, { Component } from "react";
import "./Buttons.scss";

export default class Buttons extends Component {
  render() {
    const { filterItemsBtn, filterName } = this.props;
    return (
      <div className="block-buttons">
        <button className="btns-filter" onClick={filterItemsBtn}>
          {filterName}
        </button>
      </div>
    );
  }
}

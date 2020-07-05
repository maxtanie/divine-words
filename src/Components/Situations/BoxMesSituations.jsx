import React, { Component } from "react";
import "./BoxMesSituations.scss";

export default class BoxMesSituations extends Component {
  render() {
    const {
      image,
      alt,
      heightCard,
      verseName,
      verse,
      filterItem,
      nameSituations,
      nameItemsSituations
    } = this.props;

    const changeHeiht = {
      height: `${heightCard}px`
    };

    return (
      <div
        className={`flip-card filter-item  ${filterItem}`}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="block-img">
              <img src={image} alt={alt} />
            </div>
            <div className="block-verses">
              <q className="verses-name">{verseName}</q>
              <div className="verses">{verse}</div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="content-absolute-center absolute-center border-space-yellow">
              <div className="content absolute-center">
                <h3 className="name-situations">
                  {nameSituations}
                </h3>
                <p className="items-name-situations">{nameItemsSituations}</p>
              </div>
            </div>
            <div className="block-read-more bottom-read-more">
              
              <a
                href={`/mes-situations/${nameSituations
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
                className="read-more"
              >
                Lire plus <i class="fas fa-caret-right caret-more"></i>
              </a>
            </div>
            <div className="block-read-more">
              
              <a
                href={`/mes-situations/${nameSituations
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
                className="read-more"
              >
                Lire plus <i class="fas fa-caret-right caret-more"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

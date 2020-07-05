import React, { Component, useState, useEffect } from "react";
import Isotope from "isotope-layout";

import "./SituationsPage.scss";
import BlockInfosMesSituations from "./BlockInfosMesSituations";
import Buttons from "./Buttons";
import BoxMesSituations from "./BoxMesSituations";
import peur from "../../data/MesSituations/BoxData/peur.json";
import timidite from "../../data/MesSituations/BoxData/timidite.json";

// const data = peur.concat(timidite);
const data = peur;

export default class SituationsPage extends Component {
  state = {
    // name: [
    //   "Tout",
    //   "Peur",
    //   "Timidité",
    //   "Foi",
    //   "Maladie",
    //   "Dépression",
    //   "Sagesse",
    //   "Travail",
    //   "Jésus",
    //   "Péché",
    //   "Addictions",
    //   "Enfants"
    // ],
    // filterName: [
    //   "*",
    //   "peur",
    //   "timidité",
    //   "foi",
    //   "maladie",
    //   "dépression",
    //   "sagesse",
    //   "travail",
    //   "jésus",
    //   "péché",
    //   "addictions",
    //   "enfants"
    // ]

       name: [
      "Tout",
      "Peur",
      "Jésus",
    ],
    filterName: [
      "*",
      "peur",
      "jésus",
    ]
  };

  componentDidMount() {
    document.getElementById("body").className = "blue-bg";
  }

  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  render() {
    const { name, filterName } = this.state;

    return (
      <section id="mes-situations" className="container-mes-situations">
        <div className="content-mes-situations border-space">
          {/* <BlockInfosMesSituations />
          <Buttons />
          <BoxMesSituations /> */}

          <IsotopeReact name={name} filterName={filterName} />
        </div>
      </section>
    );
  }
}

const IsotopeReact = ({ name, filterName }) => {
  // initialize an Isotope object with configs
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".grid-creations", {
        itemSelector: ".filter-item"

        // layoutMode: "fitRows"
      })
      // layout mode options
    );
  }, []);

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const vals = data.map((info, index) => {
    return (
      <BoxMesSituations
        key={index}
        image={info.imgUrl}
        heightCard={info.heightVal}
        verseName={info.nameVerse}
        filterItem={info.nameItemsSituations}
        verse={info.verse}
        nameSituations={info.nameS}
        nameItemsSituations={info.nameItemsSituations}
      />
    );
  });

  return (
    <React.Fragment>
      <BlockInfosMesSituations />
      <div className="flex space-between">
        {filterName.map((list, index) => {
          return (
            <div className="absolute-btn-creation">
              <Buttons
                key={index}
                filterName={name[index]}
                filterItemsBtn={() => setFilterKey(list)}
              ></Buttons>
            </div>
          );
        })}
      </div>

      <div className="grid-creations">{vals}</div>
    </React.Fragment>
  );
};

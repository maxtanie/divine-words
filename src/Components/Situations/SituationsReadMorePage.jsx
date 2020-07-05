import React, { Component } from "react";
import "./SituationsReadMorePage.scss";
import peur from "../../data/MesSituations/LirePlusData/peur.json";
import timidite from "../../data/MesSituations/LirePlusData/timidite.json";
import BoxSituationsReadMorePage from "./BoxSituationsReadMorePage";
import SlidesQuotes from "./SlidesQuotes";
import ContentArticles from "./ContentArticles";

const data = peur;

export default class SituationsReadMorePage extends Component {
  componentDidMount() {
    document.getElementById("body").className = "orange-bg";
  }

  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  render() {
    const matchUrl = this.props.match.params.id;
    const valsData = data.map((vals) => {
      return vals.descriptionsHeaderArticle.name;
    })
    const showData = () => {
      return data.map((vals, index) => {
        const names = vals.descriptionsHeaderArticle.name
        .toLowerCase()
        .split(" ")
        .join("-");
        const dataName = valsData;  
        const propsData = this.props;

        if (matchUrl === names) {
          return (
            <React.Fragment>
              <BoxSituationsReadMorePage
                key={index}
                title={vals.descriptionsHeaderArticle.title}
                crName={dataName}
                prop={propsData}
                id={index+1}
                items={vals.descriptionsHeaderArticle.items}
                dataLength={data.length}
                minutesRead={vals.descriptionsHeaderArticle.minRead}
              >
                <SlidesQuotes key={index} arrayVers={vals.versesArray}/>
                <ContentArticles key={index} dataArticles={vals.articles} descriptionHeaderName={vals.descriptionsHeaderArticle.nameInfosComplementaire}/>
              </BoxSituationsReadMorePage>
            </React.Fragment>
          );
        }
      });
    };
    return <div className="container-mes-situations-read-more">
    {showData()}
    
    </div>;
  }
}

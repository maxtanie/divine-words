import React, { Component } from "react";
import "./FlagUnicode.scss";

export default class FlagUnicode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/maxtanie/unicode-and-flag-api/master/unicode-and-flag-api.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data }));

    document.getElementById("body").className = "red-bg";
  }

  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  onChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  renderCountry = country => {
    const { search } = this.state;

    if (
      search !== "" &&
      country.name.toLowerCase().indexOf(search) === -1 &&
      country.dial_code.toLowerCase().indexOf(search) === -1
    ) {
      return null;
    }
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
  render() {
    const { data, search } = this.state;

    const filteredCountries = data.filter((country, index) => {
      return (
        country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        // country.name.match(country.name.toUpperCase()) ||
        // country.name.match(country.name.toUpperCase() === country.name) ||
        country.name[0].toUpperCase().indexOf(search[0].toUpperCase()) !== -1 ||
        country.dial_code.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    // const dataFetch = data.map(el => {
    //   return (
    //     <div className="box-flag-and-unicode">
    //       <h2 className="country-name">{el.name}</h2>
    //       <img src={el.flag} alt="" className="img-flag" />
    //       <h5 className="unicode">{el.dial_code}</h5>
    //     </div>
    //   );
    // });

    console.log(search);
    return (
      <div className="container-unicode">
        <div className="block-filter-search">
          <input
            type="text"
            placeholder="Insert a country and unicode name"
            onChange={this.onChange}
          />
        </div>

        <div className="grid-4">
          {filteredCountries.map(country => {
            return this.renderCountry(country);
          })}
        </div>
      </div>
    );
  }
}

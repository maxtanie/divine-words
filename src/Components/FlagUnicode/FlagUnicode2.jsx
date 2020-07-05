import React, { Component } from "react";
import "./FlagUnicode.scss";
import BoxUnicodeFlag from "./BoxUnicodeFlag";
// import SelectForm from "./SelectForm";

export default class FlagUnicode2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: "",
      names: "France",
      langValue: ""
    };

    this.dataChange = this.dataChange.bind(this);
  }

  componentDidMount() {
    //Fetch the unicode-flag-api
    fetch(
      "https://raw.githubusercontent.com/maxtanie/unicode-and-flag-api/master/unicode-and-flag-api.json"
    )
      .then(response => response.json())

      // Update the data of the api inside my data array state
      .then(data => this.setState({ data: data }));

    document.getElementById("body").className = "red-bg";
  }

  componentWillUnmount() {
    document.getElementById("body").className = "";
  }

  dataChange(e) {
    console.log(e.target.value);
    this.setState({
      langValue: e.target.value
    });
  }

  handlerChange(e) {
    /* console.log(e.target.value); */
    this.setState({
      names: e.target.value,
      langValue: ""
    });
  }

  // Onchange the input value and keep vals from 0 to 20
  onChange = e => {
    this.setState({
      search: e.target.value.substr(0, 20)
    });
  };

  getClick = e => {
    return e.target.value;
  };

  render() {
    const { data, search, langValue, names } = this.state;

    let filteredData = data.filter(countries => {
      return countries.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="container-unicode">
        <div className="block-filter-search">
          <input
            className="input-searched"
            type="text"
            value={search}
            placeholder="Insert a country and unicode name"
            onChange={this.onChange.bind(this)}
          />

          <section className="section-form">
            <label forHTML="counties">Choose your country</label>
            <select
              onChange={this.handlerChange.bind(this)}
              name="countries"
              id="countries"
              form="countriesform"
              className="custom-select"
            >
              {data.map((vals, index) => {
                return (
                  <option
                    key={index}
                    value={vals.name}
                    className="custom-option"
                  >
                    {vals.name}
                  </option>
                );
              })}
            </select>
            {data.map((info, i) => {
              if (info.name === names) {
                return (
                  <input
                    key={i}
                    type="text"
                    value={langValue ? langValue : info.dial_code}
                    className="input-country"
                    style={{ backgroundImage: `url('${info.flag}')` }}
                    onChange={e => {
                      this.dataChange(e);
                    }}
                  />
                );
              }
            })}
          </section>

          <nav className="nav-examples-creations">
            <ul>
              <li>
                <a href="">Filter search</a>
              </li>
              <li>
                <a href="">Select form</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid-4">
          {filteredData.map((countries, index) => {
            return <BoxUnicodeFlag country={countries} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

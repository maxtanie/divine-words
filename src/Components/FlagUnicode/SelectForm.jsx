import React from "react";

const SelectForm = countries => {
  return (
    <section className="selectForm">
      <label forHTML="counties">Choose your country</label>
      <select name="countries" id="countries" form="countriesform">
        {countries.map(vals => {
          return <option value={vals.name}>{vals.name}</option>;
        })}
      </select>
    </section>
  );
};

export default SelectForm;

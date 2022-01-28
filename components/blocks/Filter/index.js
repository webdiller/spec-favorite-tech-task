import React, { useState } from "react";
import { MdSettings } from "react-icons/md";

/**
 * @param {String} name
 * @param {string} labelText
 * @returns html item
 */
const DateItem = ({ name, labelText }) => {
  return (
    <div className="filter__group">
      <label className="filter__label" htmlFor={name}>
        {labelText}:
      </label>
      <input
        type="date"
        id={name}
        name={name}
        className="filter__input"
        defaultValue="2018-07-22"
        min="1900-01-01"
        max="2022-02-01"
      />
    </div>
  );
};

/**
 * @param {String} name
 * @param {string} placeholder
 * @param {string} labelText
 * @returns html item
 */
const InputItem = ({ name, placeholder, labelText }) => {
  return (
    <div className="filter__group">
      <label className="filter__label" htmlFor={name}>
        {labelText}:
      </label>
      <input
        id={name}
        placeholder={placeholder}
        name={name}
        className="filter__input"
      />
    </div>
  );
};

export default function Filter({customStyle}) {

  const [activeForm, setActiveForm] = useState(false);
  const setActiveFormHandler = () => () => setActiveForm(prev=>!prev)

  return (
    <div style={customStyle} className="filter filter_with-margin">
      <div className="container filter__container">
        <div className="filter__title-with-icon">
          <p className="filter__title">Фильтр</p>
          <button onClick={setActiveFormHandler()} className="filter__icon-wrapper">
            <MdSettings className="filter__icon"/>
          </button>
        </div>

        <form className={activeForm ? "filter__form active" : "filter__form"}>
          <DateItem name="dateFrom" labelText="Дата от" />
          <DateItem name="dateTo" labelText="Дата до" />
          <DateItem name="dateFrom2" labelText="Дата от" />
          <DateItem name="dateTo2" labelText="Дата до" />

          <InputItem
            name="clientName"
            labelText="Имя клиента"
            placeholder="Имя клиента"
          />
          <InputItem
            name="clientPhone"
            labelText="Телефон"
            placeholder="Телефон"
          />
          <InputItem
            name="clientName2"
            labelText="Имя клиента"
            placeholder="Имя клиента"
          />
          <InputItem
            name="clientPhone2"
            labelText="Телефон"
            placeholder="Телефон"
          />
        </form>
      </div>
    </div>
  );
}

import React from "react";
import "./styles.scss";

export default function SearchField(props) {
  return (
    <form className="search-field-container" onSubmit={props.submitHandler}>
      <input
        className="search-field-container__input"
        type="text"
        placeholder=" Search for any IP address or domain"
        onChange={(event) => {
          props.setApiUserInputRequestCopy(event.target.value);
        }}
      />

      <input
        className="search-field-container__submit"
        type="submit"
        value=""
      />
    </form>
  );
}

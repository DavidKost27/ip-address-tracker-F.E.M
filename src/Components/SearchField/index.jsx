import React from 'react';
import "./styles.scss";

export default function SearchField() {
    return (
        
     <div className="search-field-container">

       <input className="search-field-container__input" type="text" 
        placeholder=" Search for any IP address or domain"/>

       <input className="search-field-container__submit" type="submit" value=""/>

     </div>
      
    )
}

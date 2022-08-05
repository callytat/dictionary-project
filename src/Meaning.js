import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.defintion.map(function (defintion, index) {
        return (
          <div key={index}>
            <p>
              {defintion.definition}
              <br />
              <em>{defintion.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

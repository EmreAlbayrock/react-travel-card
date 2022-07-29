import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={`${props.image}`} alt="" />
      <div className="card-info-container">
        <span className="card-location">{props.location} </span>
        <span>
          <a
            className="google-maps-link"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </span>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

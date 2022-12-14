import React from "react";
import "./DetailsPage.css";

const DetailsPage = (props) => {
  return (
    <section className="details-container">
      <div className="details-main">
        <div className="details-img-container">
          <img
            className="details-img"
            src={
              props.data?.image?.original
                ? props.data?.image?.original
                : `https://i.imgur.com/Z2MYNbj.png`
            }
            alt=""
          />
        </div>
        <div className="details-text">
          <h2 className="details-title">{props.data?.name}</h2>
          <div className="details-genre">
            {props.data?.genres.map((el, i) => {
              return <div key={`q` + i}>{el}</div>;
            })}
          </div>
          <div
            className="details-description"
            dangerouslySetInnerHTML={{ __html: props.data?.summary }}
          ></div>
        </div>
      </div>
      <div className="details-cast">
        <div className="cast-header">
          <h3>Cast</h3>
          <div className="cast-display">
            <div
              className={props.listStyle ? `off` : `on`}
              onClick={() => {
                props.setListStyle(!props.listStyle);
                window.localStorage.setItem(`listStyle`, `true`);
              }}
            >
              Grid
            </div>
            <div
              className={props.listStyle ? `on` : `off`}
              onClick={() => {
                props.setListStyle(!props.listStyle);
                window.localStorage.setItem(`listStyle`, `false`);
              }}
            >
              List
            </div>
          </div>
        </div>
        <div
          className={props.listStyle ? `details-actors-grid` : `details-actors`}
        >
          {props.cast.map((el, i) => {
            return (
              <div className="details-actor" key={i}>
                <img
                  alt={el.person?.name}
                  className="details-portrait"
                  src={
                    el.person?.image?.medium
                      ? el.person?.image?.medium
                      : `https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image`
                  }
                ></img>
                <div className="details-name">{el.person?.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;

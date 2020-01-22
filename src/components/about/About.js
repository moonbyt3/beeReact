import React from "react";
import "./About.css";

import bannerBackground from "../../assets/img/beer.jpg";

const bannerStyle = {
  width: "100%",
  minHeight: "500px",
  height: "101vh",
  backgroundImage: `url(${bannerBackground})`,
  backgroundSize: "cover"
};
const bannerTitle = {
  color: "white"
};

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner-big" style={bannerStyle}>
          <div className="banner-big__list">
            <h2 style={bannerTitle}>Beer facts</h2>
            <span className="banner-big__list-item">
              The world's longest hangover lasted 4 weeks after a Scotsman
              consumed 60 pints of beer.
            </span>
            <span className="banner-big__list-item">
              The strongest beer in the world has a 67.5% alcohol content.
            </span>
            <span className="banner-big__list-item">
              Beer was not considered an alcoholic beverage in Russia until
              2013.
            </span>
            <span className="banner-big__list-item">
              There's a beer brewed from bananas in Africa.
            </span>
            <span className="banner-big__list-item">
              More Guinness beer is drunk in Nigeria than Ireland.
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;

import React from "react";
import "./BeerDesc.css";

class BeerDesc extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map(item => {
          return (
            <span className="beer__desc-list-item" key={item.name}>
              {item.name + " - " + item.amount.value + " " + item.amount.unit}
            </span>
          );
        })}
      </React.Fragment>
    );
  }
}

export default BeerDesc;

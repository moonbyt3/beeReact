import React from "react";
import "./BeerSingle.css";
import BeerDesc from "../beer-desc/BeerDesc";

class BeerSingle extends React.Component {
  state = {
    isLoading: true,
    data: [],
    error: null
  };

  fetchBeerAPI() {
    let beerID = this.props.match.params.id;
    console.log("id", beerID);

    fetch(`https://api.punkapi.com/v2/beers/` + beerID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchBeerAPI();
  }

  render() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    const { isLoading, data, error } = this.state;
    const beer = data[0];
    console.log(beer);

    return (
      <div className="">
        {error ? error : ""}
        {!isLoading ? (
          data.map(beer => {
            const {
              id,
              name,
              image_url,
              first_brewed,
              tagline,
              description,
              ingredients,
              volume,
              boil_volume,
              food_pairing,
              brewers_tips,
              method,
              contributed_by
            } = beer;
            return (
              <div className="beer" key={id}>
                <div className="banner">
                  <div className="beer__title">
                    <span className="beer__title-text">{name}</span>
                    <span className="beer__title-vol">
                      {`${volume.value} ${volume.unit}`}
                    </span>
                    <span className="beer__subtitle">{tagline}</span>
                    <span className="beer__date">
                      Date of brewery: <br /> {first_brewed}
                    </span>
                  </div>
                  <div className="beer__img-wrap">
                    <img className="beer__img" src={image_url} alt="" />
                  </div>
                </div>

                <div className="container container--sm">
                  <div className="beer__desc">
                    <div className="beer__desc-item">
                      <h3 className="beer__desc-title">Yeast:</h3>
                      {ingredients.yeast} <br />
                    </div>
                    <div className="beer__desc-item"></div>
                    <div className="beer__desc-item"></div>
                    <div className="beer__desc-item"></div>

                    {/* REFRACTOR THIS TO SINGLE COMPONENT */}
                    <h3 className="beer__desc-title">Malt:</h3>
                    <div className="beer__desc-list">
                      <BeerDesc data={ingredients.malt}></BeerDesc>
                    </div>
                    {/* REFRACTOR THIS TO SINGLE COMPONENT */}
                    <h3 className="beer__desc-title">Hops:</h3>
                    <div className="beer__desc-list">
                      {ingredients.hops.map((item, i) => {
                        return (
                          <span className="beer__desc-list-item" key={i}>
                            {item.name +
                              " - " +
                              item.amount.value +
                              " " +
                              item.amount.unit}
                          </span>
                        );
                      })}
                    </div>
                    {/* REFRACTOR THIS TO SINGLE COMPONENT */}
                    <h3 className="beer__desc-title">Food pairing:</h3>
                    <div className="beer__desc-list">
                      {food_pairing.map((item, i) => {
                        return (
                          <span className="beer__desc-list-item" key={i}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                    <div className="beer__desc-text">
                      <h4>Desc:</h4>
                      {description}
                    </div>
                    {/* REFRACTOR THIS TO SINGLE COMPONENT */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default BeerSingle;

import React from "react";
import "./BeerSingle.css";
import { Link, withRouter } from "react-router-dom";

class BeerSingle extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <div className="container">
        <h1>beer.name</h1>
        {!isLoading ? (
          data.map(beer => {
            const {
              id,
              name,
              image_url,
              first_brewed,
              tagline,
              description
            } = beer;
            return (
              <div className="beer" key={id}>
                <div className="beer__title-wrap">
                  <span className="beer__title">{name}</span>
                  <span className="beer-vol">{}</span>
                </div>
                <div className="beer__img-wrap">
                  <img className="beer__img" src={image_url} alt="" />
                </div>
                <span className="beer__subtitle">{tagline}</span>
                <span className="beer__date">
                  Date of brewery: <br /> {first_brewed}
                </span>
                <span className="beer__desc">{description}</span>
                <Link className="beer__btn btn btn" to={"/" + id}>
                  Read more
                </Link>
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

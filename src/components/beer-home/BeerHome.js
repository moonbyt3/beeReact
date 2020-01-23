import React from "react";
import "./BeerHome.css";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
class BeerHome extends React.Component {
  state = {
    isLoading: true,
    data: [],
    error: null
  };

  fetchBeerAPI() {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data
        })
      )
      .then(() => {
        return setTimeout(() => {
          this.setState({
            isLoading: false
          });
        }, 3000);
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchBeerAPI();
  }
  render() {
    const { isLoading, data, error } = this.state;
    // console.log(data);
    return (
      <div className="section">
        <h1 className="centered">Beer List</h1>
        {error ? <p className="error">{error.message}</p> : null}
        <div className="boxes">
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
                <div className="boxes-item" key={id}>
                  <div className="boxes-item__title-wrap">
                    <span className="boxes-item__title">{name}</span>
                    <span className="boxes-item-vol">{}</span>
                  </div>
                  <div className="boxes-item__img-wrap">
                    <img className="boxes-item__img" src={image_url} alt="" />
                  </div>
                  <span className="boxes-item__subtitle">{tagline}</span>
                  <span className="boxes-item__date">
                    Date of brewery: <br /> {first_brewed}
                  </span>
                  <span className="boxes-item__desc">{description}</span>
                  <Link className="boxes-item__btn btn btn" to={"/" + id}>
                    Read more
                  </Link>
                </div>
              );
            })
          ) : (
            <h3 className="centered loading">
              <Loader></Loader>
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default BeerHome;

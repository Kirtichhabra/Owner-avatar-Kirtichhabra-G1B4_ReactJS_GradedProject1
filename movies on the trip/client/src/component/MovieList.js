import { Card, Col, Row, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useNavigate } from "react-router-dom";
// This hook provides a programmatic way to navigate between different routes within a React application.
const MovieList = (props) => {
  const navigate = useNavigate();
  const FavouriteComponent = props.favouriteComponent;
  const handleClick = (movie) => {
    navigate(`${movie.title}`);
    localStorage.setItem("movie_id", movie.id);
    localStorage.setItem("movie_type", props.current);
  };
  //returning the jsx component 
  //basically on clicking on movie it will give movie.title as localhost/3001/movie.title and set movieid as movie_id and where it is placed in movies in thetres or might be movie.top trated 
  return (
    <>
    
      {props.loading ? (
        <Row justify="center" align="middle" className="vh-100 text-center">
          <Col span={24}>
            <Spin size="large" />
          </Col>
        </Row>
        // it shows the spinner at the centre if it is true
      ) : (
        <Row>
          {// eslint-disable-next-line(otherwise it will show no data found)
          props.movies.length === 0 ? (
            <Row justify="center" align="middle" className="vh-100 vw-100 text-center">
              <Col span={24}><h5>No data found</h5></Col>
            </Row>
          ) : (
            ""
          )}
          {props.movies.map((movie, index) => (
            <Card
              key={movie.id}
              className="m-3"
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={movie.posterurl}
                  height="300px"
                  onClick={() => handleClick(movie)}
                  // it will display movie poster 
                />
              }
              // onClick={() => handleClick(movie)}
              // basically, it is making a Card for every movie when clicked on it
            >
              <Meta
                title={movie.title}
                description={
                  <Row
                    className=" align-items-center justify-content-center"
                    onClick={() => props.handleFavouritesClick(movie)}
                  >
                    
                    <FavouriteComponent />
                  </Row>
                  // and it is making add to favourite component when click on heart icon below movie and providing a single page application for the movie they have clicked 
                }
              />
            </Card>
          ))}
        </Row>
      )}{" "}
    </>
  );
};

export default MovieList;

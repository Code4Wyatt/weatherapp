import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addToWeatherAction } from "../redux/actions/index";
import WeatherSection from "./WeatherSection";
import uniqid from "uniqid";

const City = (data) => {
  const [weather, setWeather] = useState([]);
  const cityData = useSelector((state) => state.city.elements);
  

  const dispatch = useDispatch();

  const latitude = data.data[0].lat;
  const longitude = data.data[0].lon;

  console.log("Latitude: ", latitude);
  console.log("Longitude: ", longitude);

  const apiKey = process.env.REACT_APP_API_KEY;

  const getWeather = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=" +
          "5849f3063631061f317a5b8542af8b1c"
      );
      const weather = await response.json();

      setWeather(weather);
      dispatch(addToWeatherAction(weather));
      console.log("Weather: ", weather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{data.data[0].name}</Card.Title>
        <Card.Text>{data.data[0].state}</Card.Text>
        <Card.Text>{data.data[0].country}</Card.Text>
        <Card.Text>{weather.timezone}</Card.Text>
        <Card.Subtitle>Current: </Card.Subtitle>

     {/* <ListGroup horizontal > 
          <ListGroup.Item>Clouds: {weather.current.clouds}</ListGroup.Item> 
          <ListGroup.Item>Visibility: {weather.current.visibility}</ListGroup.Item>
          <ListGroup.Item>Temperature: {weather.current.temp}</ListGroup.Item>
          <ListGroup.Item>Wind °C: {weather.current.wind_deg}</ListGroup.Item> 
        </ListGroup> */}
      </Card.Body>
    </Card>
  );
     
};

export default City;

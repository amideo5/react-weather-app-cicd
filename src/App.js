import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import apiUrl from './apiConfig';

const App = (props) => {

  const { reset } = useForm();
  const [data, setData] = useState([]);


  const [values, setValues] = useState({
    city: '',
  })



  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

  }


  const handleSubmit = (event) => {



    var city = values.city


    //alert(obj)
    axios.get(apiUrl + city)
      .then(response => {
        console.log(response.data.mainData)
        setData(response.data.mainData);
      })
      .catch(error => {
        console.log(error)


        alert(error)

      });


    reset();
    event.preventDefault();
  }


  return (
    <div className="main">

      <div className="heading">
        <h2>WEATHER PORTFOLIO</h2>
      </div>

      <p>
        <form className="form" onSubmit={handleSubmit}>

          <div className="formh">

            <input
              type="text"
              className="form-control"
              placeholder="City Name"
              onChange={handleChange}
              required

              name="city"
              value={values.city}
            />
          </div>

          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </p>


      <div className="info">
        <p className="temp">Current Temperature : {data.temperature}</p>
        <p className="hum">Current Humidity : {data.humidity}</p>
      </div>

    </div>
  );

}



export default App;
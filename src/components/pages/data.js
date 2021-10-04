import '../../App.css';
import React,{useState,useEffect, Component } from 'react';
import axios from 'axios';
import Dispcards from './display';
import './data.css';

function Disp()
{
  const [profile,setprofile] = useState([]);
  const [loading,setloading] = useState(false);
  const [load,setload] = useState(false);
  try
  {
    const request = axios
    .get(`https://reqres.in/api/users`)
    .then(res => {
      console.log(JSON.stringify(res.data.data))
      setprofile(res.data.data)
    });
    setTimeout(function() {
      setloading(true);
    }, 1000); 
    console.log(request);
  }
  catch(e)
  {
    console.log(e) 
  }
  return(
  <>
  <div className="centertext">
  <h1>PROFILES</h1>
  </div>
  <div className="cardcontainer">
    {
    loading ?
    profile.map(item => (
    <a key={item.id}>
      <div className="card">
            <div className="imgs">
                <img src={item.avatar} alt="not found"/>
            </div>
            <div className="details">
                <h1>{item.first_name}</h1>
                <p>{item.email}</p> 
            </div>
        </div>
      
      
    </a>
    ))
    :
    <img className="loader" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/>
    }
  </div>
  </>
  );
}

export default Disp;
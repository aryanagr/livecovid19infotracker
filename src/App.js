
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Time from './Time'



function App() {
  const [data,setdata]=useState([]);
  const getcoviddata=async ()=>{
    try{
        const res=await fetch('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json' );

      const actualdata=await res.json();
      console.log(actualdata) ;
      setdata(actualdata.statewise[0]);
    }

    catch(err){
      console.log(err)
  
    }
    
  }
  useEffect(()=>{
    getcoviddata();
  },[])
  return (
    <>
    <section>

    <h1 className="text-center"><span className="h6">🔴 </span> live</h1>
    <h2 className="text-center">COVID-19 CORONA TRACKER</h2>


    <div className="row row-cols-1 row-cols-md-3 g-4  ">
    <div className="col d-flex justify-content-center">
      <div className="card w-75 text-white bg-dark mb-1">
        <div className="card-body">
          <p className="card-title h1"><span className="h6">our </span>Country</p>
          <p className="card-text display-1">INDIA</p>
        </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
      <div className="card w-75 text-white bg-secondary mb-1">
      
        <div className="card-body">
          <p className="card-title h1"><span className="h6">total </span>Recovered</p>
          <p className="card-text display-1">{data.recovered}</p>
        </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
      <div className="card w-75 text-white bg-success mb-1">
      
        <div className="card-body">
          <p className="card-title h1"><span className="h6">total </span>Confirmed</p>
          <p className="card-text display-1">{data.confirmed}</p>
        </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
      <div className="card w-75 text-white bg-danger mb-1">
     
        <div className="card-body">
          <p className="card-title h1"><span className="h6">total </span>Deaths</p>
          <p className="card-text display-1">{data.deaths}</p>
        </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
      <div className="card w-75 text-white bg-warning mb-1">
      
        <div className="card-body">
          <p className="card-title h1"><span className="h6">total </span>Active</p>
          <p className="card-text display-1">{data.active}</p>
        </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
      <div className="card w-75 text-white bg-info mb-1">
      
        <div className="card-body">
          <p className="card-title h2"><span className="h6">last </span>Update</p>
          <p className="card-text h1">{data.lastupdatedtime}</p>
        </div>
        </div>


      </div>
      
    </div>
    </section>

    <Time/>
    </>
  );
}

export default App;

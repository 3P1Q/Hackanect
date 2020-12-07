import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Hackathon.css';
import { data1, data2 } from "./data";

const Hackathon = () => {

    const [allHackathons, setAllHackathons] = useState([]);

    // async function getHackathons(){
    //     const hacks = await axios.post("http://localhost:5000/hackathons");
    //     return hacks;
    // }
    useEffect(()=>{
        axios.post("http://localhost:5000/hackathons")
        .then(res => res.data)
        .then(data => {
            setAllHackathons(data)
        })
    });
    
    //console.log(allHackathons);


  const [allSelected, setAllSelected] = useState(true);
  const [mySelected, setMySelected] = useState(false);

  function handleClick(evt) {
    const classes = evt.target.classList;
    if (classes.contains("all")) {
      setAllSelected(true);
      setMySelected(false);
    } else if (classes.contains("my")) {
      setAllSelected(false);
      setMySelected(true);
    }
  }

  const viewAllCard = (hack) => {
    return (
      <div className="hackathon-card">
        <a href={hack.link}> {hack.name} </a>
        <span id="add-hack" className="hack-button">
          {" "}
          &nbsp;+&nbsp;{" "}
        </span>
      </div>
    );
  };
  const viewMyCard = (hack) => {
    return (
      <div className="hackathon-card">
        <a href={hack.link}> {hack.name} </a>
        <span id="remove-hack" className="hack-button">
          {" "}
          &nbsp;-&nbsp;{" "}
        </span>
      </div>
    );
  };
  //console.log(data);
  return (
    <div className="hackathons-page">
      <div className="hackathons-tab">
        {/* <ul> */}
        <div
          onClick={handleClick}
          className={`all hack-tab ${allSelected && "underline-tab"}`}
        >
          <h1 className="all"> All Hackathons</h1>
        </div>
        <div
          onClick={handleClick}
          className={`my hack-tab ${mySelected && "underline-tab"}`}
        >
          <h1 className="my"> My Hackathons</h1>
        </div>
        {/* </ul> */}
      </div>
      <div className={`all-hackathons ${!allSelected && "hide-tab"}`}>
        {allHackathons.map((hack) => {
          return viewAllCard(hack);
        })}
      </div>
      <div className={`my-hackathons ${!mySelected && "hide-tab"}`}>
        {data2.map((hack) => {
          return viewMyCard(hack);
        })}
      </div>
    </div>
  );
};

export default Hackathon;

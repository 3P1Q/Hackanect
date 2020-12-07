import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import querystring from 'querystring';
import './Hackathon.css';
import { data1, data2 } from "./data";

import {userLoggedInContext} from '../App';

axios.defaults.withCredentials = true;

const Hackathon = () => {

    const [load, setLoad] = useState(false);

    const [loggedIn] = useContext(userLoggedInContext);

    const [allHackathons, setAllHackathons] = useState([]);
    const [myHackathons, setMyHackathons] = useState([]);
    const [string,setString] = useState([""]);

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

        axios.post("http://localhost:5000/myhackathons")
        .then(res => res.data)
        .then(data => {
            setMyHackathons(data);
            var str=[""];
            for(var i=0; i<data.length; i++)
            {
                str.push(JSON.stringify(data[i]));
            }
            setString(str);
            setLoad(true);
        })
    },[]);

    useEffect(()=>{
        if(load)
        {
            axios.post("http://localhost:5000/addmyhackathon", querystring.stringify({myHackathons: string}), {
                headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                credentials: 'include',
                withCredentials: true
            })
            .then(res => {
                if(res.status === 200)
                {
                console.log("updated");
                }
            });
        }
    },[myHackathons])

    // useEffect(()=>{
    //     const str = myHackathons.map((hack)=>JSON.stringify(hack));
    //     console.log("myHackathons");
    //     console.log(str);
    //     setString(str);
    // },[myHackathons])
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

  function addHackathon(evt){
      const a = evt.target.parentElement.firstChild;
      const name = a.innerHTML;
      const link = a.href;
      const obj = {
          name: name,
          link: link
      }
      console.log(a);
    setMyHackathons((prev)=>{
        var exists = false;
        for(var i=0;i<prev.length;i++)
        {
            if(prev[i].name === name)
            {
                exists = true;
                break;
            }
        }
        if(!exists)
        {
            setString((prev)=>[...prev,JSON.stringify(obj)])
            return [...prev, obj]
        }
        else
        {
            return prev;
        }
    })
    // sendHackathon(string);
    // console.log(string);
    //setString(JSON.stringify(myHackathons));
    //updateHackathons();
  }

  function removeHackathon(evt){
      console.log("removed");
    const a = evt.target.parentElement.firstChild;
      const name = a.innerHTML;
      const link = a.href;
      const obj = {
          name: name,
          link: link
      }
      //console.log(a);
      const hackind = myHackathons.findIndex(x => {
          //console.log("reaching here");
          console.log(x.name);
          console.log(name);
          if(x.name===name.replace(/\s+/g,' '))
            return true;
      });
      const hackindString = string.findIndex(x => {
          if(x === '')
            return false;

          if(JSON.parse(x).name === name.replace(/\s+/g,' '))
            return true;
      });
      console.log("hackind is"+hackind);
      setMyHackathons([...myHackathons.filter((_, index) => index!==hackind)]);
      setString([...string.filter((_, index) => index!==hackindString)]);
  }

  //console.log(myHackathons);
  const viewAllCard = (hack) => {
    return (
      <div className="hackathon-card">
        <a href={hack.link}> {hack.name} </a>
        <span onClick={addHackathon} id="add-hack" className="hack-button">
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
        <span onClick={removeHackathon} id="remove-hack" className="hack-button">
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
        {loggedIn ? myHackathons.map((hack) => {
          return viewMyCard(hack);
        }) : (
            <h2><br/>Please Login First to see list of your Hackathons</h2>
        )}
      </div>
    </div>
  );
};

export default Hackathon;

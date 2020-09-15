import React, { useEffect, useState } from 'react';
import './App.css';

import {API} from 'aws-amplify'

function App() {
  const [people, updatePeople] = useState([])
  async function callApi() {
    try {
      const peopleData = await API.get('mainappapi', '/people') //first param is the apiname
      console.log({ peopleData })
      updatePeople(peopleData.people)
    } catch (error) {
      console.log({error})
    }
  } 
  useEffect (() => {
    callApi()
  }, [])
  return (
    <div className="App">
      <h1>Hello </h1>
      {
        people.map((p, i) => <h2>{p.name}</h2>)
      }
    </div>
  );
}

export default App;

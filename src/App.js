import React, { useState, useEffect } from 'react';
import Data from './data.js';
import './App.css';

function App() {
  const [people, setPeople] = useState(Data);

  const handleRemove = (id) => {
    const updatedPeople = people.filter(person => person.id !== id);
    setPeople(updatedPeople);
  };

  useEffect(() => {
    console.log(`Number of people: ${people.length}`);
  }, [people]);

  return (
    <>
      <section className="title">
        <h1>Calendar of Celebrations</h1>
        <h2>{people.length} Birthdays Today</h2>
      </section>
      <section className="container">
        {people.map((person) => (
          <div key={person.id} className="birthday">
            <img src={person.image} alt='NA'/>
            <h3>{person.name}</h3>
            <h4>{person.age} years old</h4>
            <button onClick={() => handleRemove(person.id)}>REMOVE</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;

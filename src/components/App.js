import React, { useEffect, useState } from 'react';
import Header from './Header';
import PlantPage from './PlantPage';

function App() {
  const [plants, setPlants] = useState('');
  const [plantsToRender, setPlantsToRender] = useState('');
  const [query, setQuery] = useState('');

  useEffect(
    () =>
      fetch('http://localhost:6001/plants')
        .then((res) => res.json())
        .then((data) => setPlants(data)),
    []
  );

  useEffect(() => {
    return plants
      ? setPlantsToRender(
          plants.filter((plant) => plant.name.toLowerCase().includes(query))
        )
      : null;
  }, [plants, query]);

  function onSubmit(newPlantObj) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlantObj),
    });
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        query={query}
        setQuery={setQuery}
        onSubmit={onSubmit}
        plants={plantsToRender}
      />
    </div>
  );
}

export default App;

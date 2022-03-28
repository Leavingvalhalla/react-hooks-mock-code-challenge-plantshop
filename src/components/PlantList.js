import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants
        ? plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)
        : null}
    </ul>
  );
}

export default PlantList;

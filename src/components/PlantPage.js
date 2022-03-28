import React from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({ plants, onSubmit, query, setQuery }) {
  return (
    <main>
      <NewPlantForm onSubmit={onSubmit} />
      <Search query={query} setQuery={setQuery} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;

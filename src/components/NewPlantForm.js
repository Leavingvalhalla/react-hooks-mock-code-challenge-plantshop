import React, { useState } from 'react';

function NewPlantForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit() {
    const newPlantObj = {
      name: name,
      image: image,
      price: price,
    };
    onSubmit(newPlantObj);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

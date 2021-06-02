import React, { useState } from 'react';

const NewColor = ({ addColor }) => {
  const intialState = {
    name: '',
    value: '',
  };
  const [formData, setFormData] = useState(intialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, value } = formData;
    addColor(name, value);
    setFormData(intialState);
  };

  return (
    <div className='NewColor'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Color Name:</label>
          <input
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='value'>Color Value:</label>
          <input
            id='value'
            name='value'
            value={formData.value}
            onChange={handleChange}
            type='color'
          />
        </div>
        <button>Add New</button>
      </form>
    </div>
  );
};

export default NewColor;
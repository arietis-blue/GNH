import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyMapComponent from './Latlon';
import { auth } from './firebase.jsx'; 

const App = () => {
    const [userName, setUserName] = useState(null);
    const [formData, setFormData] = useState({
      shop_name: '',
      category: '',
      sub_category: '',
      description: '',
      latitude: '',
      longitude: '',
      shop_url: '',
    });
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserName(user.email);
        }
      });
      return () => unsubscribe();
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { user_name: userName, ...formData };
    try {
      await axios.post('/your-fastapi-endpoint', payload);
      alert('Data sent successfully');
    } catch (error) {
      alert('Error sending data');
    }
  };

  const handleMapClick = (e) => {
    setFormData({
      ...formData,
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {userName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Shop Name</label>
          <input
            type="text"
            name="shop_name"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sub Category</label>
          <input
            type="text"
            name="sub_category"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          ></textarea>
        </div>
        <div className="mb-4 ">
        <MyMapComponent onMapClick={handleMapClick} />
      <input
        type="text"
        name="latitude"
        value={formData.latitude}
        readOnly
      />
      <input
        type="text"
        name="longitude"
        value={formData.longitude}
        readOnly
      />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Shop URL</label>
          <input
            type="text"
            name="shop_url"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

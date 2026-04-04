

import React, { useState, useEffect } from 'react';

export default function PricingUpload() {
  const [country, setCountry] = useState('');
  const [pricing, setPricing] = useState('');
  const [pricingData, setPricingData] = useState([]);
  const [editData, setEditData] = useState(null);

  async function handleEdit(item) {
    setEditData(item);
    setCountry(item.country);
    setPricing(item.pricing);
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/pricing/${editData._id}`, {
      method: 'PUT',
      body: JSON.stringify({ country, pricing }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      // Clear the edit state
      setEditData(null);
      setCountry('');
      setPricing('');

      // Fetch and update the pricing data immediately after a successful edit
      fetchPricingData();
    } else {
      alert('Data did not update');
    }
  }

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:4000/pricing/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      // Remove the deleted item from the pricing data
      setPricingData((prevData) => prevData.filter((item) => item._id !== id));
    } else {
      alert('Data did not delete');
    }
  }

  const fetchPricingData = async () => {
    try {
      const response = await fetch('http://localhost:4000/pricing');
      if (response.status === 200) {
        const data = await response.json();
        setPricingData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch and set pricing data when the component mounts
    fetchPricingData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/pricingupload', {
      method: 'POST',
      body: JSON.stringify({ country, pricing }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      // Clear the form fields after a successful upload
      setCountry('');
      setPricing('');

      // Fetch and update the pricing data immediately after a successful upload
      fetchPricingData();
    } else {
      alert('Data did not upload');
    }
  }

  return (
    <div className="pt-[250px] lg:w-[600px] lg:h-auto mx-auto">
      <form onSubmit={editData ? handleUpdate : handleSubmit}>
        <input
          type="text"
          placeholder="Country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-[250px] h-14 border-2 border-black mr-[30px]"
        />

        <input
          type="text"
          placeholder="Pricing"
          value={pricing}
          onChange={(e) => setPricing(e.target.value)}
          className="w-[250px] h-14 border-2 border-black"
        />
        <br />
        <button className="w-[150px] text-white h-10 mt-[30px] mx-[170px] bg-blue-700 rounded-full">
          {editData ? 'Update' : 'Upload'}
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-bold">Pricing Data</h2>
        <table className="w-[600px]" style={{ margin: '20px 0' }}>
          <thead className="text-left mx-[50px] border-b-4 border-black">
            <tr>
              <th>Country</th>
              <th>Pricing</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item) => (
              <tr key={item._id}>
                <td>{item.country}</td>
                <td>{item.pricing}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


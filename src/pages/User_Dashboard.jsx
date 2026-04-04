  import React, { useState, useEffect } from "react";
  import Papa from "papaparse";
  import { useNavigate } from 'react-router-dom';

  const User_Dashboard = () => {
    const [csvData, setCsvData] = useState([]);
    const [showModal, setShowModal] = useState(false);
     const navigate = useNavigate();

    const [showManualForm, setShowManualForm] = useState(false);
const [manualFormData, setManualFormData] = useState({
  countryname: "",
  countrycode: "",
  pricing: "",
});

    
const [editRowId, setEditRowId] = useState(null);
const [editFormData, setEditFormData] = useState({
  countryname: "",
  countrycode: "",
  pricing: "",
});


    
    const fetchPricingData = async () => {
      try {
        const res = await fetch("http://localhost:3000/pricing/pricing");
        if (!res.ok) throw new Error("Failed to fetch");
    
        const data = await res.json();
        setCsvData(data);
    
        console.log("The CSV data is:", data); // ✅ Move log here
      } catch (err) {
        console.error("Error fetching pricing data:", err);
      }
    };
    
    // useEffect to run on component mount
    useEffect(() => {
      fetchPricingData();
    }, []);


    const handleManualFormChange = (e) => {
      const { name, value } = e.target;
      setManualFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleManualFormSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const res = await fetch("http://localhost:3000/pricing/pricing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(manualFormData),
        });
        console.log("this is checking",res)
        
        if (!res.ok) throw new Error("Failed to add country");
    
        setShowManualForm(false); 
        setManualFormData({ countryname: "", countrycode: "", pricing: "" }); 
        fetchPricingData(); 
      } catch (err) {
        console.error("Error adding country:", err);
      }
    };
    



    const handleEditClick = (row) => {
      setEditRowId(row._id);
      setEditFormData({
        countryname: row.countryname,
        countrycode: row.countrycode,
        pricing: row.pricing,
      });
    };
    
    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setEditFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSaveClick = async (id) => {
      try {
        const res = await fetch(`http://localhost:3000/pricing/pricing/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editFormData),
        });
        if (!res.ok) throw new Error("Update failed");
    
        setEditRowId(null); 
        fetchPricingData();
      } catch (err) {
        console.error("Error updating pricing:", err);
      }
    };
    
    const handleCancelEdit = () => {
      setEditRowId(null);
    };



    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
      if (!confirmDelete) return;
    
      try {
        const res = await fetch(`http://localhost:3000/pricing/pricing/${id}`, {
          method: "DELETE",
        });
    
        if (!res.ok) throw new Error("Delete failed");
    
       
        fetchPricingData();
      } catch (err) {
        console.error("Error deleting pricing:", err);
      }
    };
    


    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
    
      const formData = new FormData();
      formData.append("file", file);
    
      try {
        const response = await fetch("http://localhost:3000/pricing/upload/csv", {
          method: "POST",
          body: formData,
        });
    
        if (!response.ok) {
          const errData = await response.json();
          console.error("Upload error:", errData);
          return;
        }
    
        const data = await response.json();
        console.log("Upload response:", data);
        setShowModal(false);
        fetchPricingData();
      } catch (error) {
        console.error("Upload failed:", error);
      }
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login"); 
    };
    

    return (
      <div className="p-6 pt-[12rem]">
        <h2 className="text-2xl font-semibold mb-4">Admin Panel - Country Pricing</h2>

        <div className="flex gap-4 mb-4">
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded"
    onClick={() => setShowModal(true)}
  >
    Upload CSV
  </button>
  <button
    className="bg-green-600 text-white px-4 py-2 rounded"
    onClick={() => setShowManualForm(true)}
  >
    Add Manually
  </button>

  <button
    className="bg-green-600 text-white px-4 py-2 rounded"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>


        {showManualForm && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-5 rounded shadow-lg w-[350px]">
      <h3 className="text-lg font-semibold mb-4">Add Country Manually</h3>
      <form onSubmit={handleManualFormSubmit} className="space-y-3">
        <div>
          <label className="block mb-1 text-sm">Country Name</label>
          <input
            type="text"
            name="countryname"
            value={manualFormData.countryname}
            onChange={handleManualFormChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Country Code</label>
          <input
            type="text"
            name="countrycode"
            value={manualFormData.countrycode}
            onChange={handleManualFormChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Pricing</label>
          <input
            type="number"
            name="pricing"
            value={manualFormData.pricing}
            onChange={handleManualFormChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setShowManualForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}



        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Upload CSV File</h3>
              <input type="file" accept=".csv" onChange={handleFileUpload} />
              <button
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {csvData.length > 0 && (
          <table className="w-full border border-gray-300 mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Country Name</th>
              <th className="p-2 border">Country Code</th>
              <th className="p-2 border">Pricing</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row) => (
              <tr key={row._id} className="border">
                {editRowId === row._id ? (
                  <>
                    <td className="p-2 border">
                      <input
                        name="countryname"
                        value={editFormData.countryname}
                        onChange={handleFormChange}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-2 border">
                      <input
                        name="countrycode"
                        value={editFormData.countrycode}
                        onChange={handleFormChange}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-2 border">
                      <input
                        name="pricing"
                        value={editFormData.pricing}
                        onChange={handleFormChange}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-2 border flex gap-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                        onClick={() => handleSaveClick(row._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2 border">{row.countryname}</td>
                    <td className="p-2 border">{row.countrycode}</td>
                    <td className="p-2 border">{row.pricing}</td>
                    <td className="p-2 border flex gap-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                        onClick={() => handleEditClick(row)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                        onClick={() => handleDelete(row._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
        
          
        )}
      </div>
    );
  };

  export default User_Dashboard;

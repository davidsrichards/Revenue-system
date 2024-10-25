import React, { useState } from 'react';
const LocalitiesDetails = () => {
  const [localities, setLocalities] = useState([
    { id: 1, name: 'Downtown' },
    { id: 2, name: 'Uptown' }
  ]);
  const [newLocality, setNewLocality] = useState('');

  const addLocality = () => {
    const id = localities.length ? localities[localities.length - 1].id + 1 : 1;
    setLocalities([...localities, { id, name: newLocality }]);
    setNewLocality('');
  };

  const deleteLocality = (id) => {
    setLocalities(localities.filter(locality => locality.id !== id));
  };

  const handleInputChange = (e) => {
    setNewLocality(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Manage Localities</h1>
      
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded-md w-full mb-2"
          placeholder="Add a new locality"
          value={newLocality}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md w-full"
          onClick={addLocality}
        >
          Add Locality
        </button>
      </div>
      
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {localities.map((locality) => (
            <tr key={locality.id}>
              <td className="border p-2">{locality.id}</td>
              <td className="border p-2">{locality.name}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white p-2 rounded-md"
                  onClick={() => deleteLocality(locality.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocalitiesDetails;

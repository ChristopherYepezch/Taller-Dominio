import React, { useState } from 'react';

const Busqueda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    

    console.log('Realizar búsqueda con el término:', searchTerm);
  };

  return (
    <div className="container mt-3">
      {/* Formulario de búsqueda */}
      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Busqueda por Nombre :
        </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Buscar
      </button>

      {/* Tabla para mostrar los resultados */}
      <table className="table mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Ocupación</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí se mostrarán los resultados de la búsqueda */}
          {searchResults.map((result) => (
            <tr key={result.ID}>
              <td>{result.ID}</td>
              <td>{result.Nombre}</td>
              <td>{result.Apellido}</td>
              <td>{result.Direccion}</td>
              <td>{result.Ciudad}</td>
              <td>{result.Email}</td>
              <td>{result.Telefono}</td>
              <td>{result.Ocupacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Busqueda;

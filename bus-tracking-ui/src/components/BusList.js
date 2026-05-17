import React, { useState } from "react";

function BusList({ buses, loadBuses }) {

  const [search,setSearch] = useState("");

  const deleteBus = (id) => {
    fetch(`http://localhost:8080/api/workout/delete/${id}`,{
      method:"DELETE"
    }).then(()=>loadBuses());
  };

  return(

    <div>

      <h2>Available Buses</h2>

      <input
      placeholder="Search Bus Number or Location"
      onChange={(e)=>setSearch(e.target.value)}
      />

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Bus</th>
            <th>Driver</th>
            <th>From</th>
            <th>To</th>
            <th>Location</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {buses
          .filter(bus =>
            bus.busNumber.toLowerCase().includes(search.toLowerCase()) ||
            bus.location.toLowerCase().includes(search.toLowerCase())
          )
          .map(bus => (

            <tr key={bus.id}>

              <td>{bus.id}</td>
              <td>{bus.busNumber}</td>
              <td>{bus.driver}</td>
              <td>{bus.fromLocation}</td>
              <td>{bus.toLocation}</td>
              <td>{bus.location}</td>

              <td>

                <button
                className="delete"
                onClick={()=>deleteBus(bus.id)}>
                Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default BusList;
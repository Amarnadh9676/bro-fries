import { useEffect, useState } from "react";
import bg from "../images/bus.jpg";   // ✅ IMPORT IMAGE

function BusApp() {

  const [buses, setBuses] = useState([]);

  const [bus, setBus] = useState({
    busNumber: "",
    driver: "",
    location: "",
    fromLocation: "",
    toLocation: "",
    time: ""
  });

  const [editId, setEditId] = useState(null);

  // LOAD DATA
  const loadBuses = () => {
    fetch("http://localhost:8080/api/buses")
      .then(res => res.json())
      .then(data => setBuses(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadBuses();
  }, []);

  // ADD
  const addBus = () => {
    fetch("http://localhost:8080/api/buses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bus)
    }).then(() => {
      loadBuses();
      clearForm();
    });
  };

  // DELETE
  const deleteBus = (id) => {
    fetch(`http://localhost:8080/api/buses/${id}`, {
      method: "DELETE"
    }).then(() => loadBuses());
  };

  // EDIT
  const editBus = (b) => {
    setBus(b);
    setEditId(b.id);
  };

  // UPDATE
  const updateBus = () => {
    fetch(`http://localhost:8080/api/buses/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bus)
    }).then(() => {
      loadBuses();
      clearForm();
      setEditId(null);
    });
  };

  // CLEAR FORM
  const clearForm = () => {
    setBus({
      busNumber: "",
      driver: "",
      location: "",
      fromLocation: "",
      toLocation: "",
      time: ""
    });
  };

  return (
    <div style={{
      backgroundImage: `url(${bg})`,   // ✅ IMAGE USED
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "20px",
      color: "white",
      backgroundColor: "rgba(0,0,0,0.5)",
      backgroundBlendMode: "darken"
    }}>

      <h1>Amar Travels-Bus Tracking System</h1>

      <div style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: "20px",
        borderRadius: "10px"
      }}>

        {/* INPUTS */}
        <input placeholder="Bus Number" value={bus.busNumber}
          onChange={e=>setBus({...bus, busNumber:e.target.value})}/>

        <input placeholder="Driver" value={bus.driver}
          onChange={e=>setBus({...bus, driver:e.target.value})}/>

        <input placeholder="Location" value={bus.location}
          onChange={e=>setBus({...bus, location:e.target.value})}/>

        <input placeholder="From" value={bus.fromLocation}
          onChange={e=>setBus({...bus, fromLocation:e.target.value})}/>

        <input placeholder="To" value={bus.toLocation}
          onChange={e=>setBus({...bus, toLocation:e.target.value})}/>

        <input placeholder="Time" value={bus.time}
          onChange={e=>setBus({...bus, time:e.target.value})}/>

        <br/><br/>

        {/* BUTTON */}
        {editId ? (
          <button onClick={updateBus}>Update Bus</button>
        ) : (
          <button onClick={addBus}>Add Bus</button>
        )}

        <button onClick={clearForm}>Clear</button>

        <br/><br/>

        {/* TABLE */}
        <table border="1" style={{ backgroundColor: "white", color: "black" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bus</th>
              <th>Driver</th>
              <th>Location</th>
              <th>From</th>
              <th>To</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {buses.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.busNumber}</td>
                <td>{b.driver}</td>
                <td>{b.location}</td>
                <td>{b.fromLocation}</td>
                <td>{b.toLocation}</td>
                <td>{b.time}</td>

                <td>
                  <button onClick={() => editBus(b)}>Edit</button>
                  <button onClick={() => deleteBus(b.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default BusApp;
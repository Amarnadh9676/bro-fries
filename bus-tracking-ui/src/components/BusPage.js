import React, { useState } from "react";
import jsPDF from "jspdf";
import QRCode from "qrcode";

function BusPage({ setIsLoggedIn }) {
  const [buses, setBuses] = useState([]);

  const [busNumber, setBusNumber] = useState("");
  const [routeFrom, setRouteFrom] = useState("");
  const [routeTo, setRouteTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [totalSeats, setTotalSeats] = useState("");

  const [bookingBus, setBookingBus] = useState(null);

  const [passenger, setPassenger] = useState("");
  const [seat, setSeat] = useState("");
  const [phone, setPhone] = useState("");

  // ADD BUS
  const handleSubmit = () => {
    if (!busNumber || !routeFrom || !routeTo || !date || !time || !price || !totalSeats) {
      alert("Fill all fields");
      return;
    }

    setBuses([
      ...buses,
      {
        id: Date.now(),
        busNumber,
        routeFrom,
        routeTo,
        date,
        time,
        price,
        totalSeats,
      },
    ]);

    setBusNumber("");
    setRouteFrom("");
    setRouteTo("");
    setDate("");
    setTime("");
    setPrice("");
    setTotalSeats("");
  };

  // TRACK
  const trackBus = (bus) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${bus.routeFrom}&destination=${bus.routeTo}`;
    window.open(url, "_blank");
  };

  // 🎟️ PREMIUM PDF TICKET WITH PRICE
  const generatePDF = async (bus) => {
    if (!bus.booking) {
      alert("Book first!");
      return;
    }

    const doc = new jsPDF();

    const qrData = `Bus: ${bus.busNumber}, Seat: ${bus.booking.seat}`;
    const qrImage = await QRCode.toDataURL(qrData);

    // HEADER
    doc.setFillColor(30, 64, 175);
    doc.rect(10, 10, 190, 40, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("🚌 AMAR TRAVELS", 55, 30);

    // MAIN CARD
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(10, 55, 190, 120, 5, 5, "F");

    // BUS DETAILS
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    doc.text(`Bus No: ${bus.busNumber}`, 20, 75);
    doc.text(`From: ${bus.routeFrom}`, 20, 85);
    doc.text(`To: ${bus.routeTo}`, 20, 95);
    doc.text(`Date: ${bus.date}`, 20, 105);
    doc.text(`Time: ${bus.time}`, 20, 115);

    // PASSENGER
    doc.setTextColor(220, 38, 38);
    doc.text(`Passenger: ${bus.booking.passenger}`, 20, 130);

    doc.setTextColor(0, 0, 0);
    doc.text(`Seat: ${bus.booking.seat}`, 20, 140);
    doc.text(`Phone: ${bus.booking.phone}`, 20, 150);

    // 💰 PRICE BOX
    doc.setFillColor(34, 197, 94);
    doc.roundedRect(15, 155, 80, 20, 3, 3, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text("TOTAL FARE", 20, 163);

    doc.setFontSize(16);
    doc.text(`₹ ${bus.price}`, 20, 170);

    // QR CODE
    doc.setDrawColor(0);
    doc.rect(140, 75, 50, 50);
    doc.addImage(qrImage, "PNG", 145, 80, 40, 40);

    // FOOTER
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.text("Thank you for booking with Amar Travels!", 40, 185);

    doc.save("Premium_Ticket.pdf");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      
      <h2 style={{ color: "#1e40af" }}>🚌 Bus Booking System</h2>

      {/* FORM */}
      <input placeholder="Bus Number" value={busNumber} onChange={(e)=>setBusNumber(e.target.value)} />
      <input placeholder="From" value={routeFrom} onChange={(e)=>setRouteFrom(e.target.value)} />
      <input placeholder="To" value={routeTo} onChange={(e)=>setRouteTo(e.target.value)} />
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
      <input type="number" placeholder="Seats" value={totalSeats} onChange={(e)=>setTotalSeats(e.target.value)} />

      <button style={{ background: "#22c55e", color: "white", padding: "8px", margin: "10px" }} onClick={handleSubmit}>
        Add Bus
      </button>

      <hr/>

      {/* TABLE */}
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        <thead style={{ backgroundColor: "#1e40af", color: "white" }}>
          <tr>
            <th>Bus No</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.busNumber}</td>
              <td>{bus.routeFrom}</td>
              <td>{bus.routeTo}</td>
              <td>{bus.date}</td>
              <td>{bus.time}</td>
              <td>₹{bus.price}</td>
              <td>{bus.totalSeats}</td>

              <td>
                <button onClick={()=>setBookingBus(bus.id)}>Book</button>
                <button onClick={()=>trackBus(bus)}>Track</button>
                <button onClick={()=>generatePDF(bus)}>Ticket</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* BOOKING */}
      {bookingBus && (
        <div>
          <h3>Booking</h3>

          <input placeholder="Name" onChange={(e)=>setPassenger(e.target.value)} />
          <input placeholder="Seat" onChange={(e)=>setSeat(e.target.value)} />
          <input placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} />

          <button onClick={() => {
            const updated = buses.map((b) =>
              b.id === bookingBus
                ? { ...b, booking: { passenger, seat, phone } }
                : b
            );
            setBuses(updated);
            setBookingBus(null);
          }}>
            Confirm
          </button>
        </div>
      )}

      {/* LOGOUT */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <button style={{ background: "red", color: "white" }} onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>

    </div>
  );
}

export default BusPage;
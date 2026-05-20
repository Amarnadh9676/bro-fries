import { useNavigate } from "react-router-dom";

import {
  useState,
  useEffect
} from "react";

function Address() {

  const navigate = useNavigate();

  // LOCATION STATE

  const [address, setAddress] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // FORM STATES

  const [fullName, setFullName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [house, setHouse] =
    useState("");

  const [flat, setFlat] =
    useState("");

  const [near, setNear] =
    useState("");

  const [city, setCity] =
    useState("");

  const [pincode, setPincode] =
    useState("");

  // LOAD SAVED ADDRESS

  useEffect(() => {

    setFullName(
      localStorage.getItem(
        "fullName"
      ) || ""
    );

    setPhone(
      localStorage.getItem(
        "phone"
      ) || ""
    );

    setHouse(
      localStorage.getItem(
        "house"
      ) || ""
    );

    setFlat(
      localStorage.getItem(
        "flat"
      ) || ""
    );

    setNear(
      localStorage.getItem(
        "near"
      ) || ""
    );

    setCity(
      localStorage.getItem(
        "city"
      ) || ""
    );

    setPincode(
      localStorage.getItem(
        "pincode"
      ) || ""
    );

    setAddress(
      localStorage.getItem(
        "address"
      ) || ""
    );

  }, []);

  // GET CURRENT LOCATION

  const getLocation = () => {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;

        const response =
          await fetch(

            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`

          );

        const data =
          await response.json();

        setAddress(
          data.display_name
        );

        setLoading(false);

      },

      () => {

        alert(
          "Unable to fetch location"
        );

        setLoading(false);

      }

    );

  };

  // SAVE ADDRESS

  const saveAddress = () => {

    localStorage.setItem(
      "fullName",
      fullName
    );

    localStorage.setItem(
      "phone",
      phone
    );

    localStorage.setItem(
      "house",
      house
    );

    localStorage.setItem(
      "flat",
      flat
    );

    localStorage.setItem(
      "near",
      near
    );

    localStorage.setItem(
      "city",
      city
    );

    localStorage.setItem(
      "pincode",
      pincode
    );

    localStorage.setItem(
      "address",
      address
    );

    alert(
      "Address Saved Successfully ✅"
    );

  };

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >

      <div
        style={{
          background: "#111827",

          padding:
            window.innerWidth < 768
              ? "25px"
              : "50px",

          borderRadius: "30px",

          width:
            window.innerWidth < 768
              ? "100%"
              : "450px",

          boxShadow:
            "0 0 30px rgba(255,180,0,0.2)"
        }}
      >

        <h1
          style={{
            color: "#ffb400",
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          🏠 Delivery Address
        </h1>

        {/* LOCATION BUTTON */}

        <button

          onClick={getLocation}

          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {loading
            ? "Fetching Location..."
            : "📍 Use Current Location"}
        </button>

        {/* INPUTS */}

        <input
          type="text"
          placeholder="Full Name"

          value={fullName}

          onChange={(e) =>
            setFullName(e.target.value)
          }

          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Phone Number"

          value={phone}

          onChange={(e) =>
            setPhone(e.target.value)
          }

          style={inputStyle}
        />

        <input
          type="text"
          placeholder="House Number"

          value={house}

          onChange={(e) =>
            setHouse(e.target.value)
          }

          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Flat / Door Number"

          value={flat}

          onChange={(e) =>
            setFlat(e.target.value)
          }

          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Near Place"

          value={near}

          onChange={(e) =>
            setNear(e.target.value)
          }

          style={inputStyle}
        />

        <input
          type="text"
          placeholder="City"

          value={city}

          onChange={(e) =>
            setCity(e.target.value)
          }

          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Pincode"

          value={pincode}

          onChange={(e) =>
            setPincode(e.target.value)
          }

          style={inputStyle}
        />

        {/* FULL ADDRESS */}

        <textarea

          value={address}

          onChange={(e) =>
            setAddress(e.target.value)
          }

          placeholder="Full Delivery Address"

          rows="4"

          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            resize: "none"
          }}
        />

        {/* SAVE BUTTON */}

        <button

          onClick={saveAddress}

          style={{
            width: "100%",
            padding: "15px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          Save Address 💾
        </button>

        {/* PAYMENT BUTTON */}

        <button
          onClick={() =>
            navigate("/payment")
          }

          style={{
            width: "100%",
            padding: "16px",
            background: "#ffb400",
            color: "black",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Proceed to Payment 💳
        </button>

      </div>

    </div>

  );
}

// INPUT STYLE

const inputStyle = {

  width: "100%",

  padding: "15px",

  marginBottom: "20px",

  borderRadius: "12px",

  border: "none",

  fontSize: "16px"

};

export default Address;
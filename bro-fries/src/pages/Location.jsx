import { useState } from "react";

function Location() {

  const [location, setLocation] =
    useState(null);

  const [place, setPlace] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const getLocation = () => {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        setLocation({
          latitude,
          longitude,
        });

        // FETCH PLACE NAME 🔥

        const response =
          await fetch(

            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

          );

        const data =
          await response.json();

        setPlace(
          data.address.city ||

          data.address.town ||

          data.address.village ||

          data.address.state ||

          "Location Found"
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

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
        padding: "20px",
        textAlign: "center"
      }}
    >

      <h1
        style={{
          color: "#ffb400",

          fontSize:
            window.innerWidth < 768
              ? "38px"
              : "60px",

          marginBottom: "20px"
        }}
      >
        📍 Live Location
      </h1>

      <button
        onClick={getLocation}

        style={{
          padding: "15px 35px",
          border: "none",
          borderRadius: "12px",
          background: "#ffb400",
          color: "black",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",

          boxShadow:
            "0 0 20px rgba(255,180,0,0.4)"
        }}
      >
        {loading
          ? "Fetching..."
          : "Get Current Location"}
      </button>

      {location && (

        <div
          style={{
            marginTop: "40px",
            background: "#111827",
            padding: "30px",
            borderRadius: "25px",

            width:
              window.innerWidth < 768
                ? "100%"
                : "500px",

            boxShadow:
              "0 0 30px rgba(255,180,0,0.15)"
          }}
        >

          {/* PLACE NAME */}

          <h2
            style={{
              color: "#ffb400",
              marginBottom: "20px"
            }}
          >
            📍 {place}
          </h2>

          <h3>
            Latitude:
            {location.latitude}
          </h3>

          <h3>
            Longitude:
            {location.longitude}
          </h3>

          <a
            href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}

            target="_blank"

            rel="noreferrer"

            style={{
              color: "#ffb400",
              fontSize: "22px",
              display: "inline-block",
              marginTop: "20px"
            }}
          >
            Open In Google Maps 🗺️
          </a>

        </div>

      )}

    </div>

  );
}

export default Location;
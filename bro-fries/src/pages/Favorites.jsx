function Favorites() {

  const favorites = JSON.parse(
    localStorage.getItem(
      "favorites"
    )
  ) || [];

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        padding: "40px"
      }}
    >

      <h1
        style={{
          color: "#ffb400",
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        ❤️ Favorite Items
      </h1>

      {

        favorites.length === 0

          ? (

            <h2
              style={{
                textAlign: "center"
              }}
            >
              No Favorites Added
            </h2>

          )

          : (

            <div
              style={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >

              {favorites.map((item) => (

                <div
                  key={item.name}
                  style={{
                    background: "#111827",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "300px"
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "15px"
                    }}
                  />

                  <h2>{item.name}</h2>

                  <h3
                    style={{
                      color: "#ffb400"
                    }}
                  >
                    ₹{item.price}
                  </h3>

                </div>

              ))}

            </div>

          )

      }

    </div>

  );
}

export default Favorites;
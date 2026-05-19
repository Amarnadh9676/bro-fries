import {
  useState,
  useEffect
} from "react";

function Orders() {

  // ORDERS STATE

  const [orders, setOrders] =
    useState(() => {

      const savedOrders =
        localStorage.getItem(
          "orders"
        );

      return savedOrders
        ? JSON.parse(savedOrders)
        : [];

    });

  // SAVE ORDERS TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);

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
          textAlign: "center",
          color: "#ffb400",
          marginBottom: "40px",
          fontSize: "50px"
        }}
      >
        📦 Order History
      </h1>

      {

        orders.length === 0

          ? (

            <h2
              style={{
                textAlign: "center",
                color: "#cbd5e1"
              }}
            >
              No Orders Yet
            </h2>

          )

          : (

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px"
              }}
            >

              {orders.map(
                (order, index) => (

                  <div
                    key={index}
                    style={{
                      background:
                        "#111827",

                      padding: "25px",

                      borderRadius:
                        "25px",

                      boxShadow:
                        "0 0 20px rgba(255,180,0,0.2)"
                    }}
                  >

                    <h2
                      style={{
                        color: "#ffb400"
                      }}
                    >
                      Order #{index + 1}
                    </h2>

                    <p>
                      Date:
                      {" "}
                      {order.date}
                    </p>

                    <div
                      style={{
                        marginTop: "20px"
                      }}
                    >

                      {order.items.map(
                        (item) => (

                          <div
                            key={item.name}
                            style={{
                              marginBottom:
                                "15px",

                              padding: "15px",

                              background:
                                "#1e293b",

                              borderRadius:
                                "15px"
                            }}
                          >

                            <h3>
                              🍔 {item.name}
                            </h3>

                            <p>
                              Quantity:
                              {" "}
                              {item.quantity}
                            </p>

                            <p>
                              Price:
                              {" "}
                              ₹
                              {item.price}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                    <h2
                      style={{
                        marginTop: "20px",
                        color: "#22c55e"
                      }}
                    >
                      Total:
                      {" "}
                      ₹
                      {order.total}
                    </h2>

                  </div>

                )
              )}

            </div>

          )

      }

    </div>

  );
}

export default Orders;
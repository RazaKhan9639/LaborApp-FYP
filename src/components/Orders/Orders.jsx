import React, { useState, useEffect } from "react";
import "./orders.css";
import data from './ordersData'

function OrdersComponent({ currentUser }) {
  const [orders, setOrders] = useState(data.orders);

  // useEffect(() => {
  //   // fetch orders data from API endpoint
  //   fetch(`https://api.example.com/orders?customerId=${currentUser.id}`)
  //     .then(response => response.json())
  //     .then(data => setOrders(data.orders))
  //     .catch(error => console.error(error));
  // }, [currentUser.id]);

  function handleOrderUpdate(orderId, newDate, newTime) {
    // update order data in API endpoint
    // fetch(`https://api.example.com/orders/${orderId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     date: newDate,
    //     time: newTime
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // update the orders state with the updated order data
    //     const updatedOrders = orders.map(order => {
    //       if (order.id === data.id) {
    //         return data;
    //       } else {
    //         return order;
    //       }
    //     });
    //     setOrders(updatedOrders);
    //   })
    //   .catch(error => console.error(error));
  }

  return (
    <div className="orders-container">
      <h2 style={{marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Your Orders</h2>
      {orders.length > 0 ? (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Service Provider</th>
              <th>Service</th>
              <th>Order Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.date}</td>
                <td>{order.time}</td>
                <td>{order.serviceProviderName}</td>
                <td>{order.service}</td>
                <td>{order.orderTotal}</td>
                <td>{order.isCompleted ? "Completed" : "Not completed"}</td>
                <td>
                  <button onClick={() => handleOrderUpdate(order.id, "2023-05-10", "13:00")} className="reSchedual">Reschedule</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>You have no orders.</p>
      )}
    </div>
  );
}

export default OrdersComponent;


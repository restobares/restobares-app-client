import React from "react";


export default function ActiveOrders({ orderId, tableNumber, orderTime, oderItems, comments}) {

  const dummyOrders = [
    {
      orderId: 1,
      tableNumber: 2,
      orderTime: "15:48",
      orderItems: ["hamburguesa de Pollo", "ensalada"],
      comments: "la ensalada sin aceite de oliva"
    },
    {
      orderId: 2,
      tableNumber: 4,
      orderTime: "15:50",
      orderItems: ["budin"],
      comments: ""
    }
  ];
  
  return (
    <>
      
      {
        dummyOrders.map((order) => {
          return (
            <div key={order.orderId}>
              <p>Mesa: {order.tableNumber}</p>
              <p>Hora del pedido: {order.orderTime}</p>
              {order.orderItems.map((item) => {
                return (
                  <p>{item}</p>
                )
              })}
              {order.comments !== "" &&
                <p>{order.comments}</p>
              }
            </div>
          )
        })
      }
    </>
  )
} 
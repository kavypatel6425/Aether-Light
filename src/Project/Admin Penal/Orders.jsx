import React from "react";
import { Table } from "react-bootstrap";

function Orders() {
  const orders = [
    { id: 1, user: "John", product: "LED Light", status: "Pending" },
  ];

  return (
    <Table bordered className="mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Product</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.user}</td>
            <td>{o.product}</td>
            <td>{o.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Orders;

import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "LED Light", price: 500 },
  ]);

  const deleteProduct = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <Table bordered className="mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>₹{p.price}</td>
            <td>
              <Button variant="danger" onClick={() => deleteProduct(p.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Products;
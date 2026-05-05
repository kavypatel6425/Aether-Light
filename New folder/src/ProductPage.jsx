import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Offcanvas } from "react-bootstrap";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const { id, category } = useParams();

  // ✅ FIXED API CALL
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${category}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("API Error:", err));
  }, [id, category]);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: quantity }];
      }
    });

    setShowCart(true);
    setQuantity(1);
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => {
    const cleanPrice = Number(
      String(item.price).replace(/[^0-9.]/g, "")
    );
    return total + cleanPrice * item.qty;
  }, 0);

  // ✅ Prevent crash
  if (!product) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row bg-white shadow rounded p-4 align-items-center">

          {/* IMAGE */}
          <div className="col-md-6">
            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
              {/* <img
                src={`http://localhost:3000/${product.image}`}
                alt={product.name}
                className="img-fluid"
                style={{ maxHeight: "100%" }}
              /> */}
              <img
                src={
                  product.image?.startsWith("http")
                    ? product.image
                    : `http://localhost:3000/${product.image}`
                }
                alt={product.name}
                className="img-fluid"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <h4 className="text-muted">₹ {product.price}</h4>

            <p className="mt-3 text-secondary">
              {product.description || "No description available"}
            </p>

            {/* Quantity + Add */}
            <div className="d-flex align-items-center gap-4 mt-4">
              <div className="input-group" style={{ width: "120px" }}>
                <Button variant="secondary" onClick={decrease}>-</Button>

                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                  readOnly
                />

                <Button variant="secondary" onClick={increase}>+</Button>
              </div>

              <Button
                className="btn btn-dark"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>

              {/* ✅ FIXED LINK */}
              <Link to={`/checkout/${category}/${product.id}`}>
                <Button className="btn btn-dark">
                  Buy Now
                </Button>
              </Link>
            </div>

            <div className="mt-4 text-muted">
              <p><strong>SKU:</strong> {product.id}</p>
              <p><strong>Category:</strong> {category}</p>
            </div>
          </div>

          <div className="d-flex gap-3 mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-light p-2" style={{ width: "80px", height: "80px" }}>
                <img src="/lamp.png" alt="thumb" className="img-fluid" />
              </div>
            ))}
          </div>


        </div>


      </div>

      {/* CART SIDEBAR */}
      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item) => (
            <div key={item.id} className="d-flex mb-3 border-bottom pb-2">
              <img src={item.image} width="70" height="70" alt="" />

              <div className="ms-3 w-100">
                <h6>{item.name}</h6>
                <p>₹ {item.price}</p>

                <div className="d-flex align-items-center gap-2">
                  <Button size="sm" onClick={() => decreaseQty(item.id)}>-</Button>
                  <span>{item.qty}</span>
                  <Button size="sm" onClick={() => increaseQty(item.id)}>+</Button>
                </div>

                <Button
                  variant="link"
                  className="text-danger p-0 mt-1"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <>
              <h5>
                Total: ₹ {totalPrice.toLocaleString("en-IN")}
              </h5>

              <Button className="w-100 mt-2" variant="dark">
                Checkout
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
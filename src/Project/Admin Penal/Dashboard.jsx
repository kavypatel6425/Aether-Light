import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Row className="mt-4">
      {["Users", "Products", "Orders", "Revenue"].map((t, i) => (
        <Col md={3} key={i}>
          <Card className="text-center">
            <Card.Body>
              <h6>{t}</h6>
              <h3>{i === 3 ? "₹50K" : 10}</h3>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
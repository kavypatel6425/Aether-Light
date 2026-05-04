import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser, fetchUsers } from "../Slice/UserSlice";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  // 🔥 Fetch single user and fill form
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setFormData(res.data); // ✅ fills input
      })
      .catch((err) => console.log(err));
  }, [id]);

  // 🔥 Update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updateUser(formData));
    await dispatch(fetchUsers()); // refresh list

    navigate("/users");
  };

  // 🔥 Prevent empty render
  if (!formData.name) return <h3>Loading...</h3>;

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <h3>Edit User</h3>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </Form.Group>

      <Button type="submit" variant="success">
        Update
      </Button>
    </Form>
  );
}
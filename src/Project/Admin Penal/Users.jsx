import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../Slice/UserSlice";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((s) => s.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Table striped bordered className="mt-4">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => navigate(`/edit-user/${u.id}`)}
              >
                Edit
              </Button>

              <Button
                variant="danger"
                onClick={() => dispatch(deleteUser(u.id))}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
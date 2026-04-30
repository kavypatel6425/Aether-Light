import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../Slice/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import Nevbar from "../Navbar";

function Admin() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
        alert("User Deleted");
    };

    return (
        <>
            <Nevbar />

            <h2>User List</h2>

            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>

                    <Link to={`/editApi/${user.id}`}>
                        <button>Edit</button>
                    </Link>

                    <button onClick={() => handleDelete(user.id)}>
                        Delete
                    </button>

                    <hr />
                </div>
            ))}
        </>
    );
}

export default Admin;
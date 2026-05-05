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

























// import React, { useState } from "react";
// import { Outlet, NavLink } from "react-router-dom";
// import { Nav, Form } from "react-bootstrap";

// function AdminLayout() {
//   const [dark, setDark] = useState(true);

//   const style = {
//     background: dark ? "#111" : "#f5f5f5",
//     color: dark ? "white" : "black",
//   };

//   return (
//     <div className="d-flex" style={{ minHeight: "100vh" }}>
      
//       {/* Sidebar */}
//       <div style={{ width: 250, background: "#000", padding: 20 }}>
//         <h4 className="text-warning">Admin</h4>

//         <Nav className="flex-column">
//           <NavLink to="/" className="text-white">Dashboard</NavLink>
//           <NavLink to="/users" className="text-white">Users</NavLink>
//           <NavLink to="/products" className="text-white">Products</NavLink>
//           <NavLink to="/orders" className="text-white">Orders</NavLink>
//         </Nav>
//       </div>

//       {/* Main */}
//       <div style={{ flex: 1, ...style, padding: 20 }}>
//         <div className="d-flex justify-content-between">
//           <h2>Admin Panel</h2>
//           <Form.Check
//             type="switch"
//             label={dark ? "Dark" : "Light"}
//             checked={dark}
//             onChange={() => setDark(!dark)}
//           />
//         </div>

//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;
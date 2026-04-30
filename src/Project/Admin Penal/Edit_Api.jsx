import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Edit_Api() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    });


    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`).then((res) => setValue(res.data))
    }, [])

    console.log(value);


    const Update = () => {
        axios.put(`http://localhost:3000/user/${id}`, value)
        .then(() => {
            alert("Data updated successfully!");
        })
        
        navigate("/admin")
    }
    return (
        <>
            <p>Id :{id}</p>
            Name :
            <input
                type="text"
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
            /> <br /><br />

            Email :
            <input
                type="email"
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
            />  <br /><br />
            Password :
            <input
                type="password"
                value={value.password}
                onChange={(e) => setValue({ ...value, password: e.target.value })}
            /> <br /><br />


            <button onClick={Update}>Update</button>

        </>
    )
}

export default Edit_Api



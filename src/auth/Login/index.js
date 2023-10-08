import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("token")){
            history.push("/dashboard");
        }
    });

    const handleClick = () => {
        axios.post("http://localhost:3001/login", {
            email: email,
            password: password
        }).then((response) => response).then((data) => {
            localStorage.setItem("token", data.data.token);
        })
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-16 rounded shadow-2xl w-2/3">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">Login</h2>
                <form>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input type="email" 
                               className="border border-gray-400 p-2 w-full rounded"
                               value={email} onChange={e => setEmail(e.target.value) } />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password" 
                               className="border border-gray-400 p-2 w-full rounded"
                               value={password} onChange={e => setPassword(e.target.value) }  />
                    </div>
                    <button
                        onClick={handleClick} 
                        className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold p-3 rounded">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
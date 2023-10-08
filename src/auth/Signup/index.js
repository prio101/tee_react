import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("token")){
            history.push("/dashboard");
        }
    });

    const handleClick = () => {
        axios.post("http://localhost:3001/signup", {
            data: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }).then((response) => response).then((data) => {
            console.log(data.data.token)
            localStorage.setItem("token", data.data.token);
        })
    }

    return (
        <div className=' m-20 shadow-lg border border-blue-300 rounded-md p-10'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input type="email" 
                   className="border border-gray-400 p-2 w-full rounded"
                   value={email} onChange={e => setEmail(e.target.value) } />

            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input type="password" 
                   className="border border-gray-400 p-2 w-full rounded"
                   value={password} onChange={e => setPassword(e.target.value) }  />
            
            <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-600">Password Confirmation</label>
            <input type="password" 
                   className="border border-gray-400 p-2 w-full rounded"
                   value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value) }  />

            <button onClick={handleClick}
                    className="my-2 block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold p-3 rounded">Signup</button>
        </div>
    )
}

export default Signup;
import React from "react";
import Products from "../products";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const DashBoard = () => {
    return (
        <div>
            <h1 className="text-xl text-blue-400">Dashboard For Admin</h1>
            <Link to="/dashboard/create-product" className="text-blue-400">Create Product</Link>
            <Products />
        </div>
    )
}

export default DashBoard;
import axios from "axios";
import React, { useEffect,useState } from "react";

const Seach = ({searchClick}) => {
    const [title, setTitle] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [buy, setBuy] = useState("");
    const [rent, setRent] = useState("");
    const [min_price, setMinPrice] = useState("");
    const [max_price, setMaxPrice] = useState("");

    const [categories, setCategoeies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/categories").then((response) => response.data).then((data) => {
            setCategoeies(data.data);
        })
    }, []);

    const handleClick = () => {
        axios.get("http://localhost:3001/api/v1/products/", {
            params: {
                title: title,
                category: categoryId,
                buy: buy,
                rent: rent,
                min_price_range: min_price,
                max_price_range: max_price
            }
        }).then((response) => response).then((data) => {
            searchClick(data.data);
        })
    }

    return (
        <>
            <div className="p-3 rounded-md border border-gray-500 shadow-md mx-2">
                <label className="m-2">Title</label>
                <input className="m-2 border-gray-500 border" type="text" name="title" value={title} onChange={ e => setTitle(e.target.value) } />

                <label className="m-2">Category</label>
                <select className="m-2 border-gray-500 border" name="category_id" onChange={e=> setCategoryId(e.target.value) }>
                    <option value="">Select Category</option>
                    { categories.length > 0 && categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.attributes.name}</option>
                    ))}
                </select>

                <label className="m-2">Buy</label>
                <input className="m-2 border-gray-500 border" type="checkbox" name="buy" value={buy} onChange={ e => setBuy(e.target.value) }/>

                <label className="m-2">Rent</label>
                <input className="m-2 border-gray-500 border" type="checkbox" name="rent" value={rent} onChange={ e => setRent(e.target.value) }/>
                

                <label className="m-2">Min Price</label>
                <input className="m-2 border-gray-500 border" type="number" name="min_price" value={min_price} onChange={ e => setMinPrice(e.target.value) }/>

                <label className="m-2">Max Price</label>
                <input className="m-2 border-gray-500 border" type="number" name="max_price" value={max_price} onChange={ e => setMaxPrice(e.target.value) }/>
                <button onClick={handleClick} className="bg-blue-400 p-3 text-white rounded-md">Search</button>
            </div>
        </>
    )
}

export default Seach;
import axios from 'axios';
import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";

const BuyButton = ({data}) => {
    const {id} = useParams();
    const [status, setStatus] = useState("Buy");

    const handleBuy = () => {
        console.log("Price",data)
        let body = {  
            product_id: id,
            user_id: 11,
            status: "ordered",
            total: data.attributes.price,
        }

        axios.post("http://localhost:3001/api/v1/orders", {    
                data: body,
            }).then((response) => response).then((data) => {
                
            }
        );
    }

    return (
        <div onClick={handleBuy} className='text-white bg-blue-400 cursor-pointer p-3 w-20 text-center'>
            {status}
        </div>
    );
}

export default BuyButton;

import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


const RentButton = () => {
    const {id} = useParams();
    const [modal, setModal] = useState(false);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const showModal = () => {
        setModal(true);
    }

    const handleRent = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/v1/rents', {
            data: {
                product_id: id,
                user_id: 11,
                status: "rented",
                price: 100,
                start_date: startDate,
                end_date: endDate
            }
        }).then((response) => response).then((data) => {
            console.log("Rent Data", data)
        })
        console.log("Rent")
    }

    return (
        <>
            

            <div className='flex'>
                <button onClick={showModal} className='m-4 p-4 bg-red-400 text-white '>Rent</button>
            </div> 

            {modal ? 
            <>
                <div className='p-10 rounded-md shadow-lg'>
                    <label className='font-bold'>Start Date</label>
                    <input type="date" 
                           name="start_date" 
                           id="start_date"
                           onChange={(e) => setStartDate(e.target.value)}
                           className='p-3 border-gray-400' />
                    <label className='font-bold'>End Date</label>
                    <input type="date" 
                           name="end_date" 
                           id="end_date"
                           onChange={(e) => setEndDate(e.target.value)}
                           className='p-3 border-gray-400' />
                    <button onClick={handleRent} className='m-4 p-4 bg-red-400 text-white '>Submit</button>
                </div>
                
            </>
            : ''}
        </>
       
    );
}

export default RentButton;
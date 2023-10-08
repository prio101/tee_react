import React, { useEffect } from 'react';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import axios from 'axios';
const CreateProduct = () => {
    const [steps, setSteps] = useState(1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            window.location.href = "/login";
        }
    });

    const stepOneData = (data) => {
        setSteps(2);
        setTitle(data);
    }

    const stepTwoData = (data) => {
        setSteps(2);
        setDescription(data);
    }

    const stepThreeData = (data) => {
        setSteps(2);
        setPrice(data);
        setSubmit(true)
    }


    const handleClick = () => {
        axios.post("http://localhost:3001/api/products", {
            title: title,
            description: description,
            price: price,
            status: "active"
        }).then((response) => response).then((data) => {
            console.log(data);
        })
    }


    return (
        <div>
            <h1 className='text-gray-700 text-xl'>Create Product</h1>

            <div className=' m-20 shadow-lg border border-blue-300 rounded-md p-10'>
                {steps === 1 && <StepOne stepOneData={stepOneData} />}

                {steps === 2 && <StepTwo stepTwoData={stepTwoData}/>}

                {steps === 3 && <StepThree stepThreeData={stepThreeData}/>}

                {submit && <button onClick={handleClick} className='text-center text-gray-600 text-2xl'>Submit</button>}
            </div>
        </div>
    );
}

export default CreateProduct;
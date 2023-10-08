import React, {useState} from 'react';

const StepFour = ({stepFourData}) => {
    const [price, setPrice] = useState("");
    

    const handleClick = (e) => {
        e.preventDefault();
        
        stepFourData(price);
    }

    return (
        <div>
            <input name={price} value={price} onChange={e => setPrice(e.target.value)} />
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default StepFour;
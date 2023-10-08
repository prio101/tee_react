import React, {useState} from "react";

const StepTwo = ({stepTwoData}) => {
    const [description, setDescription] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        stepTwoData();
    }

    return (
        <div>
            <input name={description} value={description} onChange={e => setDescription(e.target.value)} />
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default StepTwo;


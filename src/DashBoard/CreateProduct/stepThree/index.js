import React, {useState} from "react";

const StepThree = ({stepThreeData}) => {
    const [description, setDescription] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        stepThreeData(description);
    }

    return (
        <div>
            <input name={description} value={description} onChange={e => setDescription(e.target.value)} />
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default StepThree;


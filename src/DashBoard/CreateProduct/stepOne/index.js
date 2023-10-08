import React, {useState} from "react";

const StepOne = ({stepOneData}) => {
    const [title, setTitle] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        stepOneData(title);
    }

    return (
        <div>
            <input name={title} value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default StepOne;


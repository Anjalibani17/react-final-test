import React, { useState } from "react";

const AddUser = () => {
    const [inputValue, setInputValue] = useState("");
    const [printValue, setPrintValue] = useState([]);

   

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setPrintValue([...printValue, inputValue]);
        setInputValue("");
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter name here"
            />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {printValue.map((value, index) => (
                    <div key={index}>{value}</div>
                ))}
            </div>
        </>
    );
};

export default AddUser;

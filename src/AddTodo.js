import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoslice';

const AddTodo = () => {
   
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    //     const task = e.target.previousSibling.value.trim();
    // dispatch(addTodo(task));
    // e.target.previousSibling.value = "";
    };

    return (
        
        <form onSubmit={handleSubmit}>
             <h2>todo List</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    );
};

export default AddTodo;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../api'

function AddTodo({ add }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit task", text)
        await add(text)
        setText("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='todo' value={text} onChange={handleChange} />
                <button type='submit'>ADD</button>
            </form>
        </div>
    )

}

export default AddTodo
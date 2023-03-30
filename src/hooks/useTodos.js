import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API_URL } from '../api';

function useTodos() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        return await axios.get(`${API_URL}`)
            .then((res) => {
                const responseTodos = res.data;
                console.log("response todos:", responseTodos)
                setTodos(responseTodos);
            })
    }

    useEffect(() => {
        axios.get(`${API_URL}`)
            .then((res) => {
                const responseTodos = res.data;
                console.log("response todos:", responseTodos)
                setTodos(responseTodos);
            })
    }, [])

    const deleteTodo = async (id) => {
        const res = await axios.delete(`${API_URL}/${id}`);
        await fetchTodos()
    }

    const addTodo = async (task) => {
        await axios.post(API_URL, { task: task, done: false })
        await fetchTodos();
    }

    return { todos, deleteTodo, addTodo }
}

export default useTodos
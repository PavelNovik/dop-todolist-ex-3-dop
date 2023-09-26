import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type PropsType =
    {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

function App() {
    const [todos, setTodos] = useState<Array<PropsType>>([])

    const axiosRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setTodos(res.data)
            })
    }

    // axios.get('https://jsonplaceholder.typicode.com/todos')
    //     .then((res) => {
    //         setTodos(res.data)
    //     })

    useEffect(() => {
        axiosRequest()
    }, []);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then((res) => {
    //             setTodos(res.data)
    //         })
    // }, []);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setTodos(json))
    // }, [])

    const onClickHandler = () => {
        setTodos([])
    }
    const redisplayDataHandler = () => {
        axiosRequest()
    }

    const mapTodos = todos.map(el => {
        return (
            <li key={el.id}>
                <span>{el.id} - </span>
                <span>{el.title}</span>
                <span>{el.completed}</span>
            </li>
        )
    })
    return (
        <div className="App">
            <button onClick={onClickHandler}>CLEAN POSTS</button>
            <button onClick={redisplayDataHandler}>Redisplay Data</button>
            <ul>
                {mapTodos}
            </ul>
        </div>
    );
}

export default App;


import React, { useRef } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import CardItem from './CardItem';
import { TaskForm } from './Form';

/* 
    Recibe dos estados, el estado y el action
    action(type, payload)
*/
const generateId = () => Math.random().toString(36).substring(2, 18);

const taskReducer = (state, action) => {

    switch (action.type) {
        case "add":
            const newTask = {
                ...action.payload,
                id: generateId(),
                active: false,
                completed: false,
            };
            console.log("Action add", newTask);
            return [...state, newTask]
    
        case "update":
                const taskPayload = action.payload
                const taskUpdate = state.map(task => {
                    if(task.id === taskPayload.id) {
                        return {
                            ...task,
                            ...taskPayload
                        }
                    }
                    return task
                })

                return taskUpdate
        default:
            return state
    }
}


export const TaskManager = () => {
    const formRef = useRef(null)
    const [inputValues, setInputValues, handleChangeInputValue, reset] = useForm({}, formRef)
    /* const [tasks, setTasks] = useState([{}, {}]) */

    const [tasks, dispacth] = useReducer(taskReducer,[]) // dispatch({type, payload})
    const [action, setAction] = useState("create")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(action === "create") {
            dispacth({
                type: "add",
                payload: inputValues
            })
        }

        if(action === "update") {
            dispacth({
                type: "update",
                payload: inputValues
            })
        }
        /* setTasks([...tasks, inputValues]) */
        reset()
    }

    const handleUpdate = (id) => {
        let taskFound = tasks.find(task => task.id === id);
        setInputValues(taskFound)
        setAction("update")
    }


    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={12} lg={3}>
                    <TaskForm 
                        onChange={handleChangeInputValue}
                        inputValues={inputValues}
                        onSubmit={handleSubmit}
                        refForm={formRef}
                        action={action}
                    />
                </Col>
                <Col sm={12} lg={9}>
                    {                    
                        tasks.map((task) => {
                            return <CardItem key={task.id} task={task} handleUpdate={handleUpdate}/>
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
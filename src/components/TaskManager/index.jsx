import React, { useEffect, useRef, useReducer, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { taskReducer } from '../Reducers/taskReducer';
import { useForm } from '../../hooks/useForm';
import { filterTask } from '../constants';
/* Components */
import CardItem from './CardItem';
import { TaskForm }from './Form';
import TaskFilter from './TaskFilter';


/* 
    Recibe dos estados, el estado y el action
    action(type, payload)
*/


console.log(taskReducer);

export const TaskManager = () => {
    const initialState = {
        id: "",
        title: "",
        image: "",
        description: "",
        active: false,
        completed: false,
        date: ""
    }

    const formRef = useRef(null)
    const [inputValues, setInputValues, handleChangeInputValue, reset] = useForm(initialState, formRef)
    const taskStore = localStorage.getItem("tasks")
    const initialStateReducer = JSON.parse(taskStore) || []
    const [tasks, dispacth] = useReducer(taskReducer, initialStateReducer) // dispatch({type, payload})
    const [action, setAction] = useState("create")
    const [statusFilter, setStatusFilter] = useState(filterTask.ALL)

    console.log(useReducer);
    console.log(tasks);
    console.log(dispacth);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (action === "create") {
            dispacth({
                type: "add",
                payload: inputValues
            })
        }

        if (action === "update") {
            dispacth({
                type: "update",
                payload: inputValues
            })
        }
        reset()
        setAction("create")
    }

    useEffect(() => {
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleUpdate = (id) => {
        let taskFound = tasks.find(task => task.id === id);
        setInputValues(taskFound)
        setAction("update")
    };

    const handleDelete = (id) => {
        dispacth({ type: "delete", payload: id })
    }

    const handleTaskActive = (id) => {
        dispacth({ type: "toggle_active", payload: id })
    }

    const handleTaskCompleted = (id) => {
        dispacth({ type: "toggle_completed", payload: id })
    }

    const handleStatusFilter = (status = "") => {
        setStatusFilter(status)
    }

    const handleReset = () => {
        reset()
    }

    const filterTaskMethod = (task) => {
        switch (statusFilter) {
            case filterTask.PROCESS:
                return task.active === true
            case filterTask.PENDING:
                return task.active === false
            case filterTask.COMPLETED:
                return task.completed === true
            default:
                return task
        }
    }

    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={12} lg={{ span: 6, offset: 5 }}>
                    <TaskFilter onChangeFilter={handleStatusFilter} />
                </Col>
                <Col sm={12} lg={3}>
                    <TaskForm
                        onChange={handleChangeInputValue}
                        inputValues={inputValues}
                        onSubmit={handleSubmit}
                        refForm={formRef}
                        action={action}
                        onReset={handleReset}
                    />
                </Col>
                <Col sm={12} lg={9}>
                    {
                        tasks.filter(filterTaskMethod)

                    }
                    
                    {
                        tasks.map((task) => {
                            return <CardItem
                                key={task.id}
                                task={task}
                                handleUpdate={handleUpdate}
                                onDelete={handleDelete}
                                onActive={handleTaskActive}
                                onCompleted={handleTaskCompleted}
                            />
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
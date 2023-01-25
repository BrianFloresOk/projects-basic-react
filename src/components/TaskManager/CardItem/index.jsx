import React from 'react';
import {Button, Form, Image, Toast } from 'react-bootstrap';
import clases from './styles.module.css'


function CardItem({task, handleUpdate, onDelete, onActive, onCompleted}) {

    return (
        
        <Toast onClose={() => onDelete(task.id)} bg={task.active? "success" : null}>
            <Toast.Header className="rounded mx-2">
                <strong className="me-auto">{task.title}</strong>
                <small>{task.date}</small>
            </Toast.Header>
            <Toast.Body>
                    <Image
                        fluid
                        src={task.image}
                        alt="imagen"
                        className={clases["img-304"]}
                    />
                <p className='d-inline-block ps-2'>{task.description}</p>

                <Form.Group>
                    <Form.Check
                        name="active"
                        id={`active-${task.id}`}
                        onClick={() => onActive(task.id)}
                        checked={task.active}
                        className="m-3 d-flex gap-1 d-inline-flex"
                    >
                    </Form.Check>
                    <Form.Label htmlFor={`active-${task.id}`}>Pendiente</Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        name="completed"
                        id={`completed-${task.id}`}
                        onClick={() => onCompleted(task.id)}
                        checked={task.completed}
                        className="m-3 d-flex gap-1 d-inline-flex"
                    >
                    </Form.Check>
                    <Form.Label htmlFor={`completed-${task.id}`}>Completado</Form.Label>
                </Form.Group>
                <Button 
                    variant='outline-dark'
                    onClick={() =>handleUpdate(task.id)}
                >Editar</Button>

            </Toast.Body>
        </Toast>
    );
}

export default CardItem;
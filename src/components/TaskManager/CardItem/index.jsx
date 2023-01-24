import React from 'react';
import {Button, Form, Image, Toast } from 'react-bootstrap';
import clases from './styles.module.css'

function CardItem({task, handleUpdate}) {
    console.log(task);
    return (
        
        <Toast>
            <Toast.Header>

                <strong className="me-auto">{task.title}</strong>
                <small>11 mins ago</small>
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
                        id='active'
                        className="m-3 d-flex gap-1 d-inline-flex"
                    >
                    </Form.Check>
                    <Form.Label htmlFor='active'>Pendiente</Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        name="completed"
                        id='completed'
                        className="m-3 d-flex gap-1 d-inline-flex"
                    >
                    </Form.Check>
                    <Form.Label htmlFor="completed">Completado</Form.Label>
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
import React from 'react';
import { Button, Form } from 'react-bootstrap';


export const TaskForm = function ({onChange, inputValues, onSubmit, refForm}) {
    return (
        <Form onSubmit={onSubmit} ref={refForm}>
            <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Ingresar título" 
                    value={inputValues.title}
                    onChange={onChange}
                    name='title'
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Ingresar una URL" 
                    value={inputValues.image}
                    onChange={onChange}
                    name='image'
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as={"textarea"}
                    type='text'
                    placeholder="Ingrese una descripción" 
                    value={inputValues.description}
                    onChange={onChange}
                    name='description'
                    />
            </Form.Group>

            <Button variant="primary" type="submit" className='mx-2'>
                Agregar
            </Button>
            <Button variant="danger" type="reset">
                Reiniciar
            </Button>
        </Form>
    )
}
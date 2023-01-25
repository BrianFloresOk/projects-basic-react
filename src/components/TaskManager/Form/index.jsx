import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import clases from './styles.module.css'

export const TaskForm = function ({onChange, inputValues, onSubmit, refForm, action, onReset}) {
    return (
        <Form onSubmit={onSubmit} ref={refForm}>
            <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Ingresar título" 
                    value={inputValues.title}
                    onChange={onChange}
                    onReset={onReset}
                    name='title'
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Image src={inputValues.image} alt={inputValues.image} className={clases["img-preview"]}/>
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
                    defaultValue={inputValues.description}
                    onChange={onChange}
                    name='description'
                    />
            </Form.Group>

            <Button variant="primary" type="submit" className='mx-2'>
                {
                    action === "create" ? "Agregar" : "Editar"
                }
            </Button>
            <Button variant="danger" type='reset'>
                {
                    action === "create" ? "Borrar" : "Cancelar"
                }
            </Button>
        </Form>
    )
}
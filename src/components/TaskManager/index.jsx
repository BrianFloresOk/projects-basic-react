import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { TaskForm } from './Form';

export const TaskManager = () => {
    const formRef = useRef(null)
    const [inputValues, setInputValues, handleChangeInputValue, reset] = useForm({}, formRef)

    const handleSubmit = (e) => {
        e.preventDefault();
        reset()
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
                    />
                </Col>
                <Col sm={12} lg={9}>
                    Contenido
                </Col>
            </Row>
        </Container>
    )
}
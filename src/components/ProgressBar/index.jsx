import React, { useState, useRef } from 'react';
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, FormControl, Modal } from 'react-bootstrap';
import { ProgressBar2 } from './ProgressBar2';

export const ProgressBar = () => {
    const [now, setNow] = useState(0);
    const [intervalState, setIntervalState] = useState(null)
    const [btnDisable, setBtnDisable] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const inputRef = useRef(null);

    const handleDownload = () => {
        const valueInput = inputRef.current?.value;
        const isValueValid = !isNaN(valueInput) && valueInput > 0 && valueInput <= 100;
        setShowModal(!isValueValid)

        /* Comprobamos si hay un intervalo activo */
        if(intervalState) {
            clearInterval(intervalState)
        }

        /* Si el valor del input es válido se activa la barra */
        if(isValueValid) {
            const interval = setInterval(() => {
                setNow((now) => {
                    if (now === Number(valueInput)) {
                        clearInterval(interval)
                        return now
                    }
                    return now + 1
                })
            }, 200);
            setIntervalState(interval)
        } else {
            handleReset()
        }
    };

    const handleReset = () => {
        setNow(0)
        clearInterval(intervalState)
    }

    const handleChange = ({ target: { value } }) => {
        /* 
            !! = Convierte en booleano y niega el valor
        */
        setBtnDisable(!!!+value)
    }

    const handleClose = () => setShowModal(false)


    return (
        <Container>
            <Row className="mt-5">
                <Col
                    xs={12}
                    md={{ span: 6, offset: 3 }}
                    className="text-center"
                >
                    <Card style={{ width: '40rem' }} className="m-auto">
                        <Card.Body>
                            <Card.Title>Progress Bar</Card.Title>
                            <BarProgress animated now={now} label={`${now}%`} variant="danger" />
                            
                            <ProgressBar2
                                now={now}
                                label={now}
                            ></ProgressBar2>
                            
                            <FormControl
                                placeholder='Ingresar porcentaje'
                                className='my-3'
                                ref={inputRef}
                                onChange={handleChange}
                            >
                            </FormControl>

                            <Button variant="primary"
                                onClick={handleDownload}
                                disabled={btnDisable}
                            >
                                Descargar
                            </Button>
                            <Button variant="danger" onClick={handleReset}>
                                Reiniciar
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <h2 className="text-danger text-center py-4">
                                ERROR.. ❌
                            </h2>
                            <p className="text-muted fs-4 text-center">
                                Solo se acepta valores numéricos. El valor debe ser
                                mayor a 0 y menor a 100.
                            </p>
                        </>
                    </Modal.Body>
                </Modal>

            </Row>
        </Container>
    )
}
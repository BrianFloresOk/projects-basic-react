import React, { useState, useRef } from 'react';
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, FormControl } from 'react-bootstrap';

export const ProgressBar = () => {
    const [now, setNow] = useState(0);
    const inputRef = useRef(null)

    const handleDownload = () => {
        const valueInput = inputRef.current.value
        const interval = setInterval(() => {
            setNow((now) => {
                if(now === Number(valueInput)) {
                    clearInterval(interval)
                    return now
                }
                return now + 1
            })
        }, 200);
    };

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
                                <BarProgress animated now={now} label={`${now}`} variant="danger"/>
                            <FormControl
                                placeholder='Ingresar porcentaje'
                                className='my-3'
                                ref={inputRef}
                            >
                            </FormControl>
                            
                            <Button variant="primary" onClick={handleDownload}>Descargar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
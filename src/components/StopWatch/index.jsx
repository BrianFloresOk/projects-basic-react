import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'


const oneOrTwoNumber = (num) => num > 9 ? num : `0${num}`;
const pluralSingular = (num) => num > 0 && num > 1? "s" : ""

export const StopWatch = () => {
    const [ seconds, setSeconds ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)
    const [ hours, setHours ] = useState(0)

    /* const [intervalState, setIntervalState] = useState(null) */
    const [ stateIntervalSeconds, setStateIntervalSeconds ] = useState(null)
    const [ stateIntervalMinutes, setStateIntervalMinutes ] = useState(null)
    const [ stateIntervalHours, setStateIntervalHours ] = useState(null)
    const [ velocity, setVelocity ] = useState(null)
    const [ velocityName, setVelocityName ] = useState("")

    const handleStart = () => {
        if (stateIntervalHours &&
            stateIntervalMinutes &&
            stateIntervalSeconds) {
            clearInterval(stateIntervalSeconds)
            clearInterval(stateIntervalMinutes)
            clearInterval(stateIntervalHours)
        }


        const intervalSeconds = setInterval(() => {
            setSeconds((s) => {
                if (s === 59) {
                    /*                     setMinutes(m => {
                                            if(m === 59) {
                                                setHours(h => {
                                                    return h + 1
                                                })
                                                return 0
                                            }
                                            return m + 1
                                        }) */
                    return 0
                }
                return s + 1
            })
        }, velocity ? 1000 / velocity : 1000);

        const intervalMinutes = setInterval(() => {
            setMinutes((m) => {
                if (m === 59) {
                    return 0
                }
                return m + 1
            })
        }, velocity ? 1000 / velocity : 60000);

        const intervalHours = setInterval(() => {
            setHours((h) => {
                if (h === 24) {
                    return 0
                }
                return h + 1
            })
        }, velocity ? 3600000 / velocity : 3600000);

        setStateIntervalSeconds(intervalSeconds)
        setStateIntervalMinutes(intervalMinutes)
        setStateIntervalHours(intervalHours)

    }

    const handleStop = () => {
        if (stateIntervalHours &&
            stateIntervalMinutes &&
            stateIntervalSeconds) {
            clearInterval(stateIntervalSeconds)
            clearInterval(stateIntervalMinutes)
            clearInterval(stateIntervalHours)
        }
    }

    const handleReset = () => {
        handleStop()
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }

    const handleVelocity = (vel, velName)  => {
/*         if(intervalState) {
            handleStop()
        } */
        setVelocity(vel)
        setVelocityName(velName)
    }

    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">

                    <ButtonGroup aria-label="Basic example" className='d-block my-1'>
                        <Button 
                            variant="outline-dark"
                            className={velocityName === "min" && "active"}
                            onClick={() => handleVelocity(0, "min")}
                        >Min</Button>
                        <Button
                            variant="outline-dark"
                            className={velocityName === "x2" && "active"}
                            onClick={() => handleVelocity(2, "x2")}
                            >x2</Button>
                        <Button 
                            variant="outline-dark"
                            className={velocityName === "x4" && "active"}
                            onClick={() => handleVelocity(4, "x4")}
                        >x4</Button>
                        <Button 
                            variant="outline-dark"
                            className={velocityName === "x6" && "active"} 
                            onClick={() => handleVelocity(6)}
                            >x6</Button>
                        <Button 
                            variant="outline-dark"
                            className={velocityName === "x10" && "active"} 
                            onClick={() => handleVelocity(10)}
                            >Max</Button>
                    </ButtonGroup>

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-success" onClick={handleStart}
/*                             disabled={
                                stateIntervalHours &&
                                stateIntervalMinutes &&
                                stateIntervalSeconds
                            } */
                        >Iniciar</Button>
                        <Button variant="outline-danger" onClick={handleStop}>Detener</Button>
                        <Button variant="outline-dark" onClick={handleReset}>Reiniciar</Button>
                    </ButtonGroup>
                    <Card style={{ width: '18rem' }} className="m-auto my-3">
                        <Card.Body>
                            <Card.Title>Stopwatch timer</Card.Title>
                            <Card.Text>
                                {oneOrTwoNumber(hours)} horas - {oneOrTwoNumber(minutes)} minuto{pluralSingular(minutes)} - {oneOrTwoNumber(seconds)} segundo{pluralSingular(seconds)}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>{oneOrTwoNumber(hours)}:{oneOrTwoNumber(minutes)}:{oneOrTwoNumber(seconds)}</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
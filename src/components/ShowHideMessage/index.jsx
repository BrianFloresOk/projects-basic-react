import { useState } from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useShow } from "../../hooks/useShow"

export const ShowHideMessage = () => {
/*     const [show, setShow] = useState(false);

    const handleShowMessage = () => setShow(!show); */
    const {show, handleShowMessage} = useShow(false)

    let titulo = "Mostrar mensaje"
    if(show) {
        titulo = "Ocultar mensaje"
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col 
                    xs={12}
                    md={{span: 6, offset:3}}
                    className="text-center"
                >
                    <Button className="mb-2" onClick={handleShowMessage} variant={show? 'danger' : 'success'}>
                        { titulo }
                    </Button>
                    <Toast show={show} /* onClose={} */ className="m-auto">
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    )

}
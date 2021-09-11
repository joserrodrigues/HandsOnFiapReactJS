import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'

const HomeView = (props) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return (
        <Container fluid className="container">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col md={12}>
                    <h1>Button Clicked = {props.info} - 2</h1>
                    <Button onClick={() => props.onClicked('Button Clicked')}>Press Me</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default HomeView;
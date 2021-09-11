import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col className="ColColor" xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col className="ColColor" xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col className="ColColor" xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col className="ColColor" xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col className="ColColor" xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col className="ColColor" xs={6}>xs=6</Col>
        <Col className="ColColor" xs={6}>xs=6</Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
          <Button variant="link">Link</Button>
          <Spinner animation="grow" variant="secondary" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
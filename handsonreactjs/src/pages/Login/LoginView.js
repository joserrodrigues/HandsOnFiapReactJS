import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import './Login.css'

const LoginView = (props) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={props.signInSchema}
            onSubmit={props.onSubmit}>
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <Container >
                        <Form>
                            <Row className="justify-content-md-center">
                                <Col md={4} className='mainBox'>
                                    <Row>
                                        <Col md={12} className='title'>
                                            <h2><center>Sign in to continue</center></h2>
                                        </Col>
                                    </Row>
                                    <Row className="lineBox">
                                        <Col md={4} className='label'>
                                            <label htmlFor="email">Email</label>
                                        </Col>
                                        <Col md={8} className='field'>
                                            <Field
                                                data-testid="email"
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="email"
                                                className={errors.email && touched.email ?
                                                    "input-error" : null}
                                            />
                                        </Col>
                                        <Col md={12} className="infoErrorBox">
                                            <ErrorMessage name="email" component="span" className="infoError" />
                                        </Col>
                                    </Row>
                                    <Row className="lineBox">
                                        <Col md={4} className='label'>
                                            <label htmlFor="password">Password</label>
                                        </Col>
                                        <Col md={8} className='field'>
                                            <Field
                                                data-testid="password"
                                                type="password"
                                                name="password"
                                                placeholder="password"
                                                id="password"
                                                className={errors.password && touched.password ?
                                                    "input-error" : null}
                                            />
                                        </Col>
                                        <Col md={12} className="infoErrorBox">
                                            <ErrorMessage
                                                name="password"
                                                component="span"
                                                className="infoError"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="lineBox">
                                        <Col md={12} className='buttonInfo'>
                                            <Button
                                                type="submit"
                                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                disabled={!(dirty && isValid)}
                                            >
                                                Sign In
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row className="lineBox">
                                        <Col md={12} className='buttonInfo'>
                                            {props.infoLogin}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                );
            }}
        </Formik>
    )
}



export default LoginView;
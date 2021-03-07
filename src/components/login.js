import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Container>
            <h1>¡Bienvenido entrenador!</h1>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>¿Cual es tu nombre?</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Link className="btn btn-primary" to="/pokedex">Me</Link>
                </Form>
        </Container>
    );
};

export default Login;
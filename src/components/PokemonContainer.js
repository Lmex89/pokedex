import Container from 'react-bootstrap/Container';
import { Link, useLocation } from "react-router-dom";

const PokemonContainer = ({url}) => {
    const location = useLocation();
    console.log("Este es la informacion post desde location", location);
    console.log("Este es la informacion post a traves del prop", url);
    
    return (
        <Container fluid="true">
            <h1>Este es esta es la pagina de {}</h1>
            <Link className="btn btn-primary" to="/pokedex">regresar</Link>
        </Container>
    );
};

export default PokemonContainer;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormComponent from "./FormComponent";
import { Link } from "react-router-dom";

const NavBar = ({ handleSearchPokemons }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/pokedex">Pokedex</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <FormComponent handleSearch={handleSearchPokemons} />  
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
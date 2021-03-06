import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormComponent from "./FormComponent";

const NavBar = ({ handleSearchPokemons }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="" >Pokedex</Navbar.Brand>
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
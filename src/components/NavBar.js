import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import TypeofPoks from './SelectComponent'

const NavBar = ({ handleSearchPokemons }) => {
    return (
        <Navbar bg="light" expand="lg">

            <Link className="navbar-brand" to="/pokedex">Pokedex</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            <TypeofPoks handleSearch={handleSearchPokemons } />
        </Navbar>
    );
};

export default NavBar;
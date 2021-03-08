import { useState, useEffect } from "react";
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Select2 = ({ keys, data }) => {

    return (

        <NavDropdown.Item eventKey={keys} >{data}

        </NavDropdown.Item>
    )
}


const TypeofPoks = ({ handleSearch }) => {
    const [pokes, setPokes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Llamar PokeAPIcd

    useEffect(() => {
        let urls = []
        for (let i = 1; i < 19; i++) {
            urls.push(`https://pokeapi.co/api/v2/type/${i}`);
        }
        let promiseArray = urls.map(url => axios.get(url));
        axios.all(promiseArray).then((res) => {
            res.map(r => setPokes(pokes => [...pokes, r.data.name]));
        });

    }, [setPokes]);



    let arrayofTypes = [];
    if (pokes.length > 15) {
        arrayofTypes = pokes.map((e, index) => (
            <Select2 keys={index} data={e} />
        ))

    }
    return (
        <div className="select-container">
            <Form inline>
                <DropdownButton onSelect={(e) => setSearchTerm(e)} onSubmit={() => handleSearch(searchTerm)} id="dropdown-basic-button" title="Select Type of Pokemon">
                    {(arrayofTypes.length > 0) ? arrayofTypes : <li> "vacio"</li>}
                    {console.log(searchTerm)}
                </DropdownButton>
                <Button onClick={() => handleSearch(searchTerm)} variant="outline-success">Search</Button>
            </Form>
        </div>
    );
};

export default TypeofPoks;
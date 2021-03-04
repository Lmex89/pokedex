import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

const FormComponent = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Form inline>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Serch by Name</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Serch by Number</NavDropdown.Item>
            </NavDropdown>
            <FormControl onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
            <Button onClick={() => handleSearch(searchTerm)} variant="outline-success">Search</Button>
        </Form>
    );
};

export default FormComponent;
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import TypeofPoks from './SelectComponent';


const FormComponent = ({ handleSearch, typesofpoks }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Form inline>
                <div>
                    <NavDropdown title="Types" id="basic-nav-dropdown">
                       <TypeofPoks/>
                    </NavDropdown>
                </div>


                <FormControl onChange={(e) => setSearchTerm(e.target.value)} onSubmit={() => handleSearch(searchTerm)} type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={() => handleSearch(searchTerm)} variant="outline-success">Search</Button>
            </Form>
        </div>
    );
};

export default FormComponent;
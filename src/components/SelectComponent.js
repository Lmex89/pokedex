import { useState, useEffect } from "react";
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TypeofPoks = () => {
    const [pokes, setPokes] = useState([]);
    // Llamar PokeAPIcd
    useEffect(() => {
        let list = [];
        for (let i = 1; i < 19; i++) {
            const promise = axios(`https://pokeapi.co/api/v2/type/${i}`);
            promise.then((res) => {
                list.push(res.data.name);
            });
        }
        setPokes(list);
       
    }, []);


    return (
       
        <div className="select-container">

                {pokes.map((poke) => (
                    <NavDropdown.Item key={poke}>{poke}
                     <NavDropdown.Divider />
                    </NavDropdown.Item>
                   
                ))}
          
        </div>

    );
};

export default TypeofPoks;
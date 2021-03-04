import { useState, useEffect } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokeItem from './PokeItem';
import NavBar from "./NavBar";

const PokedexContainer = () => {

    const [pokes, setPokes] = useState([]);
    const [query, setQuery] = useState("");

    // Llamar PokeAPI
    useEffect(() => {
        if (query) {
        const promise = axios(`https://pokeapi.co/api/v2/type/${query}`);

        promise.then((res) => {
            setPokes(res.data.pokemon.slice(0, 4));
        });
        }
    }, [query]);

    useEffect(() => {
        console.log(pokes);
    }, [pokes]);

    const SearchPokemons = (value) => {
        setQuery(value);
    };
    

    const myArrOfPokemons = pokes.map((value) => (
        <PokeItem
        name={value.pokemon.name}
        url={value.pokemon.url}
        key={value.pokemon.name}
        />
    ));

    return (
        <Container fluid="true">
            <NavBar handleSearchPokemons={SearchPokemons} />
            <Container fluid="true">
                <Row>
                    {pokes.length > 0 && myArrOfPokemons}
                </Row>
            </Container>
        </Container>
    );
};

export default PokedexContainer;
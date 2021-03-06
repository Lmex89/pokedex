import { useState, useEffect } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokeItem from './PokeItem';
import NavBar from "./NavBar";
import Pagination from "./pagination"

const PokedexContainer = () => {

    const [pokes, setPokes] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [poksperPage] = useState(4);

    // Llamar PokeAPIcd
    useEffect(() => {
        if (query) {
        const promise = axios(`https://pokeapi.co/api/v2/type/${query}`);

        promise.then((res) => {
            setPokes(res.data.pokemon);
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

    const indexOfLastPost = currentPage * poksperPage;
    const indexofFirstPost = indexOfLastPost - poksperPage;
    const currentPoks = myArrOfPokemons.slice(indexofFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid="true">
            <NavBar handleSearchPokemons={SearchPokemons} />
            <Container fluid="true">
                <Row>
                    {pokes.length > 0 && currentPoks}
                    <Pagination
                        poksPerPage={poksperPage}
                        totalPoks={myArrOfPokemons.length}
                        paginate={paginate}/>
                </Row>
            </Container>
        </Container>
    );
};

export default PokedexContainer;
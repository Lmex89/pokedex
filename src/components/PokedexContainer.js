import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokeItem from './PokeItem';
import Pagination from "./pagination";
import NavBar from "./NavBar";
import { HashRouter as Router, Switch } from "react-router-dom";

const PokedexContainer = ({pokes, serch}) => {

    
    const [currentPage, setCurrentPage] = useState(1);
    const [poksperPage] = useState(4);

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
        <Router>
            <Switch>
                <Container fluid="true">
                    <NavBar handleSearchPokemons={serch} />
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
                
            </Switch>
        </Router>
        
    );
};

export default PokedexContainer;
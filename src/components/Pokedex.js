import { useState, useEffect } from "react";
import axios from 'axios';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PokedexContainer from './PokedexContainer';
import PokemonContainer from "./PokemonContainer";
import PokeItem from './PokeItem';

const Pokedex = () => {

    const [pokes, setPokes] = useState([]);
    const [query, setQuery] = useState("");



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
    },[pokes]);

    
    const SearchPokemons = (value) => {
        setQuery(value);
    };
    

    return (
        <Router>
            <Switch>
                <Route exact path="/pokedex" render={() => <PokedexContainer pokes={pokes} serch={SearchPokemons} />} />
                <Route path="/pokedex/:id" render={() => ( <PokemonContainer url />)}/>
            </Switch>
        </Router>
        
    );
};

export default Pokedex;
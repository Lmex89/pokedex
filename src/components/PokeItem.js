import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import axios from "axios";
import TypeBadges from './TypeBadges';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PokeItem = ({ name,  url }) => {
    const [pokemon, setPokemon] = useState(null);
    const [Types, setTypes] = useState([]);
    const [Hp, setHp] = useState("");
    const [Attack, setAttack] = useState("");
    const [Defense, setDefense] = useState("");
    const [Sp_attack, setSp_attack] = useState("");
    const [Sp_defense, setSp_defense] = useState("");
    const [Speed, setSpeed] = useState("");
  
    useEffect(() => {
      const promise = axios(url);
  
      promise.then((res) => {
        setPokemon(res.data.id);
        setTypes(res.data.types.slice(0, 2));
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefense(res.data.stats[2].base_stat);
        setSp_attack(res.data.stats[3].base_stat);
        setSp_defense(res.data.stats[4].base_stat);
        setSpeed(res.data.stats[5].base_stat);
      });
    },[url]);

    const myArrOfTypes = Types.map((value) => (
        <TypeBadges type={value.type.name} key={value.type.name}/>
    ));

    const pokeImg = `https://pokeres.bastionbot.org/images/pokemon/${pokemon}.png`
  
    return (
        <Col className="p-3"  xl="3" lg="3" md="4" sm="6" xs="12">
            <Card>
                <Card.Img className="px-5 pt-5" variant="top" src={pokeImg} alt={name} />
                <p>{myArrOfTypes}</p>
                <Card.Body className="text-left">
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <h5>Base Stats:</h5>
                    <Container className="mb-4" fluid="true">
                        <Row>
                            <Col md="6"><span>HP: </span>{Hp}</Col>
                            <Col md="6"><span>Attack: </span>{Attack}</Col>
                        </Row>
                        <Row>
                            <Col md="6"><span>Defense: </span>{Defense}</Col>
                            <Col md="6"><span>SP Attack: </span>{Sp_attack}</Col>
                        </Row>
                        <Row>
                            <Col md="6"><span>SP Defense: </span>{Sp_defense}</Col>
                            <Col md="6"><span>Speed: </span>{Speed}</Col>
                        </Row>
                    </Container>
                    <Button variant="primary">Check Pokemon</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PokeItem;
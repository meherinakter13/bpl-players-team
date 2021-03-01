import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css';
import {Button } from 'react-bootstrap';

const Players = (props) => {
const{name,image,salary}= props.player;

    return (

        <div className="playerStyle d-flex">
            <div >
                <img src={image}alt=""/>
            </div>
            <div className="playerDetails">
                <h5>Player name: {name}</h5>
                <p>Salary: ${salary}</p>
                <Button variant="success" className="button-click " onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus}/> Add Player</Button>
            </div>
        </div>
    );
};

export default Players;
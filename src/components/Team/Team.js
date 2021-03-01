import React from 'react';
import PlayersData from '../../data/PlayersData.json';
import { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Cart from '../Cart/Cart';
import './Team.css'

const Team = () => {
    const [players,setPlayers] = useState([]);
    useEffect(()=>{
      setPlayers (PlayersData);  
    },[])
    const [cart,setCart] = useState([]);
    const handleAddPlayer=(player) =>{
        const newCart =[...cart,player];
        setCart(newCart);
    }
    
    return (
        <div className="team-container d-flex">
            <div className="player-container">
                    {
                    players.map(player=><Players player ={player} handleAddPlayer={handleAddPlayer} key={player.id} ></Players>)
                    }     
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
    </div>
    );
};

export default Team;
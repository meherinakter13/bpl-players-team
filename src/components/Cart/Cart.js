import React, { useState } from 'react';
import'./Cart.css';

const Cart = (props) => {
    const cart =props.cart;
    const total = cart.reduce((total,player)=>total + player.salary,0);

    let playerName =[]; 
    for(let i=0;i<cart.length;i++){
    const player = cart[i];
    let name  =' ('+player.name+'($'+player.salary+')' + ' ), ';
    playerName.push(name);
    }

    return (
        <div>
        <h3>Team Summary</h3>
        <p>Total team members: {cart.length} </p>
        <p>Player name and salary: {playerName}</p><br/>
        <p>Total cost: ${total} </p>
    </div>
    );
};

export default Cart;
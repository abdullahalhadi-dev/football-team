import React from 'react';
import './PlayersCart.style.css';

const PlayersCart = (props) => {

    const playerCart = props.playerCart;

    const salaryInc = 0;
    const totalBudget = playerCart.reduce((sum, player)=>sum + player.salary, salaryInc);

    return (
        <div className='cart-info'>
            <h1>Selected Players Info</h1>

            <h5>Total selected players: {playerCart.length}</h5>
            {
                playerCart.map(selectedPlayerName=><li>{selectedPlayerName.name}</li>)
            }

            <h4>Total Budget: ${totalBudget}</h4>
        </div>
    );
};

export default PlayersCart;

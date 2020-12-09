import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { 
    console.log("Cardlist rendered");
    return(
        robots.map( robot => {
            return (
                <Card 
                    key={robot.id} 
                    id = { robot.id } 
                    name = { robot.name } 
                    email = { robot.email }
                />
            )
        })
    ); 
}

export default CardList;
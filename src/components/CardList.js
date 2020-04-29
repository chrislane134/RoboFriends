import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { // using the property of robots 
   
    return (
        <div> 
            {
           robots.map((user, i) => { //map the user criteria with the measurement i will loop through the array
        return ( // returns
        <Card //card
            key={i} //need key to stop any deleteing
            id={robots[i].id}  //card object with id of [i]
            name={robots[i].name} 
            email={robots[i].email}
            />
        );
           })    
        }
        
        </div>
 
    );

    }

    export default CardList;

import React from 'react';

function Learn(props){
    return(
        <div>
            <h2>Learn {props.course}.</h2>
            <h3>Prerequisite for the Bootcamp2020:  {props.language}</h3>

        </div>
    )
}

export default Learn;
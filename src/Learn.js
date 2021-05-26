import React from 'react';

function Learn(props){
    return(
        <div>
            <h2>Learn {props.course}.</h2>
            <h3>prerequisite: {props.lang}</h3>

        </div>
    )
}

export default Learn;
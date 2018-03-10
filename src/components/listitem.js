import React from 'react';
export const ListItem = (props) => { 
    return (
        <div> 
            <p>{props.object.name}</p>
        </div>
    );
}
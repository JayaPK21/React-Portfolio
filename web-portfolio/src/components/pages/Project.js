import React from 'react';

function Project({title, description}) {
    return(
        <div className='col-sm-6'>
            <div className='card my-2'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;
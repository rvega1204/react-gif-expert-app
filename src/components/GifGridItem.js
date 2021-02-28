import React from 'react';

export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="card animate__fadeIn animate__animated">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

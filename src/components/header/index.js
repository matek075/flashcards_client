import React from 'react';
import './index.scss'

export default ({text,...props}) => {
    return(
        <header className='header_page' {...props}>{text}</header>
    )
}
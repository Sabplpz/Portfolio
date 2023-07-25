import React from 'react';

function Footer(){
    return (
        <div className='grid grid-cols-3'>
        <ul className='col-start-2 col-end-3 bg-purple-950 grid grid-cols-3 gap-2 justify-items-center h-16 items-center'>
            <li className=''>
                <h1>LinkedIn</h1>
            </li>
            <li>
                <h1>GitHub</h1>
            </li>
            <li>
                <h1>LinkedIn</h1>
            </li>
        </ul>
        </div>
    );
}

export default Footer;
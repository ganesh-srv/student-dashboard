import React from 'react';

import './Header.css';

export default function Header ({items}){
    console.log(items)
    return (
   <div className="header-container">
   <nav>
    <ul class="list-items">
        {
            items.map((item) => (
            <li key={item.id} >
                <a href={item.link}>{item.label}</a>
            </li>
                
            ))
        }
    </ul>
   </nav>
   </div>
    )
}
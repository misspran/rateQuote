import React from 'react';

const logo = 'https://resources.rategravity.com/wp-content/uploads/2017/11/rategravity-white-logo-e1513562845157.png';

const NavBar = () => ( 
    <div className='navbar'>
        
        <img src={logo} id='logo' alt=" "/>
        <h3 id='title'> | Rate Quotes</h3>
     
    </div>
)


export default NavBar;
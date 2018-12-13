import React from 'react';

const Header = () => {
    const isUserLoggedIn = false;
    return(
        <div className="App-header">
            {isUserLoggedIn ? 'Lalu' : <button className='btn-login'>Log in</button>}
        </div>
    );
};

export default Header;
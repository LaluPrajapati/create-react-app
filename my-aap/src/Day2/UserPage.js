import React from 'react';
import Header from './Header';
import Users from './Users';
import Footer from './Footer';

const UserPage = () => {
    return (
        <div>
            <Header />
            <h2>List of Users</h2>
            <Users />
            <Footer />
        </div>
    );
};

export default UserPage;
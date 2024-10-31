import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone, website} = user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>{name} Website: {website}</p>
        </div>
    );
};

export default UserDetails;
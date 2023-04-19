import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Home = () => {

    const users = useContext(AuthContext)

    return (
        <div>
            <h2>This is home {users.displayName}</h2>
        </div>
    );
};

export default Home;
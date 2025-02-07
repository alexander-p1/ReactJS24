import React from 'react';
import ProfileCard from './ProfileCard';

const Parent = () => {
    const users = [ 
        {
        name: 'Nicodemus Naveltuta',
        age: '47',
        title: 'vice ninja',
        email: 'nicokick@theoffice.net'
    },
    {
        name: 'Pide Pettersson',
        age: '26',
        title: 'Magi',
        email: 'at@example.com'
    },
    {
        name: 'Alex',
        age: '26',
        title: 'Någonting',
        email: 'atat@example.com'
    },
    ];

    return (
        <div>
            {users.map((user, index) => (
                <ProfileCard
                key={index}
                name={user.name}                
                title={user.title}
                />
            ))}            
        </div>
    )
}

export default Parent;
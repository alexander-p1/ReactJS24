import React from 'react';
import App from '../App';
import profilePic from '/src/assets/profilbild.jpg';

const ProfileCard = () => {
  return (
    <div className='card'>
        <img className='card-image' src={profilePic} alt="Profilbild" />
        <h2></h2>
        <p></p>
        <button>Bonk</button>
    </div>
  )
}

export default ProfileCard;
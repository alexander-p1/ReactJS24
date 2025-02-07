import React from 'react';
import profilePic from '/src/assets/profilbild.jpg';

const ProfileCard = ({name, title}) => {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt="profilbild" />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  )
}

export default ProfileCard;
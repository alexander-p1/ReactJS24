import React from 'react'

const ProfileCard = ({name, title}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default ProfileCard
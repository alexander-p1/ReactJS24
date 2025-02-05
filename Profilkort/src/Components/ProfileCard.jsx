import profilePic from '/src/assets/profilbild.jpg'
const name = 'Alexander Pettersson';

const ProfileCard = () => {
  return (
    <div className='card'>
        <img className='card-image' src={profilePic} alt="Profile Picture" />
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.</p>
        <button>En fin knapp</button>
    </div>
  )
}
export default ProfileCard;
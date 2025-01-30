import Image from './Image.jsx';
import About from './About.jsx';


const App = () => {
  const name = 'Ada Lovelace';


  return(
    <div className="card">
      <Image />
      <h1 className='name'>{name}</h1>
      <About />
    </div>
  )
}

export default App;
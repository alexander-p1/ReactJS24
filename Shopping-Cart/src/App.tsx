import './App.css'
import Header from './Components/Header'
import Product from './Components/Product'

function App() {
  return (
    <div>
      <Header /> 
      <main className='main-container'>
        <Product 
          bookTitle='A Sign of Four'
          author='Av Sir Arthur Conan Doyle'
          infoText='Lorem Ipsum'
        />
        <Product 
          bookTitle='A Study in Scarlet'
          author='Av Sir Arthur Conan Doyle'
          infoText='Lorem Ipsum'
        />
        <Product 
          bookTitle='Baskervilles Hound'
          author='Av Sir Arthur Conan Doyle'
          infoText='Lorem Ipsum'
        />
        <Product 
          bookTitle='The Adventures of Sherlock Holmes'
          author='Av Sir Arthur Conan Doyle'
          infoText='Lorem Ipsum'
        />
      </main>
    </div>
  )  
}

export default App

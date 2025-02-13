import React from 'react'
import Button from './Button'

interface ProductProps {
    bookTitle: string;
    author: string;
    infoText: string;
}

const Product: React.FC<ProductProps> = ({ bookTitle, author, infoText }) => {
  return (
    <div className='product-info'>
        <h2> {bookTitle} </h2>
        <h4> {author} </h4>
        <p> {infoText} </p>        
        <Button />
    </div>
  )
}

export default Product
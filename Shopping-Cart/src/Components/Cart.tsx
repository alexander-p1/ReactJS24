import img from '/src/assets/sherlockholmes.jpg'

const Cart = () => {
  return (
    <div className='cart-container'>
        <img src={img} alt="Sherlock Holmes" className="header-img" />
        <span>🛒🛍️ 0 items</span>
    </div>
  )
}

export default Cart
import { addToCart } from './redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 1, name: "Laptop", price: 1200, emoji: "💻" },
  { id: 2, name: "Backpack", price: 80, emoji: "🎒" },
  { id: 3, name: "T-Shirt", price: 25, emoji: "👕" },
  { id: 4, name: "Headphones", price: 200, emoji: "🎧" },
  { id: 5, name: "Monitor", price: 350, emoji: "🖥️" },
  { id: 6, name: "Keyboard", price: 120, emoji: "⌨️" }
]

function App() {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cart)
  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>🛍️ Shopping Cart Manager</h1>
        <button 
          className="cart-button" 
          onClick={() => navigate('/cart')}
        >
          🛒 Cart ({items.length})
        </button>
      </header>

      <main className="products-section">
        <h2>Available Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.emoji}</div>
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button 
                className="add-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App

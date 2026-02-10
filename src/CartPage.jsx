import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from './redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import './CartPage.css'

export default function CartPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, totalAmount } = useSelector(state => state.cart)

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id))
  }

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1>🛒 Shopping Cart</h1>
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
        >
          ← Back to Products
        </button>
      </header>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛍️</div>
          <h2>Your Cart is Empty</h2>
          <p>Add Some Products to Get Started!</p>
          <button className="back-btn" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            <h2>Cart Items ({items.length})</h2>
            <div className="items-list">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <div className="item-icon">{item.emoji}</div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">Price: ${item.price}</p>
                    </div>
                  </div>

                  <div className="quantity-control">
                    <button 
                      className="qty-btn minus"
                      onClick={() => handleDecrease(item.id)}
                    >
                      −
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="qty-btn plus"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    <p className="total-label">Total</p>
                    <p className="total-price">${item.price * item.quantity}</p>
                  </div>

                  <button 
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    🗑️ Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-content">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalAmount}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="summary-row">
                <span>Tax:</span>
                <span>${Math.round(totalAmount * 0.08 * 100) / 100}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total Amount:</span>
                <span>${Math.round((totalAmount * 1.08) * 100) / 100}</span>
              </div>
            </div>

            <button className="checkout-btn">
              💳 Proceed to Checkout
            </button>
            <button className="clear-btn" onClick={handleClearCart}>
              🗑️ Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

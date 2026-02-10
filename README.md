# 📋DAY 6 TASK: "Cart Manager" App — State Management Practice

## 🎯Objective:
Build a Shopping Cart Manager to practice state management techniques:
• Local state or **Redux(optional)**
• useSelector, useDispatch (only if using Redux)
• Core concepts: actions, reducers, store (if Redux)
• Redux Toolkit (recommended if Redux is used)

## 🔥Requirements
### 1.Cart State Management
You can implement **either**:
• Local component state (via useState, useReducer)
• **OR** global state using **Redux Toolkit** (optional)
Cart state should include:
```
{
cart: {
items: [
{ id: 1, name: "Laptop", quantity: 1, price: 1200 },
{ id: 2, name: "Headphones", quantity: 2, price: 200 }
],
totalAmount: 1600
}
}
```

## 2. Actions (or Events):
### Support the following:
• **Add Item**
• **Remove Item**
• **Increase Quantity**
• **Decrease Quantity**
• Auto-calculate totalAmount on updates

## 3.UI Requirements:
### Display a cart item list:
• Product Name
• Quantity
• Price
• Total per item (price × quantity)
### Show:
• Overall **Total Amount**
• Buttons to:
o Increase Quantity
o Decrease Quantity
o Remove Item

## 4.Redux (Optional)
If you choose to use Redux:
• Use createSlice for defining actions and reducers
• Setup store using configureStore
• Use <Provider> to wrap the app
• Access state with useSelector
• Dispatch actions with useDispatch


## 🎁Bonus (Optional)
• Show **"Cart is Empty"** message when no items
• Add a **"Clear Cart"** button
• Persist cart state to **localStorage**

## 🖼 UI Layout Sketch:

Shopping Cart
------------------------------------------------
Product: Laptop
Quantity: 1 [+] [-] [Remove]
Price: $1200
------------------------------------------------
Product: Headphones
Quantity: 2 [+] [-] [Remove]
Price: $400
------------------------------------------------
Total Amount: $1600
------------------------------------------------
[Clear Cart] [Checkout]


## 🗺Visual Structure Flow
|------------------------------|
| Shopping Cart Header |
|------------------------------|
| Cart Item List |
|------------------------------|
| Cart Total Summary |
|------------------------------|
| Clear Cart | Checkout Button |
|------------------------------|


✅Summary Table
**Topic**         **Applied In**
State Management  Local state or Redux

Actions/Reducers   Add / Remove / Update items

Redux Toolkit      createSlice, configureStore(optional)

useSelector        Read cart state (if using Redux)

useDispatch        Trigger actions (if using Redux)
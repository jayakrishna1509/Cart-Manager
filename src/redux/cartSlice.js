import { createSlice } from "@reduxjs/toolkit";


let initialState={
    items:[],
    totalAmount:0
}

let cartSlice=createSlice({
    name:'cart',initialState,reducers:{
        addToCart:(state,action)=>{
            let newItem=action.payload
            let existing=state.items.find(item=>item.id===newItem.id)
            if(existing){
                existing.quantity+=newItem.quantity
            }else{
                state.items.push(newItem)
            }
            state.totalAmount+=newItem.price
        },

        removeItem:(state,action)=>{
            let id=action.payload
            let item=state.items.find(item=>item.id===id)

            if(item){
                state.totalAmount-=item.price*item.quantity
                state.items=state.items.filter(item=>item.id!==id)
            }
        },
        increaseQuantity:(state,action)=>{
            let item=state.items.find(item=>item.id===action.payload)
            if(item)
            item.quantity+=1
            state.totalAmount+=item.price
            
        },
        decreaseQuantity:(state,action)=>{
            let item=state.items.find(item=>item.id===action.payload)
            if(item&& item.quantity>1){
                item.quantity-=1
                state.totalAmount-=item.price
            }
        }, 
        clearCart:(state)=>{
            state.items=[]
            state.totalAmount=0
        }
    }
})

export let {addToCart, removeItem, increaseQuantity, decreaseQuantity, clearCart}=cartSlice.actions
export default cartSlice.reducer
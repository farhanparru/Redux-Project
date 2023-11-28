import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


 export const fetchuser = createAsyncThunk("cart/fetchuser",async()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
   console.log(response.data);
  return response.data
})


const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  userDetials:{}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {


    addToCart: (state,action) => {
      // state.cartCount = 1; // Issue: Directly mutating state
      //  console.log(action);
      const itemExist = state.cartList.find(item=>item.id === action.payload.id)
      if(itemExist){
        state.cartList.forEach(item=> {
          if(item?.id === action.payload.id){
             item.count=1
          }
        })
      }else{
        state.cartList.push({
          ...action.payload,
           count:1,
         })
         
               
      }
       
    },
    increment: (state,action) => {
      // state.cartCount += 1; // Issue: Directly mutating state
    const productId=action.payload
    state.cartList.forEach(item=> {
      if(item?.id ===productId){
         item.count++
      }
    })
    },
    decrement: (state,action) => {
      const productId=action.payload
      state.cartList.forEach(item=> {
        if(item?.id ===productId){
           item.count--;
        }
      }) 
    },
  },
  extraReducers:{
    [fetchuser.pending]:(state,action) =>{
      console.log("Loading start");
      
    },
    
    [fetchuser.fulfilled]:(state, action)=> {
      console.log("Loding End");
      console.log("Loding Success");
      state.userDetials = action.payload
    },
    [fetchuser.rejected]: (state,action)=> {
      console.log("Loading End");
      console.log("sucess");
    },

  }
});

// Actions methods using destructuring export
export const { increment, decrement, addToCart } = cartSlice.actions;

export default cartSlice.reducer;








//1.Provider
//2.store
//3.Reducer
//4.Action

// Store
// Action = Button Click
// Reducer => StateUpdate
// Provider => React Injected
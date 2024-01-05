
// import { configureStore } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

//  const initialState =  { data: [] }
//  console.log(initialState)

// const cartSlice = createSlice({
//   name: 'formData',
//   initialState,
//   reducers: {
//     addData: (state, action) => {  
//       console.log(action)
//       state.data = [...state.data, action.payload];
//     }
//    }
// });


// export const { addData } = cartSlice.actions;

// export const store = configureStore({
//   reducer: {
//     formData: cartSlice.reducer
//   },
// });
// export default store;

// //console.log(store)



import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

console.log(initialState.data)
const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
      addData: (state, action) => {
        // console.log(action.payload)
        state.data = [...state.data, action.payload]
      }
    }
});

  
export const { addData } = formDataSlice.actions;
// export default formDataSlice.reducer;

// Store
const store = configureStore({
  reducer: {
    formData: formDataSlice.reducer
  }
});
// console.log(store)

export default store;





























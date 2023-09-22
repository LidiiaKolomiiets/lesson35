import { createReducer } from "@reduxjs/toolkit"
import createAddProduct from "../actions/createAddProduct.js"
import createRemoveProduct from "../actions/createRemoveProduct.js"
import createProductEntry from "../actions/createProductEntry.js"

export default createReducer([], {
    [createAddProduct.type]: (state, action) => {state.product.push(action.payload)},
    [createRemoveProduct.type]: (state, action) => {state.product = state.product.filter((p) => p.id !== action.payload.id)},
    [createProductEntry.type]: (state, action) => {state.product = state.product.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name, number: action.payload.number }
          : item
      )}
})


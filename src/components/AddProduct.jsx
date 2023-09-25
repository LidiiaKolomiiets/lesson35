import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/reducer.js";
import isValid from "./isValid.js";

export default () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNewProduct = () => {
    const newProd = {
      name: newProduct,
      number: newNumber,
      id: 'id' + Date.now()
    }
    if (isValid(newProd, addProduct(newProd))) {
      dispatch(addProduct(newProd))
      setNewProduct('');
      setNewNumber('');
    }
  }

  return (
    <div className="block">
      <label htmlFor="caption">Caption</label>
      <input id="caption" value={newProduct} onChange={(e) => setNewProduct(e.target.value)}></input>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" value={newNumber} onChange={(e) => setNewNumber(e.target.value)}></input>
      <button onClick={addNewProduct}>Add</button>
    </div>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './productStyle.css'
import createAddProduct from "../actions/createAddProduct.js";
import isValid from "./isValid.js";

export default () => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addProduct = () => {
        const newProd = {
            name: newProduct,
            number: newNumber,
            id: 'id' + Date.now()
        }
        setNewProduct('');
        setNewNumber('')
        if(isValid(newProd,(createAddProduct(newProd)))){
            dispatch(createAddProduct(newProd))
        }
    }

    return <div className="block">
        <label htmlFor="caption">Caption</label>
        <input id="caption" value={newProduct} onChange={(e) => setNewProduct(e.target.value)}></input>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={newNumber} onChange={(e) => setNewNumber(e.target.value)}></input>
        <button onClick={addProduct}>Add</button>
    </div>
}
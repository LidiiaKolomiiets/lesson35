import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ProductEntry from "./ProductEntry.jsx";
import'./productStyle.css'

export default () => {
    const products = useSelector(state => state.product)
    return <table className="table">
        {products.map(product => {
            return <ProductEntry key={product.id} {...product}/>
        })}
    </table>
}
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png'
import createProductEntry from "../actions/createProductEntry.js";
import createRemoveProduct from "../actions/createRemoveProduct.js";

export default ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);


  const removeProduct = () => {
    dispatch(createRemoveProduct({id}));
  };

  const editProduct = () => {
    const editProd = {
        id,
        name: editedName,
        number: editedNumber,
    }
    setIsEditing(false)
    dispatch(createProductEntry(editProd))
  };

  return (
    <tbody>
      {isEditing ? (
        <>
         <tr><td><input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          /></td>
          <td><input
            type="text"
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          /></td>
          <td><button onClick={editProduct}>Save</button></td>
          </tr></>
      ) : (
        <tr>
          <td className="table-item">{name}</td>
          <td className="table-item">{number}</td>
          <td className="table-item"><button onClick={() => setIsEditing(true)}><img className="edit-icon" src={editIcon}></img></button></td>
          <td className="table-item"><button onClick={removeProduct}><img className="delete-icon" src={deleteIcon}></img></button></td>
        </tr>
      )}
    </tbody>
  );
};
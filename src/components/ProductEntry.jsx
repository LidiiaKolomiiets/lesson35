// ProductEntry.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, editProduct } from "../reducers/reducer.js";
import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';
import isValid from "./isValid";

export default ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const removeCurrentProduct = () => {
    dispatch(removeProduct({ id }));
  };

  const saveEditedProduct = () => {
    const editedProd = {
      id,
      name: editedName,
      number: editedNumber,
    }
    if (isValid(editedProd, editProduct(editedProd))) {
      setIsEditing(false);
      dispatch(editProduct(editedProd));
    }
  };

  return (
    <tbody>
      {isEditing ? (
        <>
          <tr>
            <td>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={editedNumber}
                onChange={(e) => setEditedNumber(e.target.value)}
              />
            </td>
            <td>
              <button onClick={saveEditedProduct}>Save</button>
            </td>
          </tr>
        </>
      ) : (
        <tr>
          <td className="table-item">{name}</td>
          <td className="table-item">{number}</td>
          <td className="table-item">
            <button onClick={() => setIsEditing(true)}>
              <img className="edit-icon" src={editIcon} alt="Edit" />
            </button>
          </td>
          <td className="table-item">
            <button onClick={removeCurrentProduct}>
              <img className="delete-icon" src={deleteIcon} alt="Delete" />
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
};

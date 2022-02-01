import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const initialState = {name: "",category: "Produce"}

  const [form, setForm] = useState(initialState)

  const onSubmitHandle = (e) => {
    e.preventDefault();
    onItemFormSubmit({id: uuid(),...form})
    setForm(initialState)
  }

  return (
    <form className="NewItem" onSubmit={onSubmitHandle}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})}/>
      </label>

      <label>
        Category:
        <select name="category" value={form.category} onChange={(e) => setForm({...form,category:e.target.value})} >
          <option value="Produce" >Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

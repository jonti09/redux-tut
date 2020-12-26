import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../redux/actionType";

export default function AddItem() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input type="text" onChange={(event) => setItem(event.target.value)} />
      <button
        type="submit"
        onClick={() =>
          dispatch({
            type: ADD_ITEM,
            item: item,
          })
        }
      >
        Add Item
      </button>
    </form>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM } from "../../redux/actionType";

export default function ListItem() {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.key}>
          {item.item}
          {"  "}
          <button
            onClick={() => {
              dispatch({
                type: REMOVE_ITEM,
                key: item.key,
              });
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

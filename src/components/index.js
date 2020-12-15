import React from "react";
import AddItem from "./todo/AddItem";
import ListItem from "./todo/ListItem";

export default function ToDo() {
  return (
    <div>
      <AddItem></AddItem>
      <ListItem></ListItem>
    </div>
  );
}

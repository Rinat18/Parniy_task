import React, { useState } from "react";
import AddModal from "../modal/AddModal";

const CardsList = () => {
  const [open, setOpen] = useState(false)
  function openModal() {
    setOpen(true)
  }
  function closeModal() {
    setOpen(false)
  }
  return <div>CardsList
    <button onClick={openModal}>Add Card</button>
    <AddModal open={open} closeModal={closeModal}/>
  </div>;
};

export default CardsList;

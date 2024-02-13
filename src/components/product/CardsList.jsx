import React, { useEffect, useState } from "react";
import AddModal from "../modal/AddModal";
import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import EditModal from "../modal/EditModal";

const CardsList = () => {
  const { getProduct, products } = useProduct();
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      CardsList
      <Button onClick={openModal}>Add Card</Button>
      <AddModal open={open} closeModal={closeModal} />
      <EditModal open={open} closeModal={closeModal} />
      <div className="productList">
        {products.map((elem) => (
          <ProductCard key={elem.id} elem={elem} openModal={openModal}/>
        ))}
      </div>
    </div>
  );
};

export default CardsList;

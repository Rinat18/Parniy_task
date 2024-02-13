import React, { useEffect, useState } from "react";
import AddModal from "../modal/AddModal";
import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginantionPage from "./Paginantion";

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
  // !PAGINATION
  const [page, setPage] = useState(1);
  const productsInPage = 3;
  const count = Math.ceil(products.length / productsInPage);

  const currentData = () => {
    const begin = (page - 1) * productsInPage;
    const end = begin + productsInPage;
    return products.slice(begin, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <div>
      CardsList
      <Button onClick={openModal}>Add Card</Button>
      <AddModal open={open} closeModal={closeModal} />
      {/* <EditModal open={open} closeModal={closeModal} /> */}
      <div className="productList">
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} openModal={openModal} />
        ))}
      </div>
      <PaginantionPage count={count} page={page} handleChange={handleChange} />
    </div>
  );
};

export default CardsList;

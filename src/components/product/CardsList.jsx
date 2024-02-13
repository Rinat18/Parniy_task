import React, { useEffect, useState } from "react";
import AddModal from "../modal/AddModal";
import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginantionPage from "./Paginantion";
import { useSearchParams } from "react-router-dom";

const CardsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  const { getProduct, products } = useProduct();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(products);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  useEffect(() => {
    getProduct();
    console.log(123);
  }, [searchParams]);

  // ! PAGINATION
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
    <div className="cardsList">
      CardsList
      <Button onClick={openModal}>Add Card</Button>
      <AddModal open={open} closeModal={closeModal} />
      <div className="productList">
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} openModal={openModal} />
        ))}
      </div>
      <div className="pagination_list">
        <PaginantionPage
          count={count}
          page={page}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CardsList;

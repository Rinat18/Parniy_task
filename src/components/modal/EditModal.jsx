import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const EditModal = ({ open, closeModal, elem }) => {
  const { editProduct, oneProduct } = useProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });

  function addObj(e) {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }
  useEffect(() => {
    setProduct(elem);
  }, []);

  const changeObj = (elem) => {
    editProduct(elem.id, product);
    closeModal();
  };
  console.log(product);
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={closeModal}
      >
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "30%",
            width: 700,
            display: "flex",
            border: "2px solid black",
            boxShadow: 24,
            bgcolor: "background.paper",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "400px",
          }}
        >
          <TextField
            fullWidth
            onChange={addObj}
            value={product.image}
            name="image"
            label="Image"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={addObj}
            value={product.title}
            name="title"
            label="Title"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={addObj}
            value={product.description}
            name="description"
            label="Description"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={addObj}
            value={product.price}
            name="price"
            label="Price"
            variant="outlined"
            type="number"
          />
          <TextField
            fullWidth
            onChange={addObj}
            value={product.category}
            name="category"
            label="Category"
            variant="outlined"
          />
          <Button
            onClick={() => changeObj(elem)}
            sx={{ border: "1px solid blue" }}
          >
            SAVE
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;

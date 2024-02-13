import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddModal = ({ open, closeModal }) => {
  const { addProduct } = useProduct();
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    likes: [],
    comments: [],
    rank: 0,
  });
  function addObj (e) {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
      console.log(product);

    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleInput = () => {
    addProduct(product);
    closeModal()
  };
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
            name="image"
            onChange={addObj}
            label="Image"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="title"
            onChange={addObj}
            label="Title"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="description"
            onChange={addObj}
            label="Description"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="price"
            onChange={addObj}
            label="Price"
            variant="outlined"
            type="number"
          />
          <TextField
            fullWidth
            name="category"
            onChange={addObj}
            label="Category"
            variant="outlined"
          />
          <Button onClick={handleInput} sx={{ border: "1px solid blue" }}>
            Add
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddModal;

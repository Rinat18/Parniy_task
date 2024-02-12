import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const EditModal = ({ open, closeModal }) => {
  const { getOneProduct, editProduct, oneProduct } = useProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });
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
          <TextField fullWidth name="image" label="Image" variant="outlined" />
          <TextField fullWidth name="title" label="Title" variant="outlined" />
          <TextField
            fullWidth
            name="description"
            label="Description"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="price"
            label="Price"
            variant="outlined"
            type="number"
          />
          <TextField
            fullWidth
            name="category"
            label="Category"
            variant="outlined"
          />
          <Button sx={{ border: "1px solid blue" }}>SAVE</Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;

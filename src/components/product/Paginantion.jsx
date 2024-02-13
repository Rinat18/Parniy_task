import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginantionPage = ({ count, page, handleChange }) => {
  console.log(page);
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} onChange={handleChange} />
    </Stack>
  );
};

export default PaginantionPage;

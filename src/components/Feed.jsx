import { Box } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
    <Box
      bgcolor="pink"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Feed
    </Box>
  );
};

export default Feed;

import { Mail, NightsStay, Notifications } from "@mui/icons-material";
import { AppBar, Icon, InputBase, styled, Toolbar, Typography, Badge} from "@mui/material";
import React from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0, 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  backgroundColor: "white",
}));

const Navbar = () => {
  return (
    <AppBar position="staticy">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FunnyFa Dev
        </Typography>
        <NightsStay sx={{ display: { xs: "none", sm: "block" } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
        </Icons>
      </StyleToolbar>
    </AppBar>
  );
};

export default Navbar;

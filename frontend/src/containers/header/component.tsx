import React from "react";
import { HeaderProps, HeaderStates } from "./interface";
import ImportFromLocal from "../../components/import-from-local";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./style.css";
class Header extends React.Component<HeaderProps, HeaderStates> {
  render() {
    return (
      <>
        <AppBar
          id="pd-header"
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Clipped drawer
            </Typography>
            <ImportFromLocal />;
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;

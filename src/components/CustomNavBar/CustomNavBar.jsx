import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          College Archive
        </Typography>
        <Button color="inherit" component={Link} to="/search">
          Login/SignUp
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavBar;

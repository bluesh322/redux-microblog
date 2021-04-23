import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    color: "lightblue",
  },
});

const postId = 1;

const Navbar = () => {
    const classes = useStyles();

    const Nav = () => {
        return (
            <Container>
                <Typography variant="h1">Microblog</Typography>
                <Typography variant="h4">Get in the Rithm of bloggin!</Typography>
                <Typography></Typography><Link className={classes.linkText} to={`/${postId}`}><Typography variant="h4">Blog</Typography></Link>
                <Link to="/new"><Typography className={classes.linkText} variant="h4">Add a new post</Typography></Link>
            </Container>
        )
    }
  return (
    <AppBar color="primary" position="static">
      <Toolbar>{Nav()}</Toolbar>
    </AppBar>
  );
};

export default Navbar;

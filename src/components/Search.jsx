import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { StylesProvider } from "@material-ui/styles";
import List from "./List";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    flexGrow: 1,
    fontWeight: "bold",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Search() {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  const [inputTerm, setinputTerm] = useState("");

  const search = e => {
    e.preventDefault();
    setinputTerm(term);
    setTerm("");
  };
  console.log(inputTerm);
  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <YouTubeIcon fontSize="large" className="youtube-icon" />
              <Typography variant="h6">YouTube</Typography>
            </div>
            <div className={classes.title}>
              <form className={classes.root} onSubmit={search}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={e => {
                    setTerm(e.target.value);
                  }}
                  value={term}
                ></TextField>
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  startIcon={<SearchIcon />}
                ></Button>
              </form>
            </div>

            <div>
              <IconButton>
                <VideoCallIcon />
              </IconButton>
              <IconButton>
                <AppsIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <List term={inputTerm} />
      </div>
    </StylesProvider>
  );
}

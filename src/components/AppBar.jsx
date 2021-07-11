import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBarM from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const AppBar = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBarM position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => setIsOpen(true)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className="account">
            <div>
              <div className="account-img">
                <img
                  src="http://bootdey.com/img/Content/User_for_snippets.png"
                  width={40}
                />
                <span>
                  {"  "}
                  {JSON.parse(localStorage.getItem("userAdmin")).taiKhoan}
                </span>
              </div>
              <div
                className="account-content"
                style={{ left: "inherit", right: 0 }}
              >
                <p>
                  <ExitToAppIcon /> {"  "}Đăng xuất
                </p>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBarM>
    </div>
  );
};
export default AppBar;

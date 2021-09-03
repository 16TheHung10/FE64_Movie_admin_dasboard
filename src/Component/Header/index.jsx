import React, { memo } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./style";
import classNames from "classnames";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);

  return (
    <div className={classNames(classes.grow)}>
      {/* <img scr={logo} style={{ width: "100px", height: "100px" }} /> */}
      <AppBar className={classes.colorToolbar} position="static">
        <Toolbar>
          <Typography
            className={classNames(classes.title, classes.colorWhite)}
            variant="h6"
            noWrap
          >
            <Link className={classes.link} to="/admin">
              ADMIN
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classNames(classes.sectionDesktop)}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon className={classes.colorDark} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon className={classes.colorDark} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle className={classes.colorDark} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default memo(Header);

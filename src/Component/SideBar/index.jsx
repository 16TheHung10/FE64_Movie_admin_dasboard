import React, { memo } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./style";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

function Sidebar() {
  const classes = useStyles();
  const adminInfo = useSelector((state) => {
    return state.auth.me;
  });
  return (
    <div className="mt-1">
      <div className="">
        <div className="">
          <div className={classNames(classes.sidebarProfile)}>
            <Typography
              className={classes.sidebarProfile}
              variant="body1"
              component="h2"
              gutterBottom
            >
              {adminInfo.hoTen}
            </Typography>
          </div>
          <div className={classes.root}>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.expandIcon}
              >
                <Typography className={classes.heading}>Film</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link className={classes.link} to={"/admin/film"}>
                  Film Manager
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link className={classes.link} to={"/admin/film/add"}>
                  Add new film
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Sidebar);

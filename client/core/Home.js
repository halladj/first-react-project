import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import unicornbikeImg from "./../assets/images/elmko9qf45731.png";
import theme from "./../theme";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    "padding": 10,
    "textAlign": "right",
    "backgroundColor": "#ededed",
    "borderBottom": "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
  },
}));

export default function Home() {
  const classes = useStyles(theme);
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <CardMedia
        className={classes.media}
        image={unicornbikeImg}
        title="Unicorn Bicycle"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          No u ,I will just hit u with the reverse ONU.
        </Typography>
      </CardContent>
      {/* <Link to="/users">Users</Link>
        <br/>
        <Link to="/signup">Sign Up</Link>
        <br/>
        <Link to="/signin">Sign In</Link> */}
    </Card>
  );
}

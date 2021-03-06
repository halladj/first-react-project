import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import auth from "../auth/auth-helper";


const isActive= (history, path) => {
  if (history.location.pathname == path) {
    return {
      color: "#ff4081"
    }
  }else{
    return {
      color: "#ffffff"
    }
  }
}


export default  withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography   variant="h6"  color="inherit">
        NO U BIO
      </Typography>
      <Link  to="/">
        <IconButton  aria-label="Home"  style={isActive(history, "/")} >
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="users">
        <Button style={isActive(history, "/users")}>
          Users
        </Button>
      </Link>
      {
       !auth.isAuthenticated() && 
       
       //HERE GOES THE <<SIGN IN && SIGN UP>>
       (
         <span>
           <Link to="/signup">
             <Button style={isActive(history, "/signup")}>Sign Up</Button>
           </Link>
           <Link to="/signin">
             <Button style={isActive(history, "/signin")}>Sign In</Button>
           </Link>
         </span>
       )
      }
      {
        auth.isAuthenticated() && 
        (
          <span>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>
                My Profile
              </Button>
            </Link>
            <Button color="inherit"
                    onClick={()=>auth.clearJWT(()=>history.push("/"))}>Sign Out</Button>
          </span>
        )
      }
    </Toolbar>
  </AppBar>
));
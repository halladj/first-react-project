import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {list} from "./../user/api-user";
import theme from "./../theme";
import { 
  Paper, List, ListItemAvatar, ListItemSecondaryAction
  ,ListItem, ListItemText, IconButton, Avatar
  } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Person from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
 root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  } 
}));


export default function User() {
  const [users, setUsers]= useState([]);
  const classes = useStyles(theme);

  useEffect(()=>{
    const abortController= new AbortController();
    const signal= abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      }else{
        setUsers(data);
      }
      return function cleanup() {
        abortController.abort();
      }
    });
    
  },[]);
  return(
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          All Users
        </Typography>
        <List dense>
         {users.map((item, i) => {
          return <Link to={"/user/"+item._id} key={i}>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <Person/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                      <IconButton>
                        <ArrowForward/>
                      </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                 </Link>
               })
             }
        </List>
      </Paper>
    )
}
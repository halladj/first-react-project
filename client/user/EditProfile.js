import React, { useEffect, useState } from "react";
import { read, update } from "./../user/api-user";
import {makeStyles} from "@material-ui/core/styles";
import auth from "../auth/auth-helper";
import { Redirect } from "react-router";
import { Card, CardContent, Typography, TextField, Icon, CardActions, Button } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}));

export default function EditProfile({ match }) {
  
  const jwt= auth.isAuthenticated();
  const classes= useStyles();
  const [values, setValues]= useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: '',
    redirectToProfile: false
  });

  useEffect( ()=>{
    const abordController= new AbortController();
    const signal= abordController.signal;

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then( (data)=>{
      if (data && data.error) {
        setValues({...values, error: data.error});        
      }else{
        setValues({...values, name: data.name, email: data.email});
      }
    });
    
    return function cleanUp() {
      abordController.abort();
    }
  }, [match.params.userId]);



  const clickSubmit= ()=>{
    const user={
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }

    update({
      userId: match.params.userId
    }, {t: jwt.token}, user).then( (data)=>{
      if (data && data.error) {
        setValues({...values, error: data.error});
      }else{
        setValues({...values, userId: data._id, redirectToProfile: true});
      }
    });
  }

  const handleChange= name => event =>{
    setValues({...values, [name]: event.target.value});
  }

  if (values.redirectToProfile) {
    return (<Redirect to={"/user/" + values.userId} />);
  }

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Edit Profile
          </Typography>
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
          <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
    )
  

}
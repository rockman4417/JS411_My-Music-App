import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from './Button'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({handleLoginClick, Logged}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
      <TextField id="standard-basic" label="Username*" style={{width: '250px'}} required/>
      <TextField id="standard-basic" label="Password*" style={{width: '250px'}} required/>
      <Button handleLoginClick={handleLoginClick} Logged={'Login'} type='submit'/>
    </form>
  );
}
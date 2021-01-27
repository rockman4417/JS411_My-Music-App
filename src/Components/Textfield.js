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
    <form className={classes.root} autoComplete="off" style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleLoginClick}>
      <TextField
          required 
          id="standard-basic" 
          label="Username" 
          type="text"
          style={{width: '250px'}}/>
      <TextField 
          required
          id="standard-basic" 
          label="Password" 
          type='password' 
          style={{width: '250px'}}/>
      <Button handleLoginClick={handleLoginClick} Logged={'Login'} type='submit'/>
    </form>
  );
}
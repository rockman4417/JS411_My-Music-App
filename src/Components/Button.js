import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({ handleLoginClick, Logged, type}) {
  
  const classes = useStyles();

  if(Logged === 'Login') {
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" style={{width: '250px'}} type={type}>
          {Logged}
        </Button>
      </div>
    );
  } else {
    return (

      <div className={classes.root}>
        <Button variant="contained" color="primary" style={{width: '250px'}} onClick={handleLoginClick}>
          {Logged}
        </Button>
      </div>
    )
  }
}


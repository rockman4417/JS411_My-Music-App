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

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {console.log(props.handleLoginClick, props.randomProp)}
      <Button variant="contained" color="primary" style={{width: '250px'}} onClick={() => {}} >
        {props.randomProp}
      </Button>
      
    </div>
  );
}

//onClick={props.handleLoginClick}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from './Select'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{width: '300px', height: '250px', margin: '15px'}}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Sound Quality
        </Typography>
        
        <Typography variant="body2" component="p" style ={{marginBottom: '20px', marginTop: '10px'}}>
          Manually control the music quality in the case of a slow connection
          
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
        <Select/>
      </CardActions>
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({selectHandler, quality}) {
  const classes = useStyles();
  

  

  return (
    <div>
      
      
      <FormControl className={classes.formControl}>
        <Select
          value={quality}
          onChange={selectHandler}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{width: '200px'}}
        >
          <MenuItem value="Normal">
            Normal
          </MenuItem>
          <MenuItem value="Low">
            Low
          </MenuItem>
          <MenuItem value="High">
            High
          </MenuItem>
          
        </Select>
        
      </FormControl>
      
    </div>
  );
}
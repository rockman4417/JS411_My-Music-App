import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches({toggleOnline, online}) {
  

  

  return (
    <div>
      <Switch
        checked={online}
        onChange={toggleOnline}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      
    </div>
  );
}
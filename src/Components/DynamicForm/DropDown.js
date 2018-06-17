import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap'

const FormList = ({forms, selectForm}) => {
    return (
      <DropdownButton title={"Forms"} id={"form"}>
       {forms.map((v,i) => (
          <MenuItem key={i} onClick={ () => selectForm(v.Id)}>{v.Name}</MenuItem>
        ))}
      </DropdownButton>
    );
  
}

export default FormList
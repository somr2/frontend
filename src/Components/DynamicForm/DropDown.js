import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FormList = ({forms, dropdownState, toggleDropdown, selectForm}) => {
    return (
      <Dropdown isOpen={dropdownState} toggle={toggleDropdown}>
        <DropdownToggle caret>
          Forms
        </DropdownToggle>
        <DropdownMenu>
          {forms.map((v,i) => (
            <DropdownItem key={i} onClick={ () => selectForm(v.Id)}>{v.Name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  
}

export default FormList
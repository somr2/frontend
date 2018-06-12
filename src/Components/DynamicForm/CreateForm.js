import React from 'react';
import DropDown from './DropDown'
import DatePicker from './DatePicker';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import RecordDisplay from './RecordDisplay';

// import './App.css';

// main component for final integration
class CreateForm extends React.Component {
  componentDidMount(){
    const {fetchForms} = this.props
    fetchForms()
  }

  onchange = (e) => {
    console.log(e.currentTarget.value)
    console.log(e.currentTarget.id)
  }

  render(){
    const {current, forms, dropdownState, toggleDropdown, selectForm, date, changeDate, updateInput} = this.props
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
            <DropDown 
              dropdownState={dropdownState} 
              forms={forms} 
              toggleDropdown={toggleDropdown} 
              selectForm={selectForm}
            />
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<DatePicker date={date} changeDate={changeDate} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<Form>
              {current.Fields.map((v,i) => (
                <FormGroup key={i}>
                  <Label for={v.Name}>{v.Name}</Label>
                  <Input type="text" 
                    onChange={updateInput} 
                    id={v.FieldId} 
                    name={v.Name} 
                    datatype={v.Type} 
                    placeholder={v.Name} 
                    value={v.Input}/>
                </FormGroup>
              ))}

              <Button>Submit</Button>
						</Form>
						</div>
				</div>

			</div>
    )
  }
}

export default CreateForm;

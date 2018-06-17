import React from 'react';
import DropDown from './DropDown'
import DatePicker from './DatePicker';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap'

// main component for final integration
class CreateForm extends React.Component {
  componentDidMount(){
    const {fetchForms} = this.props
    fetchForms()
  }

  render(){
    const {current, forms, selectForm, date, changeDate, updateInput} = this.props
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
            <DropDown 
             
              forms={forms} 
            
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
          <Form horizontal>
            {current && current.Fields && current.Fields.map((v,i) => (
              <FormGroup key={i}>
                <Col componentClass={ControlLabel} sm={2}>
                  {v.Name} 
                </Col>
                <Col sm={10}>
                  <FormControl 
                    type="text" 
                    placeholder={v.Name}  
                    onChange={updateInput}
                    id={v.FieldId} 
                    name={v.Name} 
                    value={v.Input}
                    datatype={v.Type} 
                  />
                </Col>
              </FormGroup>
            ))}
          </Form>
						</div>
				</div>

			</div>
    )
  }
}

export default CreateForm;

import React from 'react';
import DropDown from './DropDown'
import DatePicker from './DatePicker';

// main component for final integration
class CreateForm extends React.Component {
  componentDidMount(){
    const {fetchForms} = this.props
    fetchForms()
  }

  render(){
    const {current, forms, selectForm, date, changeDate, updateInput, submitForm} = this.props
		return (
			<div className="container">
        <div className="row">
        
          <div className="col-md-12">
            <label>Form List:</label>
            <DropDown forms={forms} selectForm={selectForm} />
          </div>

          <div className="radio-inline">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
              All
            </label>
          </div>
          <div className="radio-inline">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
              Range
            </label>
          </div>
        
          <div className="form-inline">
              <label>Start Date:</label>
              <DatePicker date={date} changeDate={changeDate} />
        
              <label>End Date:</label>
              <DatePicker date={date} changeDate={changeDate} />
          </div>
              
        </div>
        <div className="row">
        {
          Array(12).fill(0).map((v,i) => (
            <div className="col-md-4" key={i}>
              <div className="panel panel-default">
                <div className="panel-heading">Panel heading without title</div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>
            </div>))
        }
        </div>
      </div>
    )
  }
}

export default CreateForm;

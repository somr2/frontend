import React, { Component } from 'react';
import DropDown from './DropDown'
import DatePicker from './DatePicker';
import RecordDisplay from './RecordDisplay';

// import './App.css';

// main component for final integration
class CreateForm extends Component {

  render() {
    return (
      <div className="container">
 
        <div className="row">
          <div className="col-md-12">
            <DropDown />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <DatePicker />
          </div>
        </div>

        {/* <div className="row">  
            <div className="col-md-3">        
                <RecordDisplay />
            </div>
            <div className="col-md-3">        
                <RecordDisplay />
            </div>
            <div className="col-md-3">        
                <RecordDisplay />
            </div>
            <div className="col-md-3">        
                <RecordDisplay />
            </div>        
        </div>
   */}
      </div>
    );
  }
}

export default CreateForm;

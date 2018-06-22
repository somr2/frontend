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
    const {current, startDate, endDate, changeStartDate, changeEndDate, forms, selectForm, changeDateFilter, limitedDateRange} = this.props
		return (
			<div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <label>Form List:</label>
                        <DropDown forms={forms} selectForm={selectForm} />
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-12">
                        <label>Date Filter:</label>
                        <label className="radio-inline">
                            <input value="All" type="radio" onChange={changeDateFilter} checked={limitedDateRange === "All"}/>
                            All
                        </label>
                        <label className="radio-inline">
                            <input value="Range" type="radio" onChange={changeDateFilter} checked={limitedDateRange === "Range"} />
                            Time Range
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>Start Date:</label>
                        <DatePicker date={startDate} changeDate={changeStartDate} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>End Date:</label>
                        <DatePicker date={endDate} changeDate={changeEndDate} />
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

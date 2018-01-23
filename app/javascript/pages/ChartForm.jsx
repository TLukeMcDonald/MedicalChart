import React from 'react';
// import "./../../assets/stylesheets/ChartForm"


export default class Chartform extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      problem:        props.chart ? props.chart.problem : '',
      brewery:     props.chart ? props.chart.brewery : '',
      description: props.chart ? props.chart.description : '',
      typeID: props.chart ? props.chart.typeID : '',



}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  console.log('ChartForm component loaded');
  }



  render() {
    console.log(this.props.type);
    console.log({'ChartForm loaded': this.state});



      <div className="chartForm">
        <h1> ChartForm </h1>
        <p>This is the Chartform. It will display the detail information for each chart and allow for add & edit. </p>

      {/* It's its an edit for then update for that id, if its add then just post new state. */}
        <form className={this.props.isadd ? 'addForm' : 'editForm'}
        onSubmit={this.props.isadd
          ? change => this.props.chartSubmit('Put', change, this.state )
          : change => this.props.chartSubmit('Post' , change,
            this.state, this.props.chart.id) }>

          <div className="formEntry">
            <input
              type="text"
              className="formInput"
              name="problem"
              placeholder="Name"
              value={this.state.problem}
              onChange={this.handleChange}
            />


            <input
              type="text"
              className="formInput"
              name="brewery"
              placeholder="Brewery"
              value={this.state.brewery}
              onChange={this.handleChange}
            />


            <input
              type="text"
              className="formInput"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />


            <select
              name="typeID"
              value={this.state.value}
              onChange={this.handleChange}
              className="formInput2"
            >
              <option value="1">Select Type</option>
              {this.props.type.map(type => (
                <option
                  value={type.id}
                  key={type.id}
                > {type.name}
                </option>
              ))}
            </select>


            <input
              type="text"
              className="formInput"
              name="typeID"
              placeholder="Type"
              value={this.state.type}
              onChange={this.handleChange}
            />


            <input
              type="submit"
              className="nav"
              value={this.props.addChart ? 'AddChart' : 'Submit'}
            />

          </div>
        </form>
      </div>



  }
}


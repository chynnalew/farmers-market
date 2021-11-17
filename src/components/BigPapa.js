import React from 'react';
import Location from './Location';
import Produce from "./Produce";
import CalendarDisplay from './Calendar';

class BigPapa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarIsVisible: false,
      locationAndProduce: false
    }
  }

  render() {
    let buttonText = "button!";
    return (
      <React.Fragment>
        <CalendarDisplay />
        <button onClick={this.handleClick}>{buttonText}</button>
        <div class='row'>
          <div class='col'>
            <Location />
          </div>
          <div class='col'>
            <Produce/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BigPapa;
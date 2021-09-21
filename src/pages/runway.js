import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Dresses } from '../constant';

class Runway extends Component {
  render() {
    const id = parseInt(this.props.match.params.id, 10);
    const activeDress = Dresses[id - 1];
    return (
      <div className="runway-page v-r v-c">
        <div className="container">
          <div className="display-area">
            <video className="runway-video" src={activeDress.runway} autoPlay={true} loop={true}/>
          </div>
          <div className="info-area">
            <h1>McQUEEN</h1>
            <p className="description">{activeDress.name}</p>
            <h2>{activeDress.price}</h2>
            <h2>Color: {activeDress.color}</h2>
            <h2>Material: 100% Cotton </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withSnackbar(Runway));

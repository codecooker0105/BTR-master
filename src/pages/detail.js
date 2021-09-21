import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button } from '@material-ui/core';
import { Dresses } from '../constant';

const Sizes = [
  { us: 2, uk: 6, eu: 34 },
  { us: 4, uk: 8, eu: 36 },
  { us: 6, uk: 8, eu: 38 },
]

class Detail extends Component {
  state = {
    activeSize: 0,
    showRunway: false
  }

  goRunway = (id) => {
    this.props.history.push(`/runway/${id}`);
  }

  render() {
    const { activeSize, showRunway } = this.state;
    const id = parseInt(this.props.match.params.id, 10);
    const activeDress = Dresses[id - 1];
    return (
      <div className="detail-page v-r v-c">
        <div className="container">
          <div className="display-area">
            {showRunway && <video className="runway-video" src={activeDress.video} autoPlay={true} loop={true}/>}
            {!showRunway && <video className="front-video" src={activeDress.detail} autoPlay={true} loop={true}/>}
          </div>
          <div className="info-area">
            <h1>McQUEEN</h1>
            <p className="description">{activeDress.name}</p>
            <h2>{activeDress.price}</h2>
            <h2>Color: {activeDress.color}</h2>
            <h2>Material: 100% Cotton </h2>
            <h3>Try On Size:</h3>
            <div className="size-area v-c">
              {Sizes.map((item, index) => <div className={`size-container v-c ${activeSize === index ? 'active' : ''}`} key={index} onClick={e => this.setState({ activeSize: index })}>
                <div className="size-box v-r"> <h4>US</h4> <p>{item.us}</p> </div>
                <div className="size-box v-r"> <h4>UK</h4> <p>{item.uk}</p> </div>
                <div className="size-box v-r"> <h4>EU</h4> <p>{item.eu}</p> </div>
              </div>)}
            </div>
            <div className="btn-area v-r">
              <Button onClick={e => this.setState({ showRunway: !this.state.showRunway })}>{ showRunway ? 'Stop' : 'Try On' }</Button>
              <Button onClick={e => this.goRunway(id)}>Add To Bag</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withSnackbar(Detail));

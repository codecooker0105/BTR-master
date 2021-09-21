import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button } from '@material-ui/core';
import avatar from '../assets/images/avatar.png';
import { Dresses } from '../constant';
import mcqueen from '../assets/images/mcqueen_logo.png';

class Shop extends Component {
  moveNext = (id) => {
    this.props.history.push(`/detail/${id}`);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="shop-page v-r v-c">
        <h1>Shop with Avatar</h1>
        <div className="underline" />
        <img src={mcqueen} alt="logo" className="queen_logo" />
        <div className="container">
          <div className="avatar-area v-r v-c">
            {name.length > 0 && <h2>{name}</h2>}
            <p>Shop with your avatar</p>
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
          <div className="dress-box">
            {Dresses.map((item, index) => <div className="dress-container v-r" key={index}>
              <div className="img-area">
                <img src={item.front} alt="front" />
                <div className="button-area v-c h-c">
                  <Button onClick={e => this.moveNext(item.id)}>View Item</Button>
                </div>
              </div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.auth.name
  }
}

export default connect(mapStateToProps, {})(withSnackbar(Shop));

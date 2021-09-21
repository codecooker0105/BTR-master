import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { setName } from '../redux/actions';

class Login extends Component {
  state = {
    name: ''
  }

  moveNext = () => {
    if (this.state.name.length === 0) {
      this.props.enqueueSnackbar("Please input name.", { variant: 'error' })
      return;
    }
    this.props.setName(this.state.name)
    this.props.history.push('/selfie');
  }

  render() {
    const { name } = this.state;
    return (
      <div className="login-page v-r v-c">
        <h1>Create your Personalized Avatar</h1>
        <div className="underline" />
        <h2>Please11 type your name</h2>
        <input placeholder="Name..." value={name} onChange={e => this.setState({ name: e.target.value })} />
        <h2 style={{marginBottom: 0}}>Gender</h2>
        <RadioGroup row aria-label="position" name="position" defaultValue="0">
          <FormControlLabel
            value="0"
            control={<Radio color="default" size="small"/>}
            label="Male"
            labelPlacement="end"
          />
          <FormControlLabel
            value="1"
            control={<Radio color="default" size="small"/>}
            label="Female"
            labelPlacement="end"
          />
        </RadioGroup>
        <Button onClick={this.moveNext}>Continue</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, { setName })(withSnackbar(Login));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button } from '@material-ui/core';
import selfie from '../assets/images/selfie_face.jpeg';
import front from '../assets/images/selfie_front.jpeg';
import side from '../assets/images/selfie_side.jpeg';
import { uploadPhoto } from '../redux/actions';
import axios from 'axios';

class Selfie extends Component {
  state = {
    step: 0
  }

  openFile = () => {
    this.fileInput.click()
  }

  fileSelected = (e) => {
    this.props.uploadPhoto(e.target.files[0], this.state.step)
  }

  moveNext = () => {
    if (!this.props.photos[this.state.step]) {
      this.props.enqueueSnackbar("Please select a photo.", { variant: 'error' })
      return;
    }
    if (this.state.step === 2) {
      const formData = new FormData();
       // Update the formData object
      formData.append(
        "myFile", this.props.photos
      );
      axios.post("http://3.16.135.245/uploadfile.php", formData)
        .then((res) => {
          setTimeout( () => {
            this.props.history.push('/avatar')
          }, 6000);
        })
        .catch((err) => {
          console.log(err)
        });
      return;
    }
    this.setState({ step: this.state.step + 1 })
    window.scrollTo(0, 0)
  }

  render() {
    const { step } = this.state;
    const { photos } = this.props;
    return (
      <div className="selfie-page v-r v-c">
        <h1>
          {step === 0 ? 'Take a selfie shot' : step === 1 ? 'Take a front shot (Full Length)' : 'Take a Side Shot (Full Length)'}
        </h1>
        <div className="photo-container v-c h-c">
          <img src={ photos[step] ? URL.createObjectURL(photos[step]) : step === 0 ? selfie : step === 1 ? front : side } alt="selfie" />
        </div>
        <input type="file" style={{display: 'none'}} ref={c => this.fileInput = c} accept="image/*" onChange={e => this.fileSelected(e)} />
        <div className="btn-area v-c">
          <Button onClick={this.openFile}>Upload Image</Button>
          <Button className="next-btn" onClick={this.moveNext}>Next</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.auth.selfie
  }
}

export default connect(mapStateToProps, { uploadPhoto })(withSnackbar(Selfie));

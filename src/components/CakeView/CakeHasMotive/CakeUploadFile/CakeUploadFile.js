import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Dropzone from 'react-dropzone';

export default class CakeUploadFile extends React.Component {
  static propTypes = {
    openModalFile: React.PropTypes.bool.isRequired,
    onCloseModal: React.PropTypes.func.isRequired,
    onSaveImage: React.PropTypes.func.isRequired
  };
  render() {
    const styles = require('./CakeUploadFile.scss');
    const actionModal = [
      <FlatButton label="close" primary onTouchTap={this.props.onCloseModal}/>,
      <RaisedButton label="upload" labelColor="white" primary onTouchTap={() => this.refs.dropzone.open()}/>
    ];
    return (
      <Dialog open={this.props.openModalFile}
              title="Upload file image"
              actions={actionModal}
              onRequestClose={this.props.onCloseModal}
      >
        <div className="row">
          <Dropzone className={'col s12 ' + styles.dropZoneContainer} ref="dropzone" onDrop={this.props.onSaveImage}>
            <div className="row">
              <div className="col s12">
                Перетащие сюда вашу фотографию или нажмите что бы выбрать
              </div>
            </div>
          </Dropzone>
        </div>
      </Dialog>
    );
  }
}

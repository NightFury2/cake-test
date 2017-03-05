import React from 'react';

import Title from '../Title/Title';
import CakeUploadFile from './CakeUploadFile/CakeUploadFile';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class CakeHasMotive extends React.Component {
  static propTypes = {
    motivePrice: React.PropTypes.number.isRequired,
    cakeMotivePrice: React.PropTypes.object,
    cakeHasMotive: React.PropTypes.bool.isRequired,
    setCakeTextStep: React.PropTypes.func.isRequired,
    isActiveStep: React.PropTypes.bool.isRequired,
    setCakeMotiveStep: React.PropTypes.func.isRequired,
    setCakeMotivePrice: React.PropTypes.func.isRequired
  };
  state = {
    openModalFile: false,
    files: []
  };
  onOpenModal = () => {
    this.setState({
      openModalFile: true
    });
  };
  onCloseModal = () => {
    this.setState({
      openModalFile: false
    });
  };
  onSaveImage = (files) => {
    this.setState({
      files: files
    });
    this.props.setCakeMotivePrice({
      price: this.props.motivePrice
    });
    this.onCloseModal();
  };
  render() {
    const activeStepMotive = this.props.isActiveStep ? '' : '0.3';
    const style = require('./CakeHasMotive.scss');
    return (
      <div className="row" style={{opacity: activeStepMotive}}>
        <div className="col s12">
          <div className="row">
            <div className="col s12 l5">
              <Title isActive={this.props.cakeHasMotive} name="Vil du ha bilde på?"/>
            </div>
            <div className="col s12 l7" style={{marginTop: '20px'}}>
              <RadioButtonGroup name="fillingsStep"
                                onChange={(event, value) => {
                                  this.props.setCakeTextStep(true);
                                  this.props.setCakeMotiveStep(false);
                                  this.props.setCakeMotivePrice({
                                    price: value
                                  });
                                  if (value === this.props.motivePrice && this.state.files.length <= 0) {
                                    this.onOpenModal();
                                  }
                                }}
              >
                <RadioButton labelStyle={{fontSize: '20px'}} value={0} label="Nei"/>
                <RadioButton labelStyle={{fontSize: '20px'}} value={this.props.motivePrice} label={`ja - ${this.props.motivePrice} kr`} />
              </RadioButtonGroup>
              {this.state.files.length > 0 && this.props.cakeMotivePrice.price !== 0 ?
                <div className="row">
                  {this.state.files.map((item, index) => {
                    return <img className={'col s10 align-center ' + style.imageUpload} src={item.preview} key={index}/>;
                  })}
                </div> : null
              }
              <CakeUploadFile openModalFile={this.state.openModalFile}
                              onCloseModal={this.onCloseModal}
                              onSaveImage={this.onSaveImage}
              />
              <div className="col s12">
                <p>Bildet skrives på kaken i spiselige farger. Bildet tilpasses størrelsen på kaken. Klikk på bildet om du vil endre det.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

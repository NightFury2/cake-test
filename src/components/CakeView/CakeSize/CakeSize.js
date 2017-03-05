import React from 'react';

import CakeSizeShape from './CakeSizeShape/CakeSizeShape';
import Title from '../Title/Title';

export default class CakeSize extends React.Component {
  static propTypes = {
    size: React.PropTypes.array,
    cakePriceBySize: React.PropTypes.array,
    cakeSizeStep: React.PropTypes.bool,
    cakeSizeId: React.PropTypes.number,
    isActiveStep: React.PropTypes.bool.isRequired,
    setCakeSizeId: React.PropTypes.func.isRequired,
    setCakeSizeStep: React.PropTypes.func.isRequired,
    setCakeFillingStep: React.PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="row">
        <div className="col s12 l5">
          <Title isActive={!this.props.isActiveStep || this.props.cakeSizeStep} name="Velg størrelse"/>
        </div>
        <div className="col s12 l7">
          <div className="row">
            <div className="col s12">
              {this.props.size &&
                this.props.size.sort((item1, item2) => {
                  return parseInt(item1.name, 10) - parseInt(item2.name, 10);
                }).map((item, index) => <CakeSizeShape setCakeFillingStep={this.props.setCakeFillingStep} setCakeSizeStep={this.props.setCakeSizeStep} cakePriceBySize={this.props.cakePriceBySize} cakeSizeId={this.props.cakeSizeId} setCakeSizeId={this.props.setCakeSizeId} {...item} key={index}/>)
              }
            </div>
            <div className="col s12">
              <p>
                Hvor mange biter trenger man? Et forslag er å beregne 1,5 biter per person. Da får alle et stykke og noen kan ta et ekstra. Og rester er jo uansett godt å ha i kjøleskapet :)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

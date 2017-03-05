import React from 'react';

import Title from '../Title/Title';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import lodash from 'lodash';

const styleRadioButton = {
  label: {
    fontSize: '20px'
  }
};

export default class CakeFillings extends React.Component {
  static propTypes = {
    cakeFillings: React.PropTypes.array,
    isActiveStep: React.PropTypes.bool.isRequired,
    cakeFillingStep: React.PropTypes.bool.isRequired,
    cakeSizeId: React.PropTypes.number,
    cakeFillingId: React.PropTypes.number,
    cakePrices: React.PropTypes.array,
    setCakeFillingStep: React.PropTypes.func.isRequired,
    setCakeFillingId: React.PropTypes.func.isRequired,
    setCakeMotiveStep: React.PropTypes.func.isRequired
  };
  filterPriceByCakeSizeId = (cakePrices, cakeSizeId) => {
    return cakePrices.filter((item) => {
      return parseInt(item.cakeSizeId, 10) === cakeSizeId;
    });
  };
  filterFillingsByPrice = (cakePrices, cakeFillings) => {
    return lodash.filter(cakeFillings, (item) => {
      if (lodash.find(cakePrices, {cakeFillingId: item.id}) !== undefined && !item.isDefault) {
        return item;
      }
    });
  };
  render() {
    const activeStepFilling = this.props.isActiveStep ? '' : '0.3';
    const priceByCakeSizeId = this.filterPriceByCakeSizeId(this.props.cakePrices, this.props.cakeSizeId);
    const fillings = this.filterFillingsByPrice(priceByCakeSizeId, this.props.cakeFillings);
    const defaultFilling = fillings.length > 0 ? fillings.filter(item => {return item.isDefault !== false;}) : [];
    const cakeFillings = fillings.length > 0 ? [...defaultFilling, ...fillings] : this.props.cakeFillings;
    return (
      <div className="row" style={{opacity: activeStepFilling}}>
        <div className="col s12">
          <div className="row">
            <div className="col s12 l5">
              <Title isActive={this.props.cakeFillingStep} name="Velg smak/fyll"/>
            </div>
            <div className="col s12 l7">
              <div className="row">
                <div className="col s12">
                  <RadioButtonGroup name="fillingsStep"
                                    defaultSelected={this.props.cakeFillingId > 0 ? this.props.cakeFillingId : ''}
                                    onChange={(event, value) => {
                                      this.props.setCakeFillingStep(false);
                                      this.props.setCakeFillingId(value);
                                      if (this.props.cakeFillingId <= 0) {
                                        this.props.setCakeMotiveStep(true);
                                      }
                                    }}
                  >
                    {cakeFillings &&
                      cakeFillings.map((item, index) => <RadioButton labelStyle={styleRadioButton.label} value={item.id} label={item.name} key={index}/>)
                    }
                  </RadioButtonGroup>
                </div>
                <div className="col s12">
                  <p>
                    Dette kommer i tillegg til standard ingredienser. Se ingredienser under kakeinformasjonen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

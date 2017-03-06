import React from 'react';

import Title from '../Title/Title';
import {CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import lodash from 'lodash';

export default class CakeExtensions extends React.Component {
  static propTypes = {
    cakeExtensions: React.PropTypes.array.isRequired,
    isActiveStep: React.PropTypes.bool.isRequired,
    cakeSizeId: React.PropTypes.number.isRequired,
    cakeFillingId: React.PropTypes.number.isRequired,
  };
  state = {
    cakeExtension: {
      name: '',
      cakeExtensionId: 1,
      price: 0,
    }
  };

  handleChange = (event, index, value) => {
    this.setState({
      cakeExtension: {
        name: value.name,
        cakeExtensionId: value.icakeExtensionId,
        price: value.price,
      }
    });
  };
  filterCakeExtensionsByCakeSizeAndFilling = (cakeExtensions, cakeSizeId, cakeFillingId) => {
    return lodash.filter(cakeExtensions, (item) => {
      return item.cakeSize === cakeSizeId && item.cakeFilling === cakeFillingId;
    });
  };
  render() {
    const activeStepExtensions = this.props.isActiveStep ? '' : '0.3';
    const filterCakeExtensions = this.props.cakeExtensions ? this.filterCakeExtensionsByCakeSizeAndFilling(this.props.cakeExtensions, this.props.cakeSizeId, this.props.cakeFillingId) : [];
    console.log(this.state);
    return (
      <div style={{opacity: activeStepExtensions}}>
        {lodash.map(filterCakeExtensions, (item, index) => {
          return (
            <div key={index}>
              <Divider/>
              <CardText>
                <div className="row">
                  <div className="col s12">
                    <div className="row">
                      <div className="col s12 l5">
                        <Title isActive={false} name={item.description}/>
                      </div>
                      <div className="col s12 l7">
                        <div className="row">
                          <div className="col s12">
                            <SelectField value={this.state.cakeExtension.cakeExtensionId} onChange={this.handleChange}>
                              <MenuItem value={{cakeExtensionId: 1, name: '', price: 0}} primaryText="dsasd"/>
                              {item.items.sort((elem1, elem2) => {return elem1.sortNo - elem2.sortNo;}).map((elem, index2) => {
                                return (
                                  <MenuItem value={{cakeExtensionId: elem.id + 2, name: elem.name, price: elem.price}} primaryText={elem.name} key={index2}/>
                                );
                              })}
                            </SelectField>
                          </div>
                          <div className="col s12">
                            <p>
                              {item.helpText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardText>
            </div>
          );
        })}
      </div>
    );
  }
}

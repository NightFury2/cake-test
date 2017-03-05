import React from 'react';

import AddIcon from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/content/remove';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {teal500} from 'material-ui/styles/colors';

import lodash from 'lodash';

export default class CakeActionFooter extends React.Component {
  static propTypes = {
    card: React.PropTypes.object,
    count: React.PropTypes.number.isRequired,
    cake: React.PropTypes.array.isRequired,
    setCakeCount: React.PropTypes.func.isRequired,
    isActiveStep: React.PropTypes.bool.isRequired
  };
  calcPrice = (count, motivePrice, textPrice, cakePrice) => {
    return (motivePrice + textPrice + cakePrice) * count;
  };
  render() {
    const activeActionFooter = this.props.isActiveStep ? '' : '0.3';
    const filterPriceByCakeSizeAndFillings = lodash.find(this.props.cake.cakePrices, {cakeSizeId: this.props.card.cakeSizeId, cakeFillingId: this.props.card.cakeFillingId});
    return (
      <div className="row" style={{opacity: activeActionFooter}}>
        <div className="col s12" >
          <div className="row">
            <div className="col s12 l5">
              <div className="row">
                <List>
                  <Subheader> Price List:</Subheader>
                  <ListItem style={{background: teal500}} primaryText={this.props.cake.bakery.name} rightIcon={<IconButton><DeleteIcon/></IconButton>}/>
                  <Divider/>
                  <ListItem style={{background: 'white', color: teal500}} primaryText={this.props.cake.name}/>
                  <Divider/>
                  {this.props.card.cakeSizeId !== 0 && this.props.card.cakeFillingId &&
                    <div>
                      {filterPriceByCakeSizeAndFillings &&
                          <ListItem style={{background: 'white', color: teal500}} primaryText={`${lodash.find(this.props.cake.cakeSizes, {id: this.props.card.cakeSizeId}).description}/${lodash.find(this.props.cake.cakeFillings, {id: this.props.card.cakeFillingId}).name} - ${filterPriceByCakeSizeAndFillings.price} kr`}/>

                      }
                      <Divider/>
                    </div>
                  }
                  <ListItem style={{background: 'white', color: teal500}} primaryText={`price: ${this.calcPrice(this.props.card.count, this.props.card.cakeMotivePrice.price, this.props.card.cakeTextPrice.price, filterPriceByCakeSizeAndFillings.price)}`}/>
                </List>
              </div>
            </div>
            <div className="col s12 l7">
              <div className="row">
                <div style={{float: 'right', margin: '20px'}}>
                  <span>Velg antall: </span>
                  <div>
                    {this.props.count > 1 &&
                      <IconButton onTouchTap={this.props.setCakeCount(this.props.count - 1)}>
                        <RemoveIcon/>
                      </IconButton>
                    }
                    <span>{this.props.count}</span>
                    {this.props.count < 100 &&
                      <IconButton onTouchTap={this.props.setCakeCount(this.props.count + 1)}>
                        <AddIcon/>
                      </IconButton>
                    }
                  </div>
                </div>
                <RaisedButton style={{margin: '20px'}} className="right" label="Gå til kasse" labelPosition="before" icon={<ArrowRightIcon/>}/>
                <RaisedButton style={{margin: '20px'}} labelColor={'white'} className="right" label="Legg til flere" secondary icon={<AddIcon/>}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

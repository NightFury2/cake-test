import React from 'react';

import Cakes from '../Cake/Cakes';
import Baguettes from '../Baguette/Baguettes';

import RaisedButton from 'material-ui/RaisedButton';
import IconArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import {load as loadCakes} from '../../redux/modules/cakes';
import {load as loadBaguettes} from '../../redux/modules/baguettes';
import {load as loadBakery} from '../../redux/modules/bakery';
import {setCakeSizeId} from '../../redux/modules/card';
import {setBakery, setSizeCake, setDeliveryMethodCake, setAllergenCake} from '../../redux/modules/search';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

@connect(
  state => ({
    // cakes
    cakes: state.cakes.data,
    loadingCakes: state.cakes.loadingCakes,
    loadedCakes: state.cakes.loadedCakes,
    // baguettes
    loadedBaguettes: state.baguettes.loaded,
    baguettes: state.baguettes.data,
    // bakery
    loadedBakery: state.bakery.loaded,
    bakery: state.bakery.data,
    // search
    searchBakery: state.search.searchBakery,
    deliveryMethodCake: state.search.deliveryMethodCake,
    sizeMenuValue: state.search.sizeMenuValue,
    allergenCake: state.search.allergenCake
  }),
  {loadCakes, loadBaguettes, setBakery, setCakeSizeId, loadBakery, setDeliveryMethodCake, setAllergenCake, setSizeCake, pushState: push})
export default class City extends React.Component {
  static propTypes = {
    // react
    params: React.PropTypes.object,
    pushState: React.PropTypes.func.isRequired,
    // cakes
    cakes: React.PropTypes.array,
    loadingCakes: React.PropTypes.bool,
    loadedCakes: React.PropTypes.bool.isRequired,
    loadCakes: React.PropTypes.func.isRequired,
    // baguettes
    loadedBaguettes: React.PropTypes.bool.isRequired,
    baguettes: React.PropTypes.array,
    loadBaguettes: React.PropTypes.func,
    // bakery
    loadedBakery: React.PropTypes.bool.isRequired,
    bakery: React.PropTypes.array,
    loadBakery: React.PropTypes.func.isRequired,
    // search
    searchBakery: React.PropTypes.string,
    sizeMenuValue: React.PropTypes.number,
    setSizeCake: React.PropTypes.func,
    setBakery: React.PropTypes.func,
    deliveryMethodCake: React.PropTypes.number,
    setDeliveryMethodCake: React.PropTypes.func,
    allergenCake: React.PropTypes.number,
    setAllergenCake: React.PropTypes.func,
    // card
    setCakeSizeId: React.PropTypes.func.isRequired
  };
  state = {
    type: true
  };
  componentDidMount() {
    this.props.loadCakes(this.props.params.city, 100, 1);
    this.props.loadBaguettes(this.props.params.city, 100, 2);
    this.props.loadBakery(this.props.params.city);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.city !== nextProps.params.city) {
      this.props.loadCakes(nextProps.params.city, 100, 1);
      this.props.loadBaguettes(nextProps.params.city, 100, 2);
      this.props.loadBakery(nextProps.params.city);
    }
  }
  handleChangeOfTypeCakes = () => {
    this.setState({type: !this.state.type});
  };
  render() {
    const lableButtonChangeType = this.state.type ? 'Vis catering' : 'Vis kaker';
    const lableType = this.state.type ? 'KAKER' : 'CATERING';
    return (
      <div className="col s12">
        <div className="row">
          <div className="col s12">{lableType} {this.props.params.city}
            <RaisedButton label={lableButtonChangeType}
                          className={'right'}
                          onTouchTap={this.handleChangeOfTypeCakes}
                          icon={<IconArrowRight/>}
                          labelPosition="before"
            />
          </div>
          <div className="col s12">
            <div className="row" style={{marginTop: '30px'}}>
              {this.props.cakes &&
                <Cakes city={this.props.params.city}
                       bakery={this.props.bakery}
                       setSizeCake={this.props.setSizeCake}
                       pushState={this.props.pushState}
                       loadedCakes={this.props.loadedCakes}
                       loadingCakes={this.props.loadingCakes}
                       allergenCake={this.props.allergenCake}
                       setAllergenCake={this.props.setAllergenCake}
                       deliveryMethodCake={this.props.deliveryMethodCake}
                       setDeliveryMethodCake={this.props.setDeliveryMethodCake}
                       sizeMenuValue={this.props.sizeMenuValue}
                       setCakeSizeId={this.props.setCakeSizeId}
                       searchBakery={this.props.searchBakery}
                       setBakery={this.props.setBakery}
                       type={this.state.type}
                       cakes={this.props.cakes}
                />
              }
              {this.props.baguettes &&
                <Baguettes city={this.props.params.city} type={this.state.type} cakes={this.props.baguettes}/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

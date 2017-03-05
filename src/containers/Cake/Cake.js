import React from 'react';

import CakeView from '../../components/CakeView/CakeView';

import {loadCake} from '../../redux/modules/cakes';
import {
  setCakeSizeId, setCakeFillingId, setCakeMotivePrice, setCakeTextPrice, setCakeMessageBakery,
  setCakeFillingStep, setCakeSizeStep, setCakeMotiveStep, setCakeTextStep, setCakeCount
} from '../../redux/modules/card';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

@connect(
  state => ({
    // cakes
    loadedCake: state.cakes.loadedCake,
    loadingCake: state.cakes.loadingCake,
    cake: state.cakes.cake,
    // card
    cakeSizeId: state.card.cakeSizeId,
    cakeMotivePrice: state.card.cakeMotivePrice,
    cakeFillingId: state.card.cakeFillingId,
    messageBakery: state.card.messageBakery,
    count: state.card.count,
    card: state.card,
    step: state.card.step
  }), {
    loadCake, setCakeSizeId, setCakeFillingId, setCakeMotivePrice, setCakeTextPrice, setCakeCount,
    setCakeFillingStep, setCakeMotiveStep, setCakeTextStep, setCakeSizeStep, setCakeMessageBakery, pushState: push
  })
export default class Cake extends React.Component {
  static propTypes = {
    // react
    params: React.PropTypes.object,
    location: React.PropTypes.object,
    pushState: React.PropTypes.func.isRequired,
    // cakes
    cake: React.PropTypes.object,
    loadingCake: React.PropTypes.bool,
    loadedCake: React.PropTypes.bool.isRequired,
    loadCake: React.PropTypes.func.isRequired,
    // card
    card: React.PropTypes.object,
    count: React.PropTypes.number.isRequired,
    setCakeCount: React.PropTypes.func.isRequired,
    cakeMotivePrice: React.PropTypes.object,
    cakeSizeId: React.PropTypes.number,
    cakeFillingId: React.PropTypes.number,
    step: React.PropTypes.object,
    messageBakery: React.PropTypes.object.isRequired,
    setCakeMessageBakery: React.PropTypes.func.isRequired,
    setCakeSizeId: React.PropTypes.func.isRequired,
    setCakeFillingId: React.PropTypes.func.isRequired,
    setCakeSizeStep: React.PropTypes.func.isRequired,
    setCakeFillingStep: React.PropTypes.func.isRequired,
    setCakeMotiveStep: React.PropTypes.func.isRequired,
    setCakeTextStep: React.PropTypes.func.isRequired,
    setCakeMotivePrice: React.PropTypes.func.isRequired,
    setCakeTextPrice: React.PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.loadCake(this.props.location.query.cakeId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.cakeId !== nextProps.location.query.cakeId) {
      this.props.loadCake(nextProps.location.query.cakeId);
    }
  }
  render() {
    return (
      <div className="col s12">
        <h5>{`cake - ${this.props.params.cakeName}, id - ${this.props.location.query.cakeId}${this.props.cakeSizeId > 0 ? ` , size - ${this.props.cakeSizeId}` : ``}`}</h5>
        <div className="row" style={{marginTop: '30px'}}>
          {this.props.cake &&
            <CakeView step={this.props.step}
                      messageBakery={this.props.messageBakery}
                      setCakeMessageBakery={this.props.setCakeMessageBakery}
                      cakeMotivePrice={this.props.cakeMotivePrice}
                      setCakeMotivePrice={this.props.setCakeMotivePrice}
                      cakeSizeId={this.props.cakeSizeId}
                      cakeFillingId={this.props.cakeFillingId}
                      cake={this.props.cake}
                      count={this.props.count}
                      card={this.props.card}
                      setCakeCount={this.props.setCakeCount}
                      setCakeSizeId={this.props.setCakeSizeId}
                      setCakeFillingId={this.props.setCakeFillingId}
                      setCakeSizeStep={this.props.setCakeSizeStep}
                      setCakeTextPrice={this.props.setCakeTextPrice}
                      setCakeFillingStep={this.props.setCakeFillingStep}
                      setCakeTextStep={this.props.setCakeTextStep}
                      setCakeMotiveStep={this.props.setCakeMotiveStep}
            />
          }
        </div>
      </div>
    );
  }
}

import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';

import lodash from 'lodash';

import CakeItem from '../../components/Cake/CakeItem';

const cakeSizes = [
  {
    value: 2,
    from: 0,
    to: 10,
    title: '< 10 biter'
  }, {
    value: 3,
    from: 10,
    to: 20,
    title: '10 - 20 biter'
  }, {
    value: 4,
    from: 20,
    to: 30,
    title: '20 - 30 biter'
  }, {
    value: 5,
    from: 30,
    to: 50,
    title: '30 - 50 biter'
  }, {
    value: 6,
    from: 50,
    to: Infinity,
    title: '50 + biter'
  }
];

export default class Cakes extends React.Component {
  static propTypes = {
    type: React.PropTypes.bool,
    pushState: React.PropTypes.func.isRequired,
    // cakes
    loadingCakes: React.PropTypes.bool,
    loadedCakes: React.PropTypes.bool.isRequired,
    cakes: React.PropTypes.array,
    // city
    city: React.PropTypes.string,
    // bakery
    bakery: React.PropTypes.array,
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
    bakeryMenuValue: 1,
    deliveryMenuValue: 1,
    allergenMenuValue: 1,
  };
  handleChangeBakeryMenu = (event, index, value) => {
    this.setState({bakeryMenuValue: value});
    if (index >= 1) {
      this.props.setBakery(this.props.bakery[index - 1].name);
    } else {
      this.props.setBakery('Alle');
    }
  };
  filterBackery = (bakery) => {
    const indexBackery = lodash.find(this.props.bakery, {name: bakery});
    console.log(indexBackery);
  };
  sortAllergens = (cakes) => {
    return lodash.reduce(cakes, (res, item) => {
      if (item.extraInfo !== null) {
        if (item.extraInfo.allergens !== null) {
          return [...res, ...item.extraInfo.allergens];
        }
        return res;
      }
      return res;
    }, []);
  };
  filterCakeByBakery = (cake, searchBakery) => {
    if (searchBakery === 'Alle') {
      return cake;
    } else if (searchBakery === cake.bakery.name) {
      return cake;
    }
  };
  filterCakesBySize = (cake, searchSize) => {
    const size = lodash.find(cakeSizes, {value: searchSize});

    if (searchSize === 1) {
      return cake;
    }
    return cake.cakeSizes.some(elem => elem.size >= size.from && elem.size < size.to);
  };
  filterByDelivery = (cake, searchDeliveryValue) => {
    if (searchDeliveryValue === 1) {
      return cake;
    } else if (searchDeliveryValue === 2 && cake.gotHomeDelivery) {
      return cake;
    } else if (searchDeliveryValue === 3 && !cake.gotHomeDelivery) {
      return cake;
    }
  };
  filterByAllergens = (cake, allergens, searchAllergenValue) => {
    if (searchAllergenValue === 1) {
      return cake;
    } else if (cake.extraInfo) {
      if (cake.extraInfo.allergens) {
        return lodash.find(cake.extraInfo.allergens, {type: allergens[searchAllergenValue - 2].type});
      }
    }
  };
  handleChangeSizeMenu = (event, index, value) => {this.props.setSizeCake(value);};
  handleChangeDeliveryMenu = (event, index, value) => {this.props.setDeliveryMethodCake(value);};
  handleChangeAllergenMenu = (event, index, value) => {this.props.setAllergenCake(value);};
  render() {
    const loadingContent = !this.props.loadingCakes ? {content: 'block', preloader: 'none'} : {content: 'none', preloader: 'block'};
    const visible = this.props.type ? 'block' : 'none';
    const allergens = this.props.cakes ? lodash.uniqBy(this.sortAllergens(this.props.cakes), 'type') : [];
    this.props.cakes.sort((item1, item2) => {return item1.sortNo - item2.sortNo;});
    const sortCake = this.props.cakes ? lodash.sortBy(this.props.cakes, ['sortNo']) : [];
    return (
      <div className="col s12" style={{display: visible}}>
        <div className="row" style={{display: loadingContent.preloader}}>
          <div className="col s5 center">
            <CircularProgress size={80} thickness={5} />
          </div>
        </div>
        <div className="row" style={{display: loadingContent.content}}>
          <div className="col s12">
            <div className="right">
              <DropDownMenu value={this.state.bakeryMenuValue} onChange={this.handleChangeBakeryMenu}>
                <MenuItem value={1} label="Velg baker" primaryText="Alle"/>
                {this.props.bakery && this.props.bakery.map((item, index) => {
                  const count = index + 2;
                  return <MenuItem value={count} primaryText={item.name} key={item.id}/>;
                })}
              </DropDownMenu>
              <DropDownMenu value={this.props.sizeMenuValue} onChange={this.handleChangeSizeMenu}>
                <MenuItem value={1} label="Velg antall personer" primaryText="Alle"/>
                {cakeSizes.map((size, index) => <MenuItem value={size.value} primaryText={size.title} key={index}/>)}
              </DropDownMenu>
              <DropDownMenu value={this.props.deliveryMethodCake} onChange={this.handleChangeDeliveryMenu}>
                <MenuItem value={1} label="Velg leveringsmåte" primaryText="Alle"/>
                <MenuItem value={2} primaryText="Levering på dør"/>
                <MenuItem value={3} primaryText="Hente i butikk"/>
              </DropDownMenu>
              <DropDownMenu value={this.props.allergenCake} onChange={this.handleChangeAllergenMenu}>
                <MenuItem value={1} label="Uten allergener" primaryText="Alle"/>
                {allergens && allergens.map((item, index) => <MenuItem value={index + 2} primaryText={item.type} key={index}/>)}
              </DropDownMenu>
            </div>
          </div>
          <div className="col s12">
            <div className="row">
              {sortCake.filter((cake) => {
                if (this.filterCakeByBakery(cake, this.props.searchBakery) &&
                    this.filterCakesBySize(cake, this.props.sizeMenuValue) &&
                    this.filterByDelivery(cake, this.props.deliveryMethodCake) &&
                    this.filterByAllergens(cake, allergens, this.props.allergenCake)
                ) {
                  return cake;
                }
              }).map((item, index) => <CakeItem setCakeSizeId={this.props.setCakeSizeId} pushState={this.props.pushState} setBakery={this.filterBackery} {...item} key={index}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import {teal500, teal100} from 'material-ui/styles/colors';

import lodash from 'lodash';

export default class CakeSizeShape extends React.Component {
  filterSizeShape = (shape) => {
    if (shape === 1) {
      return '0';
    } else if (shape === 2) {
      return '40%';
    }
    return '50%';
  };
  render() {
    const size = this.props;
    const style = require('./CakeSizeShape.scss');
    const valueBorderRadius = this.filterSizeShape(size.shape);
    const price = lodash.find(size.cakePriceBySize, {cakeSizeId: size.id});
    return (
      <div className={style.shapeContainer}>
        <div>{size.description}</div>
        <FloatingActionButton style={{margin: '5px', borderRadius: valueBorderRadius}}
                              iconStyle={{borderRadius: valueBorderRadius}}
                              onTouchTap={() => {size.setCakeSizeId(parseInt(size.id, 10)); size.setCakeSizeStep(false); size.setCakeFillingStep(true);}}
                              backgroundColor={size.cakeSizeId === parseInt(size.id, 10) ? teal500 : teal100}
        >
          <div style={{color: 'white'}}>
            {`${size.name} biter`}
          </div>
        </FloatingActionButton>
        <div>{`${price.price} kr`}</div>
      </div>
    );
  }
}

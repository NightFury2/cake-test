import React from 'react';
import {Link} from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import {teal500} from 'material-ui/styles/colors';

export default class CakeShape extends React.Component {
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
    const valueBorderRadius = this.filterSizeShape(size.shape);
    return (
      <Link to={{pathname: `/Alle/cake/${size.cakeName}`, query: { cakeId: size.cakeId}}}>
        <FloatingActionButton onTouchTap={() => {size.setCakeSizeId(parseInt(size.id, 10));}}
                              style={{margin: '5px', borderRadius: valueBorderRadius}}
                              iconStyle={{borderRadius: valueBorderRadius}}
                              backgroundColor={teal500}
        >
          <div style={{color: 'white'}}>
            {`${size.name} biter`}
          </div>
        </FloatingActionButton>
      </Link>
    );
  }
}

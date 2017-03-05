import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import {deepOrange500, grey600} from 'material-ui/styles/colors';

export default class Title extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool
  };
  render() {
    const active = this.props.isActive ? deepOrange500 : grey600;
    const styles = require('./Title.scss');
    const classTitle = this.props.isActive ? styles.titleActive : styles.title;
    return (
      <div className="row">
        <MenuItem disabled className={classTitle} primaryText={this.props.name} style={{backgroundColor: active, color: 'white'}}/>
      </div>
    );
  }
}


import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Baguettes extends React.Component {
  static propTypes = {
    baguettes: React.PropTypes.array,
    type: React.PropTypes.bool,
    city: React.PropTypes.string
  };
  handleChangeMenu = (event, index, value) => {console.log(event, index, value);};
  render() {
    const visible = this.props.type ? 'none' : 'block';
    return (
      <div className="col s12" style={{display: visible}}>
        <div className="row">
          <div className="col s12">
            <div className="right">
              <DropDownMenu value={1} onChange={this.handleChangeMenu}>
                <MenuItem value={1} primaryText="Alle"/>
                <MenuItem value={2} primaryText="Alle"/>
              </DropDownMenu>
              <DropDownMenu value={1} onChange={this.handleChangeMenu}>
                <MenuItem value={1} primaryText="Alle"/>
                <MenuItem value={2} primaryText="Alle"/>
              </DropDownMenu>
            </div>
          </div>
          <div className="col s12">
            {this.props.baguettes &&
              this.props.baguettes.map(item => <p>{item.name}</p>)
            }
          </div>
        </div>
      </div>
    );
  }
}

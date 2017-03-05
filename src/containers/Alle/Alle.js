import React from 'react';

import StepperCard from '../../components/StepperCard/StapperCard';

export default class Alle extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };
  render() {
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <StepperCard/>
              {this.props.children || ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

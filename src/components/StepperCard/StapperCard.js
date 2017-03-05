import React from 'react';

import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';

export default class StapperCard extends React.Component {
  render() {
    return (
      <div className="col s12" style={{width: '100%', margin: 'auto'}}>
        <Stepper>
          <Step>
            <StepLabel>Velg kake</StepLabel>
          </Step>
          <Step>
            <StepLabel>Tilpass</StepLabel>
          </Step>
          <Step>
            <StepLabel>Levering</StepLabel>
          </Step>
          <Step>
            <StepLabel>Betaling</StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

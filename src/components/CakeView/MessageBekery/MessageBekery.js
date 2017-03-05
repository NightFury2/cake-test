import React from 'react';

import Title from '../Title/Title';

import TextField from 'material-ui/TextField';
import {teal500} from 'material-ui/styles/colors';

export default class MessageBekery extends React.Component {
  static propTypes = {
    messageBakery: React.PropTypes.object.isRequired,
    setCakeMessageBakery: React.PropTypes.func.isRequired,
    isActiveStep: React.PropTypes.bool.isRequired
  };
  render() {
    const activeStepMessageBakery = this.props.isActiveStep ? '' : '0.3';
    return (
      <div className="row" style={{opacity: activeStepMessageBakery}}>
        <div className="col s12">
          <div className="row">
            <div className="col s12 l5">
              <Title isActive={false} name="Beskjed til konditor?"/>
            </div>
            <div className="col s12 l7">
              <div className="row">
                <div className="col s12">
                  <TextField floatingLabelText={`${this.props.messageBakery.text.length}/200 tegn`}
                             floatingLabelStyle={{fontSize: '18px', color: teal500}}
                             multiLine
                             fullWidth
                             hintText={'Skriv beskjed her...'}
                             value={this.props.messageBakery.text}
                             rows={2}
                             underlineStyle={{color: 'white'}}
                             underlineFocusStyle={{color: teal500}}
                             onChange={(event, newValue) => this.props.setCakeMessageBakery({text: newValue})}
                  />
                </div>
                <div className="col s12">
                  <p>
                    Her kan du skrive en beskjed til konditoren vedrørende kaken.
                    OBS! Ikke be om store endringer fra standard kake. Da kan opplyst pris bli
                    uriktig og bestillingen kan kanselleres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';

import Title from '../Title/Title';

import TextField from 'material-ui/TextField';
import {teal500} from 'material-ui/styles/colors';

export default class CakeHasText extends React.Component {
  static propTypes = {
    textPrice: React.PropTypes.number.isRequired,
    cakeTextPrice: React.PropTypes.object.isRequired,
    cakeHasText: React.PropTypes.bool.isRequired,
    isActiveStep: React.PropTypes.bool.isRequired,
    setCakeTextPrice: React.PropTypes.func.isRequired
  };
  render() {
    const activeStepText = this.props.isActiveStep ? '' : '0.3';
    return (
      <div className="row" style={{opacity: activeStepText}}>
        <div className="col s12">
          <div className="row">
            <div className="col s12 l5">
              <Title isActive={this.props.cakeHasText} name={`Vil du ha tekst på? (+${this.props.textPrice} kr)`}/>
            </div>
            <div className="col s12 l7">
              <div className="row">
                <div className="col s12">
                  <TextField floatingLabelText={`${this.props.cakeTextPrice.text.length}/40 tegn`}
                             floatingLabelStyle={{fontSize: '18px', color: teal500}}
                             multiLine
                             fullWidth
                             hintText={'Skriv tekst her...'}
                             value={this.props.cakeTextPrice.text}
                             rows={2}
                             underlineStyle={{color: 'white'}}
                             underlineFocusStyle={{color: teal500}}
                             onChange={(event, newValue) => this.props.setCakeTextPrice(newValue, this.props.textPrice)}
                  />
                </div>
                <div className="col s12">
                  <p>
                    Teksten skrives på kaken i sjokolade eller legges inn i bildet på kaken. Maksimum 40 tegn.
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

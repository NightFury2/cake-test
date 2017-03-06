import React from 'react';
import {Link} from 'react-router';

import CakeSize from './CakeSize/CakeSize';
import CakeFillings from './CakeFillings/CakeFillings';
import CakeHasMotive from './CakeHasMotive/CakeHasMotive';
import CakeHasText from './CakeHasText/CakeHasText';
import MessageBekery from './MessageBekery/MessageBekery';
import CakeActionFooter from './CakeActionFooter/CakeActionFooter';
import CakeExtensions from './CakeExtensions/CakeExtensions';

import {Card, CardMedia, CardText, CardHeader, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {cyan500} from 'material-ui/styles/colors';

import lodash from 'lodash';

export default class CakeView extends React.Component {
  static propTypes = {
    card: React.PropTypes.object,
    cakeMotivePrice: React.PropTypes.object,
    cake: React.PropTypes.object,
    cakeSizeId: React.PropTypes.number,
    cakeFillingId: React.PropTypes.number,
    step: React.PropTypes.object,
    setCakeDefault: React.PropTypes.func.isRequired,
    count: React.PropTypes.number.isRequired,
    setCakeCount: React.PropTypes.func.isRequired,
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
  findCanHasMotiveAndTextByCakeSize = (cakeSizes, cakeSizeId) => {
    return lodash.find(cakeSizes, {id: cakeSizeId});
  };
  render() {
    const styles = require('./CakeView.scss');
    const cakePriceBySize = lodash.uniqBy(this.props.cake.cakePrices, 'cakeSizeId');
    const canHasMotiveAndTextByCakeSize = this.props.cakeSizeId > 0 ? this.findCanHasMotiveAndTextByCakeSize(this.props.cake.cakeSizes, this.props.cakeSizeId) : {};
    return (
      <div className={'col s12 ' + styles.cakeView}>
        <Card>
          {this.props.cake.imageUrl &&
            <CardMedia style={{overflow: 'hidden', maxHeight: '300px'}}>
              <div className="row">
                <div className="col s12 l5">
                  <img className={styles.image} src={this.props.cake.imageUrl}/>
                </div>
                <CardText className="col l7 hide-on-tablet-and-down">
                  <CardHeader title={this.props.cake.name} subtitle={<Link to={{pathname: `/Alle/Backery/${this.props.cake.bakery.name}`, query: {bakeryId: this.props.cake.bakery.id}}}>{this.props.cake.bakery.name}</Link>}/>
                  <CardText>{this.props.cake.description}</CardText>
                  <CardActions>
                    <FlatButton labelStyle={{color: cyan500}} label="ingredienser"/>
                    <FlatButton labelStyle={{color: cyan500}} className="right" label="Bestillingsfrist"/>
                  </CardActions>
                </CardText>
              </div>
            </CardMedia>
          }
          <Divider style={{margin: '20px'}}/>
          <CardText>
            <CakeSize setCakeSizeId={this.props.setCakeSizeId}
                      cakeSizeId={this.props.cakeSizeId}
                      isActiveStep={this.props.cakeSizeId > 0}
                      cakeSizeStep={this.props.step.cakeSizeStep}
                      cakePriceBySize={cakePriceBySize}
                      size={this.props.cake.cakeSizes}
                      setCakeSizeStep={this.props.setCakeSizeStep}
                      setCakeFillingStep={this.props.setCakeFillingStep}
            />
          </CardText>
          <Divider/>
          <CardText>
            {this.props.cake.cakeFillings &&
              <CakeFillings isActiveStep={this.props.cakeSizeId > 0}
                            cakeFillingStep={this.props.step.cakeFillingStep}
                            cakeSizeId={this.props.cakeSizeId}
                            cakeFillingId={this.props.cakeFillingId}
                            cakePrices={this.props.cake.cakePrices}
                            cakeFillings={this.props.cake.cakeFillings}
                            setCakeFillingStep={this.props.setCakeFillingStep}
                            setCakeFillingId={this.props.setCakeFillingId}
                            setCakeMotiveStep={this.props.setCakeMotiveStep}
              />
            }
          </CardText>
          {this.props.cake.canHasMotive && !lodash.isEmpty(canHasMotiveAndTextByCakeSize) && canHasMotiveAndTextByCakeSize.canHasMotive &&
            <div>
              <Divider/>
              <CardText>
                <CakeHasMotive setCakeMotiveStep={this.props.setCakeMotiveStep}
                               cakeMotivePrice={this.props.cakeMotivePrice}
                               motivePrice={this.props.cake.motivePrice}
                               setCakeMotivePrice={this.props.setCakeMotivePrice}
                               setCakeTextStep={this.props.setCakeTextStep}
                               isActiveStep={this.props.cakeSizeId > 0 && this.props.cakeFillingId > 0}
                               cakeHasMotive={this.props.step.cakeHasMotive}
                />
              </CardText>
            </div>
          }
          {this.props.cake.canHasText && !lodash.isEmpty(canHasMotiveAndTextByCakeSize) && canHasMotiveAndTextByCakeSize.canHasText &&
            <div>
              <Divider/>
              <CardText>
                <CakeHasText cakeHasText={this.props.step.cakeHasText}
                             textPrice={this.props.cake.textPrice}
                             cakeTextPrice={this.props.card.cakeTextPrice}
                             setCakeTextPrice={this.props.setCakeTextPrice}
                             isActiveStep={this.props.cakeSizeId > 0 && this.props.cakeFillingId > 0}
                />
              </CardText>
            </div>
          }
          {this.props.cake.cakeExtensions && this.props.cakeSizeId > 0 && this.props.cakeFillingId > 0 &&
            <CakeExtensions cakeExtensions={this.props.cake.cakeExtensions}
                            cakeSizeId={this.props.cakeSizeId}
                            cakeFillingId={this.props.cakeFillingId}
                            isActiveStep={this.props.cakeSizeId > 0 && this.props.cakeFillingId > 0}
            />
          }
          <Divider/>
          <CardText>
            <MessageBekery messageBakery={this.props.messageBakery}
                           setCakeMessageBakery={this.props.setCakeMessageBakery}
                           isActiveStep={this.props.cakeSizeId > 0 && this.props.cakeFillingId > 0}
            />
          </CardText>
          {this.props.cake &&
            <div>
              <Divider/>
              <CardText>
                <CakeActionFooter count={this.props.count}
                                  cake={this.props.cake}
                                  card={this.props.card}
                                  setCakeDefault={this.props.setCakeDefault}
                                  setCakeCount={this.props.setCakeCount}
                                  isActiveStep={this.props.cakeSizeId > 0 && this.props.cakeFillingId > 0}/>
              </CardText>
            </div>
          }
        </Card>
      </div>
    );
  }
}

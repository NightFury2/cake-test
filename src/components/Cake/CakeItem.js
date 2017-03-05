import React from 'react';
import {Link} from 'react-router';

import {Card, CardMedia, CardText, CardActions, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import CakeShape from './CakeShape';

export default class CakeItem extends React.Component {
  state = {
    expanded: false,
    isOverlayHide: false
  };
  mouseOverCardMedia = () => {
    this.setState({isOverlayHide: !this.state.isOverlayHide});
  };
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  handleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  };
  render() {
    const delivery = require('./delivery.png');
    const motiveNot = require('./motive-not.png');
    const motive = require('./motive.png');
    const cake = this.props;
    const cakeInfo = (
      <CardText>
        {cake.gotHomeDelivery ? <img style={{width: '75%', }} src={delivery} alt=""/> : ''}
        {cake.canHasMotive ? <img style={{width: '75%', }} src={motive} alt=""/> : <img style={{width: '75%', }} src={motiveNot} alt=""/>}
        <div>
          {cake.cakeSizes && cake.cakeSizes.sort((item1, item2) => {
            return item1.size - item2.size;
          }).map((item, index) => <CakeShape cakeSizeId={item.id} setCakeSizeId={cake.setCakeSizeId} cakeName={cake.name} cakeId={cake.id} pushState={cake.pushState} {...item} key={index}/>)}
        </div>
      </CardText>
    );
    return (
      <Card className="col s12 m6 l4" style={{height: 'auto'}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader textStyle={{paddingRight: 0}} title={cake.name} subtitle={`fra ${cake.price} kr`}/>
        <CardMedia overlayStyle={{display: this.state.isOverlayHide ? 'block' : 'none'}} onMouseEnter={this.mouseOverCardMedia} onMouseLeave={this.mouseOverCardMedia} overlay={cakeInfo}>
          <img src={cake.imageUrl} alt="" style={{height: 'auto', maxWidth: '100%'}}/>
        </CardMedia>
        <CardHeader textStyle={{paddingRight: 0}} onTouchTap={() => {cake.filterBackery(cake.bakery.name);}} subtitle={cake.bakery.name}/>
        <CardText expandable>
          {cake.description}
        </CardText>
        <CardActions>
          <FlatButton label="MER" onTouchTap={this.handleExpand}/>
          <Link to={{pathname: `/Alle/cake/${cake.name}`, query: { cakeId: cake.id}}}><RaisedButton className="right" label="BESTILL" /></Link>
        </CardActions>
      </Card>
    );
  }
}

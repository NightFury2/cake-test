import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui/svg-icons/action/home';

export default class MenuContent extends React.Component {
  static propTypes = {
    pushState: React.PropTypes.func,
    menuClose: React.PropTypes.func.isRequired,
    setTitle: React.PropTypes.func.isRequired
  };
  render() {
    return (
       <div>
         <AppBar
           title="Меню"
           iconElementLeft={<IconButton onTouchTap={this.props.menuClose}><NavigationCloseIcon/></IconButton>}
         />
         <ccLiveIcon/>
         <MenuItem primaryText="Cacke its easy" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
         <MenuItem primaryText="FOR BEDRIFTER" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
         <MenuItem primaryText="SE VIDEO" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
         <MenuItem primaryText="BESTILLINGFRISTER" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
         <MenuItem primaryText="KONTAKT" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
         <Divider/>
         <MenuItem primaryText="Logg inn" leftIcon={<HomeIcon/>} onTouchTap={() => {this.props.menuClose(); this.props.pushState('/'); this.props.setTitle('Главная');}} />
       </div>
    );
  }
}

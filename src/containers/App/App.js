import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import MenuContent from '../../components/MenuContent/MenuContent';
import RightMenuComponent from '../../components/RightMenuComponent/RightMenuComponent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Link} from 'react-router';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, teal500
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import {setTitle} from '../../redux/modules/appBar';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const muiTheme = {
  spacing: spacing,
  fontFamily: 'Roboto, sanc-serif',
  palette: {
    primary1Color: teal500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fullBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: cyan500,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
};
injectTapEventPlugin();

@connect(
  state => ({
    title: state.appBar.title
  }),
  {setTitle, pushState: push})
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    // react-router-redux
    pushState: React.PropTypes.func.isRequired,
    // appBar
    title: React.PropTypes.string,
    setTitle: React.PropTypes.func,
  };
  state = {
    openMenu: false,
  };
  componentDidMount() {
    this.props.setTitle('Главная');
  }
  menuOpen = () => {
    this.setState({openMenu: true});
  };
  menuClose = () => {
    this.setState({openMenu: false});
  };
  render() {
    const {openMenu} = this.state;
    const styles = require('./App.scss');
    const logoBlack = require('./logo-black.png');
    return (
       <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div>
            <div className={'row ' + styles.app}>
              <AppBar
                style={{background: white}}
                title={<Link to="/"><div style={{maxWidth: '190px', marginTop: '10px'}}><img src={logoBlack} style={{display: 'block', maxWidth: '100%', height: 'auto'}}/></div></Link>}
                iconElementLeft={<IconButton className={'hide-on-large-only'} onTouchTap={this.menuOpen}><NavigationMenu/></IconButton>}
                iconElementRight={<RightMenuComponent/>}
              />
              <Drawer
                width={340}
                docked={false}
                open={openMenu}
                onRequestChange={this.menuClose}
              >
                <MenuContent
                   setTitle={this.props.setTitle}
                   pushState={this.props.pushState}
                   menuClose={this.menuClose}
                />
              </Drawer>
              <Helmet {...config.app.head}/>
            </div>
           <div className={'s12 '}>
              {this.props.children}
            </div>
          </div>
       </MuiThemeProvider>
    );
  }
}

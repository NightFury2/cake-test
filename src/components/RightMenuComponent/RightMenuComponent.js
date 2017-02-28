import React from 'react';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

export default class RightMenuComponent extends React.Component {
  render() {
    return (
      <Toolbar className="hide-on-med-and-down" style={{background: 'transparent', marginTop: '-5px'}}>
        <ToolbarGroup>
          <FlatButton style={{margin: '0 0 '}} label={'FOR BEDRIFTER'}/>
          <FlatButton style={{margin: '0 0 '}} label={'SE VIDEO'}/>
          <FlatButton style={{margin: '0 0 '}} label={'BESTILLINGFRISTER'}/>
          <FlatButton style={{margin: '0 0 '}} label={'KONTAKT'}/>
          <FlatButton style={{margin: '0 0 '}} label={'Logg inn'}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

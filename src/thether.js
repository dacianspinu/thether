'use strict';
import React from 'react';
import {AppRegistry, Navigator, View, Text, StatusBar} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import Splash from './containers/Splash'
import Intro from './containers/Intro'
import Login from './containers/Login'
import Walkthrough from './containers/Walkthrough'

export default function native(platform) {
  let Thether = React.createClass({
    render() {
      return (
        <Router hideNavBar={true}>
          <Scene key="root">
            <Scene key="Splash" component={Splash} initial={true}></Scene>
            <Scene key="Intro" component={Intro}></Scene>
            <Scene key="Login" component={Login}></Scene>
            <Scene key="Walkthrough" component={Walkthrough}></Scene>
          </Scene>
        </Router>
      );
    }
  });
  AppRegistry.registerComponent('thether', () => Thether);
}

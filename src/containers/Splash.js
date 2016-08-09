'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import SplashRender from '../components/SplashRender';

StatusBar.setBarStyle('default', true);

let Splash = React.createClass({
  render() {
    return(
      <SplashRender>

      </SplashRender>
    );
  }
})

module.exports = Splash;

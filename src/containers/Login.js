'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import LoginRender from '../components/LoginRender';

let Login = React.createClass({
  componentWillMount: function() {
    StatusBar.setBarStyle('default', true);
  },
  render() {
    return(
      <View>
        <LoginRender></LoginRender>
      </View>
    );
  }
})

module.exports = Login;

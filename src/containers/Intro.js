'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import IntroRender from '../components/IntroRender';


let Intro = React.createClass({
  componentWillMount: function() {
    StatusBar.setBarStyle('light-content', true);
  },
  render() {
    return(
      <IntroRender>
      </IntroRender>
    );
  }
})

module.exports = Intro;

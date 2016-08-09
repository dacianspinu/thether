'use strict';

import React from 'react';
import {StyleSheet, ScrollView, Text, TouchableHighlight, View, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';

let {width, height} = Dimensions.get('window');

let SplashRender = React.createClass({
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.topButton}>{('sign in the room').toUpperCase()}</Text>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../resources/logo.png')}></Image>
            <TouchableWithoutFeedback onPress={Actions.Intro}>
              <Image style={styles.goArrow} source={require('../resources/go.png')}></Image>
             </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
});

let styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  container: {
    width: width * 0.85,
    height: height * 0.88,
  },
  topButton: {
    textAlign: 'right',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 125/640 * width,
    height: 115/1136 * height,
    marginTop: 37/100 * height
  },
  goArrow: {
    width: 41/640 * width,
    height: 43/1136 * height,
    marginTop: 240/1136 * height
  }
})

module.exports = SplashRender;

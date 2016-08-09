'use strict';

import React from 'react';
import {StyleSheet, ScrollView, Text, TouchableHighlight, View, Image, Dimensions, Animated, Easing, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';

let {width, height} = Dimensions.get('window');

let IntroRender = React.createClass({
  getInitialState: function() {
    return {
        logo: new Animated.ValueXY(),
        backgroundImg: new Animated.Value(0)
    };
  },
  getStyle: function() {
    return [
        styles.logo,
        {
          transform: this.state.logo.getTranslateTransform()
        }
      ];
  },
  getBackgroundStyle: function() {
    return [
      styles.backgroundImage,
      {
        opacity: this.state.backgroundImg
      }
    ]
  },
  componentDidMount: function() {
    Animated.sequence([
        Animated.timing(this.state.backgroundImg, {
              toValue: 1,
              easing: Easing.linear,
              duration: 500
        }),
        Animated.delay(500),
        Animated.spring(this.state.logo, {
              bounciness: 4,
              speed: 1,
              duration: 300,
              toValue: {x: 0, y: -28/100 * height}
        })
      ]).start()
  },
  render() {
    return (
      <Animated.Image source={require('../resources/intro_bg.png')} style={this.getBackgroundStyle()}>
        <View style={styles.container}>
            <Animated.Image style={this.getStyle()} source={require('../resources/logo.png')}></Animated.Image>
          <View style={styles.buttonsContainer}>
            <View style={styles.innerButtonsContainer}>
              <InteractiveButton style={styles.loginButton} innerText="log in" goTo={Actions.Login}></InteractiveButton>
              <InteractiveButton style={styles.tourButton} innerText="take the tour" goTo={Actions.Walkthrough}></InteractiveButton>
            </View>
          </View>
        </View>
      </Animated.Image>
    )
  }
});

const InteractiveButton = React.createClass({

  getInitialState: function() {
    return {
      widthAnimation: new Animated.Value(0),
      heightAnimation: new Animated.Value(0),
      opacityAnimation: new Animated.Value(0),
    }
  },
  getInteractiveButtonStyle: function() {
    return [
      this.props.style,
      {
        width: this.state.widthAnimation,
        height: this.state.heightAnimation,
        opacity: this.state.opacityAnimation,
      }
    ]
  },
  componentDidMount: function() {
    Animated.sequence([
        Animated.delay(1000),
        Animated.parallel([
          Animated.timing(this.state.widthAnimation, {
                toValue: 48/100 * width,
                duration: 300,
                easing: Easing.elastic(1)
          }),
          Animated.timing(this.state.heightAnimation, {
                toValue: 7/100 * height,
                duration: 300,
                easing: Easing.elastic(1)
          }),
          Animated.timing(this.state.opacityAnimation, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear
          })
        ])
      ]).start();
  },
  render: function() {
    let action = this.props.goTo;
    return (
        <View style={styles.interactiveButtonWrapper}>
          <TouchableWithoutFeedback onPress={action}>
            <Animated.View style={this.getInteractiveButtonStyle()}>
              <Text style={styles.interactiveButtonText}>{this.props.innerText.toUpperCase()}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    )
  }
});

let styles = StyleSheet.create({
  backgroundImage: {
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    width: width * 0.85,
    height: height * 0.88,
  },
  logo: {
    width: 125/640 * width,
    height: 115/1136 * height,
    marginTop: 40.5/100 * height
  },
  interactiveButtonWrapper: {
    width: width * 0.85,
    alignItems: 'center'
  },
  interactiveButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#FFFFFF',
    letterSpacing: 1
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22C064',
    borderRadius: 40,
  },
  tourButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 40,
    marginTop: 3.5/100 * height

  },
  innerButtonsContainer: {
    marginTop: 64/100 * height
  },
  buttonsContainer: {
    position: 'absolute',
    top: 0,
    height: 88/100 * height,
    width: 85/100 * width
  }
})
module.exports = IntroRender;

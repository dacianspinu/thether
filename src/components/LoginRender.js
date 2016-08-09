'use strict';

import React from 'react';
import {StyleSheet, ScrollView, Text, TouchableHighlight, View, Image, Dimensions, Animated, Easing, TouchableWithoutFeedback, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

let {width, height} = Dimensions.get('window');

let LoginRender = React.createClass({
  submit: function() {
    console.log('submit');
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.backButtonWrapper}>
            <TouchableWithoutFeedback onPress={Actions.pop}>
              <Image style={styles.backButton} source={require('../resources/back.png')}></Image>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.topBarTitle}>Sign in</Text>
        </View>
        <View style={styles.innerContainer}>
          <Image style={styles.logo} source={require('../resources/logo.png')}></Image>
          <View style={styles.inputsWrapper}>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder={("email").toUpperCase()} autoCapitalize="none" autoCorrect={false} placeholderTextColor="#1C1C1C"></TextInput>
            </View>
            <View style={[{marginTop: 80/1136 * height}, styles.inputWrapper]}>
              <TextInput style={styles.input} placeholder={("password").toUpperCase()} autoCapitalize="none" autoCorrect={false} placeholderTextColor="#1C1C1C" secureTextEntry={true}></TextInput>
            </View>
          </View>
          <View>
            <TouchableWithoutFeedback onPress={Actions.Intro}>
              <View style={styles.facebookLoginButton}>
                <Text style={styles.facebookLoginButtonText}>{("sign up via facebook").toUpperCase()}</Text>
              </View>
             </TouchableWithoutFeedback>
           </View>
         </View>
         <View>
           <TouchableHighlight onPress={this.submit} style={styles.submit} underlayColor="#30F181">
            <Image style={styles.submitArrow} source={require('../resources/go_white.png')}></Image>
           </TouchableHighlight>
         </View>
      </View>
    )
  }
});


let styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    height: 102/1136 * height,
    backgroundColor: '#F3F3F3',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  topBarTitle: {
    color: '#333333',
    fontFamily: 'OpenSans',
    fontSize: 17,
    letterSpacing: 1,
  },
  backButtonWrapper: {
    position: 'absolute',
    bottom: 7/1136 * height,
    left: 30/640 * width
  },
  backButton: {
    width: 26/640 * width,
    height: 23/1136 * height,
  },
  logo: {
    width: 125/640 * width,
    height: 115/1136 * height,
    marginTop: 125/1136 * height
  },
  innerContainer: {
    alignItems: 'center',
    height: (1136-102)/1136 * height
  },
  input: {
    width: 520/640 * width,
    height: 35,
    fontFamily: 'OpenSans-SemiBold',
    color: "#1C1C1C",
    fontSize: 16,
    letterSpacing: 14
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderColor: "#AAAAAA",
  },
  inputsWrapper: {
    marginTop: 105/1136 * height
  },
  facebookLoginButton: {
    borderWidth: 2,
    borderColor: "#0A46CD",
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28/1136 * height,
    paddingBottom: 28/1136 * height,
    paddingLeft: 80/640 * width,
    paddingRight: 80/640 * width,
    marginTop: 190/1136 * height
  },
  facebookLoginButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    color: "#0A46CD",
  },
  submit: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 120/1136 * height,
    backgroundColor: '#22C064',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitArrow: {
    width: 41/640 * width,
    height: 44/1136 * height
  }
})
module.exports = LoginRender;

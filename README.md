# react-native-simple-select-button

[![npm](https://img.shields.io/npm/v/react-native-simple-select-button.svg)](https://www.npmjs.com/package/react-native-simple-select-button) [![npm](https://img.shields.io/npm/dm/react-native-simple-select-button.svg)](https://www.npmjs.com/package/react-native-simple-select-button) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

A dead simple slightly customizable react native select button I created while learning react native basics. 
This module was created during the confinement period and the goal was to make it work ;)

Try out the demo on [Expo Snack](https://snack.expo.io/@aboliga7/react-native-simple-select-button)

## Usage

### Simple select button component

<img src="assets/Screenshots/demo.png?raw=true" width="200">


## Basic Usage

```js
import { AntDesign } from '@expo/vector-icons'
import SimpleSelectButton from 'react-native-simple-select-button';

<SimpleSelectButton
  text="Button 1"
  textSize={14}
  iconName="checkcircleo"
  iconColor="#fff"
  iconSize={14}
  buttonDefaultColor="#e5e5e5"
  buttonSelectedColor="#ff9c5b"
  textDefaultColor="#333"
  textSelectedColor="#fff"
  isChecked={true}
  onPress={() => {}}
/>

```

## Install

```bash
# install module
yarn add react-native-simple-select-button
```

## Peer dependencies
Important! You need to install them

```bash
"react-native-vector-icons": ">= 7.1.0",
```

## Contribution

PR is welcome!

### Todo: Add test

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  ListView,
  TouchableOpacity,
  Navigator,
  View,
  Dimensions,
  ScrollView,
  WebView,  
  ToastAndroid,
  Platform,
  AlertIOS,
  TextInput,
  ViewPagerAndroid,
  Switch,
  SliderIOS,
  NativeModules,
} from 'react-native';


var MenuButton = require('./MenuButton')



module.exports = React.createClass({
  render:function() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'gray',}}>
        <MenuButton navigator={this.props.navSignin} closeDrawer={this.props.closeDrawer} text={'Chat'}/>
        {/*
        <MenuButton navigator={this.props.navLogout} closeDrawer={this.props.closeDrawer} text={'Logout'}/>
        */}
      </ScrollView>
    )
  }
});
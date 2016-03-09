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



module.exports = React.createClass({
  onPress() {
    this.props.closeDrawer();
    this.props.navigator()
  },
  render:function() {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={this.onPress}>
        <Text style={{color: 'white', margin: 10, fontSize: 20}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
})
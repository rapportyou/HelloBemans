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
  render: function() {
    var { title, description } = this.props;

    return (
      <View style={{ paddingTop: 7, paddingLeft: 10 }}>
        <Text style={radioItemStyles.title}>{ title }</Text>
        <Text style={radioItemStyles.description}>{ description }</Text>
      </View>
    );
  }
});


var radioItemStyles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  description: {
    fontSize: 14,
    color: 'gray',
    opacity: 0.0,
  }
});
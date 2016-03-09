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


var RadioItem = require('../components/common/RadioItem')
var Radio = require('react-native-radio-button-classic');
var Option = Radio.Option;


var GuInfo = ['북마크', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
module.exports = React.createClass({
  getInitialState  : function() {
    return (this.state = {
      optionSelected: 0
    });
  },

  componentDidMount:function() {
    this.onSelect(this.state.optionSelected);
  },

  onSelect(index) {
    //alert(GuInfo[index]);
    this.setState({
      optionSelected: index
    });
  },

  render:function() {
    return (
      <View style={{ flex: 1, marginTop: 55 }}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          // onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}>
            <Radio onSelect={this.onSelect} defaultSelect={this.state.optionSelected}>
            {GuInfo.map(function(result) {
              return (
                <Option color="gray" selectedColor="#008BEF">
                  <RadioItem title={result} description="This is your First Option"/>
                </Option>
              );
            })}
            </Radio>        
        </ScrollView>
      </View>
    );
  }
});
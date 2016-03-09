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


var FB_PHOTO_WIDTH = 200;
module.exports = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return {
      photo: null,
    };
  },

  componentWillMount: function(){
    var _this = this;
    var user = this.props.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          photo : {
            url : responseData.data.url,
            height: responseData.data.height,
            width: responseData.data.width,
          },
        });
      })
      .done();
  },

  render: function(){
    var photo = this.state.photo;

    return (
      <View style={{marginBottom: 15,}}>

        <Image
          style={photo &&
            {
              height: photo.height,
              width: photo.width,
            }
          }
          source={{uri: photo && photo.url}}
        />
      </View>
    );
  }
});
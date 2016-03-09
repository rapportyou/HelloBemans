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



var FacebookPhoto = require('../components/common/FacebookPhoto')
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = NativeModules.FBLoginManager;
var itypeof = function (val) {
    return Object.prototype.toString.call(val).replace(/(\[|object|\s|\])/g, '').toLowerCase();
};


module.exports = React.createClass({
  getInitialState: function() {
    return ( { userId:null, token:null } );
  },
  onLogin:function(data) {
    console.log(JSON.stringify(data));
    //{"provider":"facebook","type":"success","profile":{"id":"1108291922571019","name":"홍성진","email":"rapportyou@gmail.com","first_name":"성진","last_name":"홍","age_range":{"min":21},"link":"https://www.facebook.com/app_scoped_user_id/1108291922571019/","picture":{"data":{"is_silhouette":true,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"}},"gender":"male","locale":"ko_KR","timezone":9,"updated_time":"2016-02-25T07:20:55+0000","verified":true},"expiration":"2016-05-04T00:09:09.270+0900","token":"CAANNNMHrJ2EBAOONoZAerrpvZBQdWcSvESG4bTxACPmKxwspnQBZCANoYPPFRQXMKSV75ElmqtL3QZAVB9YHaceUXmppujSXddJkq7Dw8kZBjpVP8OCepcLPpDqvRW7VqD2oK9ZCawvFQiGxV7jOXHXIACwltlMvIZC9puiU4wvkVqZBYisHZArB52ZBQbmGpVXAhKA8xbY1AMcQZDZD"}
    /*
    {
      "provider": "facebook",
      "type": "success",
      "profile": {
          "id": "1108291922571019",
          "name": "홍성진",
          "email": "rapportyou@gmail.com",
          "first_name": "성진",
          "last_name": "홍",
          "age_range": {
              "min": 21
          },
          "link": "https://www.facebook.com/app_scoped_user_id/1108291922571019/",
          "picture": {
              "data": {
                  "is_silhouette": true,
                  "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"
              }
          },
          "gender": "male",
          "locale": "ko_KR",
          "timezone": 9,
          "updated_time": "2016-02-25T07:20:55+0000",
          "verified": true
      },
      "expiration": "2016-05-04T00:09:09.270+0900",
      "token": "CAANNNMHrJ2EBAOONoZAerrpvZBQdWcSvESG4bTxACPmKxwspnQBZCANoYPPFRQXMKSV75ElmqtL3QZAVB9YHaceUXmppujSXddJkq7Dw8kZBjpVP8OCepcLPpDqvRW7VqD2oK9ZCawvFQiGxV7jOXHXIACwltlMvIZC9puiU4wvkVqZBYisHZArB52ZBQbmGpVXAhKA8xbY1AMcQZDZD"
    }
    //*/
    // 서버에 저장
    var profile = data.profile;
    console.log(JSON.stringify(data.profile));
    //{"id":"1108291922571019","name":"홍성진","email":"rapportyou@gmail.com","first_name":"성진","last_name":"홍","age_range":{"min":21},"link":"https://www.facebook.com/app_scoped_user_id/1108291922571019/","picture":{"data":{"is_silhouette":true,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"}},"gender":"male","locale":"ko_KR","timezone":9,"updated_time":"2016-02-25T07:20:55+0000","verified":true}
    // token : "CAANNNMHrJ2EBAOONoZAerrpvZBQdWcSvESG4bTxACPmKxwspnQBZCANoYPPFRQXMKSV75ElmqtL3QZAVB9YHaceUXmppujSXddJkq7Dw8kZBjpVP8OCepcLPpDqvRW7VqD2oK9ZCawvFQiGxV7jOXHXIACwltlMvIZC9puiU4wvkVqZBYisHZArB52ZBQbmGpVXAhKA8xbY1AMcQZDZD"
    // token : "CAANNNMHrJ2EBAJi4qNQ1gIU2b2ffEbQY88B4D02CK40sbpSwoeJYEHOACfGYZAjcL9pu0K3ZCtECLUEPRXaAAjhVWGllzZCPGM9RoCfeK3AkyZCxCfmvcDJnQc6BF3Mnqgp7WrqEa4kW9KbaNLRIm7cdVMGQGwN6SyS5ZCxBQfkxrVVYhVf2HLzXO2ABO4hQZD"
    this.props.navigator.push({id : 0, profile : profile});
    // this.setState({userId : profile.id, token : data.token});
  },
  componentWillMount:function() {
    FBLoginManager.getCurrentToken(function(token) {
      //  토큰이 존재한다면
      if(itypeof(token) === 'string' && token.length > 0) {
        // 서버로 부터 데이터를 가져와서 리턴
        //'https://graph.facebook.com/v2.2/me?access_token=' + token;
        // this.props.navigator.push({id : 'TrainerList', profile : profile});

        var profile = {"id":"1108291922571019","name":"홍성진","email":"rapportyou@gmail.com","first_name":"성진","last_name":"홍","age_range":{"min":21},"link":"https://www.facebook.com/app_scoped_user_id/1108291922571019/","picture":{"data":{"is_silhouette":true,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"}},"gender":"male","locale":"ko_KR","timezone":9,"updated_time":"2016-02-25T07:20:55+0000","verified":true};
        this.props.navigator.push({id : 'TrainerList', profile : profile});
      }
    }.bind(this));
  }
  , render:function() {
    var _this = this;
    var loginButton = <View/>;

    if (this.state.userId != null)
        loginButton = <FacebookPhoto user={{userId: this.state.userId, token: this.state.token}}/>;

    return (
      <View style={login_styles.container}>
        <Text style={login_styles.welcome}>
          Welcome to Hello Bemans
        </Text>
        <Text style={login_styles.instructions}>
          This is Service for people need personal training.
        </Text>
        <Text style={login_styles.instructions}>
          You can search trainer and training service cheep price.
        </Text>
        {loginButton}
        <FBLogin
          onLogin={ function(data) {
            _this.onLogin(data)
          }}
          onLogout={ function(data) {
            alert(JSON.stringify(data));
          }}
          onLoginFound={function(data) {
            alert(JSON.stringify(data))
          }}
          onLoginNotFound={function() {
            alert("No user logged in.");
          }}
          onError={function(data) {
            alert(JSON.stringify(data))
          }}
          onCancel={ function(data) {
            alert(JSON.stringify(data));
          }}
          onPermissionsMissing={ function(data) {
            console.log(JSON.stringify(data));
          }}
        />
      </View>
    );
  }
});

const login_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
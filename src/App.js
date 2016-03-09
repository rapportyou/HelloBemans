'use strict';
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



//----------------------------------------------------------------------


var TrainerDetail = require('./page/TrainerDetail');


//----------------------------------------------------------------------

//----------------------------------------------------------------------


var TrainerList = require('./page/TrainerList')



//----------------------------------------------------------------------







var SelectLocation = require('./page/SelectLocation')



var LoginPage = require('./page/LoginPage')




//----------------------------------------------------------------------

var BookingTrainer = function () {
    alert('BookingTrainer')
}





var ImageButton = require('./components/common/imageButton');

var backIcon = require('./img/btn-back.png');
var infoIcon = require('./img/btn-info.png');
var memberIcon = require('./img/btn-member.png');
var leaveIcon = require('./img/btn-leave.png');
var startMessagingIcon = require('./img/btn-start-message.png');
var inviteIcon = require('./img/btn-invite.png');


var NavigationBar = require('react-native-navbar');
var NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, nextState) {
    if (route.id === 'TrainerDetail' || route.id === 'SelectLocation' || route.id === 'Chat')
      return (
        <ImageButton
            underlayColor={'#4e4273'}
            onPress={() => navigator.pop()}
            imageStyle={{margin:1}}
            image={backIcon} />
      );
    else if ( route.id === 'Messaging')
      return (
        <ImageButton
            underlayColor={'#4e4273'}
            onPress={() => navigator.push({id:'TrainerList'})}
            imageStyle={{margin:1}}
            image={backIcon} />
      );

    return null;
  },


  Title(route, navigator, index, nextState) {
    var title = '';
    if (route.id === 'TrainerList')
      title = 'Hello Bemans';

    else if (route.id === 'TrainerDetail')
      title = '트레이너 소개';

    else if (route.id === 'SelectLocation')
      title = '지역 선택';

    else if (route.id === 'Messaging')
      title = '대화 목록';

    else if (route.id === 'Chat')
      title = '트레이너';

    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 20}}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },


  RightButton(route, navigator, index, nextState) {
    if (route.id === 'TrainerList')
      return (
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.push({id: 'SelectLocation'})}>
          <Text style={{color: 'white', margin: 10,}}>Location</Text>
        </TouchableOpacity>
      );
      // Remove Bookmark Function
      // else if (route.id === 1)
      //  return (
      //    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
      //        onPress={BookingTrainer}>
      //      <Text style={{color: 'white', margin: 10,}}>Book</Text>
      //    </TouchableOpacity>
      //  );
     else
      return null;
  },
};


var Signin = require('./components/sendbird/signin');
var Messaging = require('./components/sendbird/messaging');
var Chat = require('./components/sendbird/chat');


var Drawer = require('react-native-drawer');
var DrawerComponent = require('./components/common/DrawerComponent')


module.exports = React.createClass({
  _renderScene : function(route, navigator) {
    if (route.id === 'LoginPage') {
      return <LoginPage navigator={navigator}/>

    } else if (route.id === 'TrainerList') {
      return <TrainerList navigator={navigator}/>

    } else if (route.id === 'TrainerDetail') {
      return <TrainerDetail navigator={navigator}/>

    } else if (route.id === 'SelectLocation') {
      return <SelectLocation navigator={navigator}/>

    } else if (route.id === 'Signin') {
      return <Signin username={'din'} navigator={navigator}/>

    } else if (route.id === 'Messaging') {
      return <Messaging username={'din'} navigator={navigator}/>

    } else if (route.id === 'Chat') {
      return <Chat username={'din'} navigator={navigator}/>

    }
  },

  openDrawer(){
    this.drawer.open()
  },

  render : function() {
    // Default Full Drawer
    //*
    return (
      <Drawer ref={c => this.drawer = c} 
        content={
          <DrawerComponent 
            navSignin={() => {this.navigator.push({id:'Signin'})}}
            navLogout={()=>{this.navigator.push({id:'LoginPage'})}} 
            closeDrawer={() => {this.drawer.close()}}/>
        } >
          <Navigator
          ref={n => this.navigator = n}
          initialRoute={{id :'LoginPage'}}
          renderScene={this._renderScene}
          configureScene={this._configureScene}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />}/>
      </Drawer>
    );
    //*/

    // Slack Style Drawer
    /*
    return (
      <Drawer
        type="static"
        content={<Drawer />}
        openDrawerOffset={100}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
        tweenHandler={Drawer.tweenPresets.parallax}>

        <Navigator
          initialRoute={{id :'LoginPage'}}
          renderScene={this._renderScene}
          configureScene={this._configureScene}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />}/>
      </Drawer>
    );
    //*/

    // Material Design Style Drawer
    /*
    return (
      <Drawer
        type="overlay"
        content={<Drawer />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          main: {paddingLeft: 3}
        }}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })} >
        <Navigator
          initialRoute={{id :'LoginPage'}}
          renderScene={this._renderScene}
          configureScene={this._configureScene}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />}/>
      </Drawer>
    );
    //*/
  }
});
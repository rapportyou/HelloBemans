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


var TrainerDetailData = {
  "id" : 0,
  "user_name": "최길동",
  "location": '강동구',
  pages :[
    {
      id: 0,
      type:'image',
      source: 'https://pixabay.com/static/uploads/photo/2015/09/18/11/45/man-945481_960_720.jpg',
      text: '안녕하세요. 트레이너 홍길동 입니다. 저는 현재 숭실대 생활스포츠학과에 재학중입니다.',
    },
    {
      id: 1,
      type:'image',
      source: 'https://pixabay.com/static/uploads/photo/2015/09/09/16/16/man-931724_960_720.jpg',
      text: '생활체육지도사 2급 자격증을 취득했고요',
    },
    {
      id: 2,
      type:'image',
      source: 'https://snap-photos.s3.amazonaws.com/img-thumbs/960w/9WRTTVGZOS.jpg',
      text: '취미는 사이클 입니다.',
    },
    {
      id: 3,
      type:'youtube',
      source: 'https://www.youtube.com/watch?v=axnq_p9GbBc',
      text: '',
    },
  ],
};



var Swiper = require('react-native-swiper');
var TrainerContact = require('./TrainerContact');
//*
var WEBVIEW_REF = 'webview';
module.exports = React.createClass({
  getInitialState: function() {
    return {
      url: 'https://www.youtube.com/watch?v=axnq_p9GbBc',
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    // fetch(REQUEST_URL)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(responseData.trainers),
    //       loaded: true,
    //     });
    //   })
    //   .done();

      this.setState({
        dataSource: TrainerDetailData,
        loaded: true,
      });
  },

  _onPressButton() {
    this.props.navigator.pop();
  },

  render: function() {
    // alert('render : ' + this.state.url);
    // var pages = this.state.dataSource.pages;
    var pages = TrainerDetailData.pages;
    //*
    var rows = [];

    var i = 0;
    for (i=0; i < pages.length; i++) {
      var page = pages[i];

      if (page.type === 'image') {
        rows.push(
          <View key={i} style={td_styles.slide}>
            <Image
              style={td_styles.slide_image}
              source={{uri: page.source}}>
              <Text style={td_styles.slide_contents}>{page.text}</Text>
            </Image>
          </View>
        );
      } else if (page.type === 'youtube') {
        rows.push(
          <WebView key={i} style={{flex:1, marginTop: 55, backgroundColor:'black'}}
            ref={WEBVIEW_REF}
            source={{uri:page.source}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}/>
        );

      }
    }

    rows.push(<TrainerContact key={i} />);

    return (
      <Swiper index={0} loop={false} showsPagination={false} style={td_styles.wrapper}>
        {rows}
      </Swiper>
    );
    //*/

    /*
    return(
      <Swiper index={0} loop={false} showsPagination={false} style={td_styles.wrapper}>
        <View style={td_styles.slide}>
          <Image
            style={td_styles.slide_image}
            source={{uri: "http://i.telegraph.co.uk/multimedia/archive/02655/PD68583783_dtho201_2655530b.jpg"}}>
            <Text style={td_styles.slide_contents}>안녕하세요. 트레이너 홍길동 입니다. 저는 현재 숭실대 생활스포츠학과에 재학중입니다.</Text>
          </Image>
        </View>

        <WebView style={{flex:1, marginTop: 55, backgroundColor:'black'}}
            ref={WEBVIEW_REF}
            url={this.state.url}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}/>

          <TrainerContact/>
        </Swiper>
    );
    //*/
  }
});

var td_styles = StyleSheet.create({
  slide_image: {
    flex: 6,
    flexDirection:'row',
    alignSelf: 'stretch',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  slide_contents: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    paddingBottom: 30,
    backgroundColor:'black',
    opacity:0.5,
    marginLeft:20,
    marginRight:20,
  },
  wrapper: {
    flex:1,
    alignSelf: 'stretch',
  },
  slide_menu: {
    flex: 1,
    flexDirection:'row',
  },
  slide: {
    flex: 1,
    marginTop:55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    width:300,
  },
});
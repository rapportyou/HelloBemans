/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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


var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 10;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var TrainerListData = {
    "total": 5,
    "trainers": [
        {
            "id": 0,
            "user_name": "홍길동",
            "location": '강남구',
            "posters": {
                "thumbnail": "http://i.telegraph.co.uk/multimedia/archive/02655/PD68583783_dtho201_2655530b.jpg",
                "profile": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "detailed": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "original": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg"
            }
        },
        {
            "id": 0,
            "user_name": "홍길순",
            "location": '동작구',
            "posters": {
                "thumbnail": "http://assets3.sparkpeople.com/news/genericpictures/BigPictures/gym_workout.jpg",
                "profile": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "detailed": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "original": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg"
            }
        },
        {
            "id": 0,
            "user_name": "김길동",
            "location": '서초구',
            "posters": {
                "thumbnail": "http://i.telegraph.co.uk/multimedia/archive/02774/James-Duigan-in-th_2774059b.jpg",
                "profile": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "detailed": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "original": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg"
            }
        },
        {
            "id": 0,
            "user_name": "박길동",
            "location": '은평구',
            "posters": {
                "thumbnail": "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_most_effective_exercises_slideshow/istock_photo_of_personal_trainer.jpg",
                "profile": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "detailed": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "original": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg"
            }
        },
        {
            "id": 0,
            "user_name": "최길동",
            "location": '강동구',
            "posters": {
                "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVKG1f0rtD0HV38CFpgAfUiFPQiZI9tGVcEb5rjgR3frxHTmk6",
                "profile": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "detailed": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg",
                "original": "http://resizing.flixster.com/58X_FeLy7hFX0SuCJxXQbryJFpY=/54x80/dkpu1ddg7pbsk.cloudfront.net/movie/11/48/82/11488237_ori.jpg"
            }
        },
    ]
}



//----------------------------------------------------------------------



var TrainerDetailData = {
  "id" : 0,
  "user_name": "최길동",
  "location": '강동구',
  pages :[
    {
      id: 0,
      type:'image',
      source: 'http://i.telegraph.co.uk/multimedia/archive/02655/PD68583783_dtho201_2655530b.jpg',
      text: '안녕하세요. 트레이너 홍길동 입니다. 저는 현재 숭실대 생활스포츠학과에 재학중입니다.',
    },
    {
      id: 1,
      type:'youtube',
      source: 'https://www.youtube.com/watch?v=axnq_p9GbBc',
      text: '',
    },
  ],
};



var Swiper = require('react-native-swiper');
//*
var WEBVIEW_REF = 'webview';
var TrainerDetail = React.createClass({
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
    for (var i=0; i < pages.length; i++) {
      var page = pages[i];

      if (page.type === 'image') {
        rows.push(
          <View style={td_styles.slide}>
            <Image
              style={td_styles.slide_image}
              source={{uri: page.source}}>
              <Text style={td_styles.slide_contents}>{page.text}</Text>
            </Image>
          </View>
        );
      } else if (page.type === 'youtube') {
        rows.push(
          <WebView style={{flex:1, marginTop: 55, backgroundColor:'black'}}
            ref={WEBVIEW_REF}
            url={page.source}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}/>
        );

      }
    }

    rows.push(<TrainerContact/>);

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



//----------------------------------------------------------------------



var review = {
  "review":[
      {
        "user_id" : 0,
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "user_nick" : "사용자김김김김김김김김김김김",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 1,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요.가나다라마바사아자차카타파하.기니디리미비시이지치키티피히.거너더러머버서어저처커터퍼허.갸냐댜랴먀뱌샤야자챠캬탸퍄햐.겨녀뎌려며벼셔여져쳐켜텨펴혀.",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 2,
        "user_nick" : "사용",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "사용자",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "일주일에 2번 받았는데 2Kg빠졌어요",
        "review_date" : "2016-02-01 11:10:11"
      },
    ],
}



/**
 * Trainer Contact
 */
var TrainerContact = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      bookmarkState: 'idle',
      contactState: 'idle',
      commentState: 'idle',
    };
  },

  bookMarking: function() {
    this.setState({ bookmarkState: 'busy' })
    setTimeout(() => { this.setState({ bookmarkState: 'success' })}, 2000);
  },

  sendContact: function() {
    this.setState({ contactState: 'busy' })
    setTimeout(() => { this.setState({ contactState: 'success' })}, 2000);
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
        dataSource: this.state.dataSource.cloneWithRows(review.review),
        loaded: true,
      });
  },

  bookButtonPress: function() {
    alert('bookButtonPress');
  },

  writeComment: function() {
    alert('writeComment');
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={{flex:1, flexDirection:'column', marginTop:10, marginBottom:10, backgroundColor:'white',}}>
        <View style={{flex:3, flexDirection:'column'}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderReviews}
            style={[styles.listView, {flex:5}]}/>
          <View style={{flex:1, flexDirection:'row', paddingLeft:10, paddingRight:10,}}>
            <TextInput
              style={{flex:5, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
            <AwesomeButton  backgroundStyle={{ height: 40,}}
                      labelStyle={{flex: 1, color: 'white'}}
                      transitionDuration={200}
                      states={{
                        idle: {
                          text: 'Write',
                          onPress: this.writeComment,
                          backgroundColor: '#1155DD',
                        },
                      }}
                      buttonState={'idle'}/>
          </View>
        </View>

        <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignSelf:'center', alignItems:'center'}}>
          <Text style={{fontSize: 20, fontWeight:'bold', paddingLeft:20, paddingRight:20,}}>홍길동(강남구)</Text>
          <AwesomeButton  backgroundStyle={{flex: 1,  borderRadius: 5, paddingLeft:20, paddingRight:20, paddingTop:5, paddingBottom:5,}}
                        labelStyle={{color: 'white'}}
                        transitionDuration={200}
                        states={{
                          idle: {
                            text: '북마크',
                            onPress: this.bookMarking,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            text: '북마크',
                            backgroundColor: '#002299',
                          },
                          success: {
                            text: '북마크',
                            onPress: this.bookMarking,
                            backgroundColor: '#339944'
                          }
                        }}
                        buttonState={this.state.bookmarkState}/>
        </View>

        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignSelf:'center', alignItems:'center'}}>
          <Text style={{fontSize: 30, fontWeight:'bold', paddingLeft:20, paddingRight:20,}}>￦20,000 / 시간</Text>
        </View>

          <AwesomeButton  backgroundStyle={{flex: 1, paddingLeft:20, paddingRight:20, paddingTop:5, paddingBottom:10, marginBottom:10}}
                        labelStyle={{color: 'white'}}
                        transitionDuration={200}
                        states={{
                          idle: {
                            text: '궁굼한거 물어보기',
                            onPress: this.sendContact,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            text: '확인 중...',
                            backgroundColor: '#002299',
                            spinner: true,
                          },
                          success: {
                            text: '010-1234-5678',
                            backgroundColor: '#339944',
                          }
                        }}
                        buttonState={this.state.contactState}/>
      </View>
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Review...
        </Text>
      </View>
    );
  },

  renderReviews: function(review) {
    return (
      <View style={TrainerContactStyle.container}>
        <Image
          source={{uri: review.user_img}}
          style={TrainerContactStyle.thumbnail}/>
        <View style={TrainerContactStyle.rightContainer}>
          <Text style={TrainerContactStyle.user_nick}>{review.user_nick}</Text>
          <Text style={TrainerContactStyle.contnets}>{review.contnets}</Text>
        </View>
      </View>
    );
  },
});



var TrainerContactStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    marginLeft:10,
    marginRight:10,
    marginBottom:2,
    height:50,
  },
  rightContainer: {
    flex:5,
    flexDirection: 'row',
    backgroundColor:'#000000',
    opacity: 1.0,
  },
  user_nick: {
    flex:1,
    margin:10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFFFFF',
  },
  contnets: {
    flex:4,
    margin:10,
    textAlign: 'left',
    fontSize: 10,
    color: '#FFFFFF',
  },
  thumbnail: {
    flex: 1,
    alignSelf:'stretch',
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
});



//----------------------------------------------------------------------



/**
 * Trainer List View
 */
var TrainerList = React.createClass({
  getInitialState: function() {
    console.log(JSON.stringify(this.props.profile));
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    // fetch(REQUEST_URL)
    //   .then((response) => response.json())
    //   .then((TrainerListData) => {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(TrainerListData.trainers),
    //       loaded: true,
    //     });
    //   })
    //   .done();

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(TrainerListData.trainers),
        loaded: true,
      });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading trainers...
        </Text>
      </View>
    );
  },

  selectTainer() {
    this.props.navigator.push({id : 1});
  },

  renderMovie: function(trainer) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.thumbnail} onPress={this.selectTainer}>
          <Image
            source={{uri: trainer.posters.thumbnail}}
            style={styles.thumbnail}>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{trainer.user_name}</Text>
              <Text style={styles.location}>{trainer.location}</Text>
            </View>
          </Image>
        </TouchableOpacity>
      </View>
    );
  },
});



/**
 *  스타일
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    marginTop:150,
    flex:1,
    flexDirection: 'row',
    backgroundColor:'#000000',
    opacity: 0.5,
  },
  title: {
    flex:1,
    margin:10,
    fontSize: 20,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  location: {
    flex:1,
    margin:10,
    textAlign: 'right',
    fontSize: 20,
    color: '#FFFFFF',
  },
  thumbnail: {
    height: 200,
    flex: 1
  },
  listView: {
    marginTop:55,
    backgroundColor: '#F5FCFF',
  },
});



//----------------------------------------------------------------------



var Radio = require('react-native-radio-button-classic');
var Option = Radio.Option;
var RadioItem = React.createClass({
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


var GuInfo = ['북마크', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
var SelectLocation = React.createClass({
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
          scrollEventThrottle={200}
          style={styles.scrollView}>
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


var FB_PHOTO_WIDTH = 200;
var FacebookPhoto = React.createClass({
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



var FBLogin = require('react-native-facebook-login');
var FBLoginManager = NativeModules.FBLoginManager;
var itypeof = function (val) {
    return Object.prototype.toString.call(val).replace(/(\[|object|\s|\])/g, '').toLowerCase();
};
var LoginPage = React.createClass({
  getInitialState: function() {
    return ( { userId:null, token:null } );
  },
  onLogin:function(data) {
    console.log(JSON.stringify(data));
    //{"provider":"facebook","type":"success","profile":{"id":"1108291922571019","name":"홍성진","email":"rapportyou@gmail.com","first_name":"성진","last_name":"홍","age_range":{"min":21},"link":"https://www.facebook.com/app_scoped_user_id/1108291922571019/","picture":{"data":{"is_silhouette":true,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"}},"gender":"male","locale":"ko_KR","timezone":9,"updated_time":"2016-02-25T07:20:55+0000","verified":true},"expiration":"2016-05-04T00:09:09.270+0900","token":"CAANNNMHrJ2EBAOONoZAerrpvZBQdWcSvESG4bTxACPmKxwspnQBZCANoYPPFRQXMKSV75ElmqtL3QZAVB9YHaceUXmppujSXddJkq7Dw8kZBjpVP8OCepcLPpDqvRW7VqD2oK9ZCawvFQiGxV7jOXHXIACwltlMvIZC9puiU4wvkVqZBYisHZArB52ZBQbmGpVXAhKA8xbY1AMcQZDZD"}
    var profile = data.profile;
    console.log(JSON.stringify(data.profile));
    //{"id":"1108291922571019","name":"홍성진","email":"rapportyou@gmail.com","first_name":"성진","last_name":"홍","age_range":{"min":21},"link":"https://www.facebook.com/app_scoped_user_id/1108291922571019/","picture":{"data":{"is_silhouette":true,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"}},"gender":"male","locale":"ko_KR","timezone":9,"updated_time":"2016-02-25T07:20:55+0000","verified":true}
    // token : "CAANNNMHrJ2EBAOONoZAerrpvZBQdWcSvESG4bTxACPmKxwspnQBZCANoYPPFRQXMKSV75ElmqtL3QZAVB9YHaceUXmppujSXddJkq7Dw8kZBjpVP8OCepcLPpDqvRW7VqD2oK9ZCawvFQiGxV7jOXHXIACwltlMvIZC9puiU4wvkVqZBYisHZArB52ZBQbmGpVXAhKA8xbY1AMcQZDZD"
    // token : "CAANNNMHrJ2EBAJi4qNQ1gIU2b2ffEbQY88B4D02CK40sbpSwoeJYEHOACfGYZAjcL9pu0K3ZCtECLUEPRXaAAjhVWGllzZCPGM9RoCfeK3AkyZCxCfmvcDJnQc6BF3Mnqgp7WrqEa4kW9KbaNLRIm7cdVMGQGwN6SyS5ZCxBQfkxrVVYhVf2HLzXO2ABO4hQZD"
    //this.props.navigator.push({id : 0, profile : profile});
    // this.setState({userId : profile.id, token : data.token});
  },
  componentWillMount:function() {
    FBLoginManager.getCurrentToken(function(token) {
      //  토큰이 존재한다면
      if(itypeof(token) === 'string' && token.length > 0) {
        // 서버로 부터 데이터를 가져와서 리턴
        //'https://graph.facebook.com/v2.2/me?access_token=' + token;
        // this.props.navigator.push({id : 0, profile : profile});

        var profile = {"id":"1108291922571019","name":"홍성진","email":"rapportyou@gmail.com","first_name":"성진","last_name":"홍","age_range":{"min":21},"link":"https://www.facebook.com/app_scoped_user_id/1108291922571019/","picture":{"data":{"is_silhouette":true,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c15.0.50.50/…3051da72ab&oe=575E452F&__gda__=1465817095_6dd02167bc923b3c12caebfce4d6ce18"}},"gender":"male","locale":"ko_KR","timezone":9,"updated_time":"2016-02-25T07:20:55+0000","verified":true};
        this.props.navigator.push({id : 0, profile : profile});
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
          Welcome to React Native!
        </Text>
        <Text style={login_styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={login_styles.instructions}>
          Shake or press menu button for dev menu
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



//----------------------------------------------------------------------


var ImagePickerManager = NativeModules.ImagePickerManager;



var TrainerMessage = React.createClass({
  getInitialState:function() {
    return null;
  }
  , render: function() {
    return (
      <View style={{flex:1, marginTop:55}}>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
            onPress={this.onCallGallery}>
          <Text style={{color: 'black', margin: 10,}}>
            갤러리
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});




//----------------------------------------------------------------------

var BookingTrainer = function () {
    alert('BookingTrainer')
}





var ImageButton = require('./src/components/common/imageButton');

var backIcon = require('./src/img/btn-back.png');
var infoIcon = require('./src/img/btn-info.png');
var memberIcon = require('./src/img/btn-member.png');
var leaveIcon = require('./src/img/btn-leave.png');
var startMessagingIcon = require('./src/img/btn-start-message.png');
var inviteIcon = require('./src/img/btn-invite.png');

const AwesomeButton = require('react-native-awesome-button');
var NavigationBar = require('react-native-navbar');
var NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, nextState) {
    if (route.id === 0)
      return null;

    else if (route.id === 1 || route.id === 2 || route.id === 9 || route.id === 11)
      return (
        <ImageButton
            underlayColor={'#4e4273'}
            onPress={() => navigator.pop()}
            imageStyle={styles.imageButton}
            image={backIcon} />
      );
  },


  Title(route, navigator, index, nextState) {
    var title = '';
    if (route.id === 0)
      title = 'Hello Bemans';

    else if (route.id === 1)
      title = '트레이너 소개';

    else if (route.id === 2)
      title = '지역 선택';

    else if (route.id === 9)
      title = '대화 목록';

    else if (route.id === 11)
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
    if (route.id === 0)
      return (
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.push({id: 2})}>
          <Text style={{color: 'white', margin: 10,}}>Location</Text>
        </TouchableOpacity>
      );
      // 일단 북마크 기능은 제외
      // else if (route.id === 1)
      //  return (
      //    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
      //        onPress={BookingTrainer}>
      //      <Text style={{color: 'white', margin: 10,}}>Book</Text>
      //    </TouchableOpacity>
      //  );
    else if (route.id === 11)
      return (
        <View style={{flex:1, flexDirection:'row'}}>
        <ImageButton
            underlayColor={'#4e4273'}
            onPress={() => navigator.pop()}
            imageStyle={{width: 30, height: 30, marginLeft:10, marginTop:10}}
            image={leaveIcon} />
        <ImageButton
            underlayColor={'#4e4273'}
            onPress={() => navigator.pop()}
            imageStyle={{width: 30, height: 30, marginLeft:10, marginTop:10}}
            image={leaveIcon} />
        </View>
      );
    
     else
      return null;
  },
};


var Main = require('./src/main');
var Signin = require('./src/components/authentication/signin');
var Index = require('./src/components/chat/index');
var Info = require('./src/components/chat/info');
var User = require('./src/components/chat/user');
var Messaging = require('./src/components/chat/messaging');
var OpenChat = require('./src/components/chat/openChat');
var Chat = require('./src/components/chat/chat');
var Members = require('./src/components/chat/members');




var sendbird = require('sendbird');
var Chat = require('./src/components/chat/chat');
var appId = 'A7A2672C-AD11-11E4-8DAA-0A18B21C2D82';


var Chatting = React.createClass({
  getInitialState:function() {
    return {username : 'din'};
  }, 
  componentDidMount: function() {
    sendbird.init({
      app_id: appId,
      guest_id: this.state.username,
      user_name: this.state.username,
      image_url: "",
      access_token: "",
      successFunc: (data) => {
        //this.props.navigator.immediatelyResetRouteStack([{ name: 'index' }]);
        this.props.navigator.immediatelyResetRouteStack([{ 'id': 6 }]);
        // this.props.navigator.push({id : 6});
      },
      errorFunc: (status, error) => {
        alert('sendbird.init error')

        this.setState({
          username: '',
          errorMessage: error
        });
        return;
      }
    });
  },
  render: function() {
    return (
      <Text> Chatting </Text>
    );
  }
});



var App = React.createClass({
  _renderScene : function(route, navigator) {
    if (route.id === 3) {
      return <LoginPage navigator={navigator}/>

    } else if (route.id === 0) {
      return <TrainerList navigator={navigator}/>

    } else if (route.id === 1) {
      return <TrainerDetail navigator={navigator}/>

    } else if (route.id === 2) {
      return <SelectLocation navigator={navigator}/>

    } else if (route.id === 4) {
      return <TrainerMessage navigator={navigator}/>

    } else if (route.id === 5) {
      return <Signin username={'din'} navigator={navigator}/>

    } else if (route.id === 6) {
      return <Index username={'din'} navigator={navigator}/>

    } else if (route.id === 7) {
      return <Info username={'din'} navigator={navigator}/>

    } else if (route.id === 8) {
      return <User username={'din'} navigator={navigator}/>

    } else if (route.id === 9) {
      return <Messaging username={'din'} navigator={navigator}/>

    } else if (route.id === 10) {
      return <OpenChat username={'din'} navigator={navigator}/>

    } else if (route.id === 11) {
      return <Chat username={'din'} navigator={navigator}/>

    } else if (route.id === 12) {
      return <Members username={'din'} navigator={navigator}/>

    }
  },

  render : function() {
    return (
      <Navigator
        initialRoute={{id :3}}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
              routeMapper={NavigationBarRouteMapper} />}/>
    );
  }
});




AppRegistry.registerComponent('HelloBemans', () => App);

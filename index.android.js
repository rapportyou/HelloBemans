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



var FBLogin = require('react-native-facebook-login');
// var FBLoginManager = NativeModules.FBLoginManager; // if needed
var LoginPage = React.createClass({
  onLogin:function(e) {
    // this.props.navigator.push({id : 1});
  }
  , render:function() {
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
        <FBLogin
          onLogin={
            function(e) {
              alert(e)
            }
          }
          onLogout={
            function(e) {
              alert(e);
            }
          }
          onCancel={
            function(e) {
              alert(e);
            }
          }
          onPermissionsMissing={
            function(e) {
              console.log(e)
            }
          }
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

var BookingTrainer = function () {
    alert('BookingTrainer')
}

const AwesomeButton = require('react-native-awesome-button');
var NavigationBar = require('react-native-navbar');
var NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, nextState) {
    if (route.id === 0)
      return (      
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'white', margin: 10,}}>
            이전
          </Text>
        </TouchableOpacity>
      );

    else if (route.id === 1 || route.id === 2)
      return (      
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'white', margin: 10,}}>
            이전
          </Text>
        </TouchableOpacity>
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
     else
      return null;
  },
};



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

    }
  },

  render : function() {
    return (
      <Navigator
        initialRoute={{id :0}}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
              routeMapper={NavigationBarRouteMapper} />}/>
    );
  }
});




AppRegistry.registerComponent('HelloBemans', () => App);

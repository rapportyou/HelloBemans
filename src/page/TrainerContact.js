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



var review = {
  "review":[
      {
        "user_id" : 0,
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "user_nick" : "User1",
        "contnets" : "I trained once per week, I lose 1 pound",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 1,
        "user_nick" : "User2",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "I like it",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 2,
        "user_nick" : "User3",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "This is what a awesome price",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "User4",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "This trainer is so kind",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "User5",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "He is beautiful Body",
        "review_date" : "2016-02-01 11:10:11"
      },
      {
        "user_id" : 3,
        "user_nick" : "User6",
        "user_img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LIlZRtAPAaUxdChHGCDWVcoMxSJb0y3oorGFJj-WxqXU7Vq8og",
        "contnets" : "He is professional",
        "review_date" : "2016-02-01 11:10:11"
      },
    ],
}



const AwesomeButton = require('react-native-awesome-button');


/**
 * Trainer Contact
 */
module.exports = React.createClass({
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
      <View style={{flex:1, flexDirection:'column', marginTop:10, marginBottom:10, marginTop:60, backgroundColor:'white',}}>
        <View style={{flex:3, flexDirection:'column'}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderReviews}
            style={[TrainerContactStyle.listView, {flex:5}]}/>
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
          <Text style={{fontSize: 20, fontWeight:'bold', paddingLeft:20, paddingRight:20,}}>홍길동 (강남구)</Text>
          <AwesomeButton  backgroundStyle={{flex: 1,  borderRadius: 5, paddingLeft:20, paddingRight:20, paddingTop:5, paddingBottom:5,}}
                        labelStyle={{color: 'white'}}
                        transitionDuration={200}
                        states={{
                          idle: {
                            text: 'Bookmark',
                            onPress: this.bookMarking,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            text: 'Bookmark',
                            backgroundColor: '#002299',
                          },
                          success: {
                            text: 'Bookmark',
                            onPress: this.bookMarking,
                            backgroundColor: '#339944'
                          }
                        }}
                        buttonState={this.state.bookmarkState}/>
        </View>

        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignSelf:'center', alignItems:'center'}}>
          <Text style={{fontSize: 30, fontWeight:'bold', paddingLeft:20, paddingRight:20,}}>￦20,000 / Hour</Text>
        </View>

          <AwesomeButton  backgroundStyle={{flex: 1, paddingLeft:20, paddingRight:20, paddingTop:5, paddingBottom:10, marginBottom:10}}
                        labelStyle={{color: 'white'}}
                        transitionDuration={200}
                        states={{
                          idle: {
                            text: 'Chat with Trainer',
                            onPress: this.sendContact,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            text: 'Wait ...',
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
      <View style={TrainerContactStyle.container}>
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
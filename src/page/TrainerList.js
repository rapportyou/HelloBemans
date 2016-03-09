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
                "thumbnail": "https://images.unsplash.com/photo-1428471598907-e50b401c07b4?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1125&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
            }
        },
        {
            "id": 0,
            "user_name": "홍길순",
            "location": '동작구',
            "posters": {
                "thumbnail": "http://images.freeimages.com/images/previews/f0b/gym-1238643.jpg",
            }
        },
        {
            "id": 0,
            "user_name": "김길동",
            "location": '서초구',
            "posters": {
                "thumbnail": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/O8HQW8Q465.jpg",
            }
        },
        {
            "id": 0,
            "user_name": "박길동",
            "location": '은평구',
            "posters": {
                "thumbnail": "https://static.pexels.com/photos/36776/fitness-strength-strong-male-large.jpg",
            }
        },
        {
            "id": 0,
            "user_name": "최길동",
            "location": '강동구',
            "posters": {
                "thumbnail": "https://pixabay.com/static/uploads/photo/2015/04/12/21/12/male-719539_960_720.jpg",
            }
        },
    ]
}



/**
 * Trainer List View
 */
module.exports = React.createClass({
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
    this.props.navigator.push({id : 'TrainerDetail'});
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
import React, { Component } from 'react';
import { WebView, Button} from 'react-native';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class MyWebView extends Component {

  componentDidMount(){
    console.log(this.props.url);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          style={}
          title="Go back"
          onPress={() => navigation.navigate('NewsList')}
        />
      ),
    }
  }

  render (){
    return(
      <WebView
        source={{uri: this.props.url}}
      >
      </WebView>
    );
  }
}

function mapStateToProps(state) {
  return {
    url: state.news.urlToImage
  }
}

export default connect(mapStateToProps)(MyWebView);

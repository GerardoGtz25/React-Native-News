import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../sections/components/header';
import { NavigationActions } from 'react-navigation';
import API from '../../../utils/api';


class SearchNews extends Component {
  state = {
    text: ''
  }

  handleSubmit = async () => {

    const newsList = await API.getByNewsByTopic(this.state.text);
    console.log(newsList)
    this.props.dispatch({
      type: 'SET_NEWS_LIST',
      payload: {
        newsList
      }
    })

    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'NewsList'
      })
    )

  }
  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render(){
    return(
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/icon.png')}
        />
        <TextInput
          placeholder="Ingresa una palabra"
          autoCorrent={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChangeText}
          style={styles.input}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 15,
  },
  image: {
    resizeMode: 'contain',
    width: 250,
    marginVertical: 30,
    marginHorizontal: 60
  }
})

export default connect(null)(SearchNews);

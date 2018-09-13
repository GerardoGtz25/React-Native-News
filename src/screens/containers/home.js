import React, { Component, Fragment } from 'react';
import {
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import API from '../../../utils/api';
import Header from '../../sections/components/header';
import GenericButton from '../../sections/components/generic-button';
import { NavigationActions } from 'react-navigation';

class Home extends Component {

  getData = async (categorie) => {

    const newsList = await API.getByCategories(categorie);

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

  render() {
    return (
      <Fragment>
        <GenericButton
            onPress={()=>{this.getData('business')}}
            title="business"
            color="#52be80"
          />
        <GenericButton
          onPress={()=>{this.getData('entertainment')}}
          title="entertainment"
          color="#52beb6"
        />
        <GenericButton
          onPress={()=>{this.getData('general')}}
          title="general"
          color="#5290be"
        />
        <GenericButton
          onPress={()=>{this.getData('health')}}
          title="health"
          color="#525abe"
        />
        <GenericButton
          onPress={()=>{this.getData('science')}}
          title="science"
          color="#8052be"
        />
        <GenericButton
          onPress={()=>{this.getData('sports')}}
          title="sports"
          color="#b652be"
        />
        <GenericButton
          onPress={()=>{this.getData('technology')}}
          title="technology"
          color="#e45bd6"
        />
      </Fragment>
    )
  }
}

export default connect(null)(Home);

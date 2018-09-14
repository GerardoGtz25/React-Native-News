import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import React from 'react';
import Login from './screens/containers/login';
import Home from './screens/containers/home';
import NewsList from './screens/containers/news-list';
import SearchNews from './screens/containers/search-news';

import Header from './sections/components/header';
import Icon from './sections/components/icon';

const Main = createStackNavigator(
  {
    Login,
    NewsList,
  },
  {
    initialRouteName: "Login",
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    }
  }
)

const TabNavigator = createMaterialTopTabNavigator(
  {
    Login: {
      screen: Main,
      navigationOptions: {
        title: 'Login',
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      }
    },
    SearchNews: {
      screen: SearchNews,
      navigationOptions: {
        title: 'Search',
      }
    },
    NewsList: {
        screen: NewsList,
        navigationOptions: {
          title: 'News',
        }
      }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
      },
      style: {
        paddingTop: 20
      },
      indicatorStyle: {
        backgroundColor: 'white'
      },
    }
  }
)

export default TabNavigator;

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import React from 'react';
import Login from './screens/containers/login';
import Logout from './screens/containers/logout';
import Home from './screens/containers/home';
import NewsList from './screens/containers/news-list';
import SearchNews from './screens/containers/search-news';
import MyWebView from './screens/containers/web-view';
import Header from './sections/components/header';
import Icon from './sections/components/icon';

const Main = createStackNavigator(
  {
    Login,
    MyWebView
  },
  {
    initialRouteName: "Login",
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white'
    },
  }
)

const Navigation = createMaterialTopTabNavigator(
  {
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
      },
    Logout: {
      screen: Logout,
      navigationOptions: {
        title: 'Close',
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

const SwitchNavigator = createSwitchNavigator(
  {
    Main,
    Navigation,
  },
  {
    initialRouteName: 'Main',
  }
)
export default SwitchNavigator;

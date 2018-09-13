import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import React from 'react';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import NewsList from './screens/containers/news-list';
import SearchNews from './screens/containers/search-news';
import Icon from './sections/components/icon';

const Main = createStackNavigator(
  {
    Home,
    NewsList,
  },
  {
    navigationOptions: {
      header: Header
    },
    cardStyle: {
      backgroundColor: 'white'
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏠"/>,
      }
    },
    SearchNews: {
      screen: SearchNews,
      navigationOptions: {
        title: 'Search News',
        tabBarIcon: <Icon icon="🔍"/>,
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#685be4'
    }
  }
)

export default TabNavigator;

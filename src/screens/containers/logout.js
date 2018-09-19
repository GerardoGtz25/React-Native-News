import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { navigationActions } from 'react-navigation';
import API  from '../../../utils/api';
import Header from '../../sections/components/header';

class Logout extends Component {

  closeSession = () => {

    this.props.dispatch({
      type: 'SET_SESSION',
      payload: {
        user: '',
        password: '',
        token: ''
      }
    })

    this.props.navigation.navigate('Login');

  }

  render() {
    return(
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/logo.png')}
        />
        <TouchableOpacity
          onPress={this.closeSession}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 200,
    marginHorizontal: 60
  },
  button: {
     backgroundColor: '#99c84a',
     borderRadius: 5,
     width: '90%',
     marginHorizontal: 10,
   },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})


export default connect(null)(Logout)

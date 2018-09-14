import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { navigationActions } from 'react-navigation';
import API  from '../../../utils/api';
import Header from '../../sections/components/header';

class Login extends Component {
  state = {
    user: '',
    password: 'Inicia secion'
  }

  render() {
    return(
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={require('../../../assets/logo.png')}
          />
        <Text style={styles.text}>{'Hola ' + this.state.input }</Text>
          <TextInput
            style={styles.input}
            placeholder="User"
            autoCorrent={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({input: text})}
           />
           <TextInput
             style={styles.input}
             placeholder="Passaword"
             autoCorrent={false}
             autoCapitalize="none"
             underlineColorAndroid="transparent"
             onChangeText={(text) => this.setState({password: text})}
             password= "true"
            />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 200,
    marginHorizontal: 60
  },
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
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#aed6f1'
  }
})

export default Login;

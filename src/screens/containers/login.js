import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { navigationActions } from 'react-navigation';
import API  from '../../../utils/api';
import Header from '../../sections/components/header';

class Login extends Component {
  state = {
    user: '',
    password: '',
    token: 'a1b2c3d4',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header />
    }
  }

  cleanState(){
    this.setState({user: null})
    this.setState({password: null})
  }

  setSession = () => {
    // Aqui tendria que venir la llamada a la Api para obtener el token

    const user = this.state.user;
    const password = this.state.password;
    const token = this.state.token;

    if (user === 'kimanta' && password === '123') {
      this.props.dispatch({
        type: 'SET_SESSION',
        payload: {
          user,
          password,
          token
        }
      })
      this.cleanState();
      this.props.navigation.navigate('Home');
    }else{

      console.log(this.props);

      this.cleanState();

      Alert.alert(
        'Datos incorrectos',
        'Proporcione un usuario y una contraseña vlida',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    return(
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/logo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="User"
          autoCorrent={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({user: text})}
          value={this.state.user}
         />
         <TextInput
           style={styles.input}
           placeholder="Passaword"
           autoCorrent={false}
           autoCapitalize="none"
           underlineColorAndroid="transparent"
           onChangeText={(text) => this.setState({password: text})}
           password= "true"
           value={this.state.password}
          />
        <TouchableOpacity
          onPress={this.setSession}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '90%',
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

function mapStateToProps(state){
  return {
    session: state.login
  }
}


export default connect(mapStateToProps)(Login)

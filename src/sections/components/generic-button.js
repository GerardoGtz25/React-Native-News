import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

function GenericButton (props){
  return(
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignItems: 'center',
        height: 45,
        marginTop: 25,
        marginHorizontal: 15,
        backgroundColor: props.color,
        padding: 5,
        borderRadius: 10,
        width: '90%'
    }}>
      <Text style={styles.text}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default GenericButton;

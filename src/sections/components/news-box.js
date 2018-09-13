import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

function NewsBox(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      >
      <View style={styles.container}>
        <Image
          style={styles.newsImage}
          source={{uri: props.urlToImage}}
          />
        <View style={styles.containerDescription}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.textDescription}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: '#eaecee',
    width: '95%',
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    height: 'auto',
    justifyContent: 'space-between'
  },
  newsImage:{
    width: 110,
    height: 110,
    marginVertical: 8,
    borderRadius: 20,
  },
  containerDescription:{
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    marginLeft: 5,
  },
  textTitle:{
    fontWeight: 'bold',
    fontSize: 15
  },
  textDescription:{
    textAlignVertical: 'auto'
  }
})


export default NewsBox;

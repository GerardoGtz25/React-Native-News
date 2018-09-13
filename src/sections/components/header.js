import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView style={styles.statusBar}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 50,
    resizeMode: 'contain',
  },
  statusBar: {
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  }
})

export default Header;

import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
const Home = props => {
  const {navigation} = props;
  const theme = useSelector(state => state.theme.theme); // Redux'tan tema bilgisi
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme === 'dark' ? 'black' : 'white'},
        ]}>
        <View style={styles.card}>
          <Text style={styles.text}>Home</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.text}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;

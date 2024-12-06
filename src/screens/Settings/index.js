import {View, Text, SafeAreaView, TouchableOpacity, Switch} from 'react-native';
import React from 'react';
import styles from './styles';
import {toggleTheme} from '../../redux/actions/themeAction';
import {useDispatch, useSelector} from 'react-redux';

const Settings = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme); // Redux'tan tema bilgisi
  const toggleSwitch = () => {
    dispatch(toggleTheme()); // Tema değiştir
    console.log('Tema değiştirildi:', theme); // Konsola yazdır (ama burada hemen değişmez)
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme === 'dark' ? 'black' : 'white'},
        ]}>
        <View style={styles.card}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>Go to Home</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.text}>Koyu Mod</Text>
          <Switch
            style={styles.switch}
            ios_backgroundColor="#333"
            onValueChange={toggleSwitch}
            value={theme === 'dark'} // Switch'in mevcut durumu
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

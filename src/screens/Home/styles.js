import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#f5f5f5',
  },
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  card: {
    width: windowWidth,
    padding: windowWidth * 0.1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  button: {
    width: windowWidth,
    padding: windowWidth * 0.1,
    backgroundColor: '#8EB486',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

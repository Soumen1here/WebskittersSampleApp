import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';
// import { Images, argonTheme } from "../constants";

class App extends React.Component {


  render() {
    return (
      <View style = {styles.MainContainer }>
            <Text>Soumen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      alignItems:'center',justifyContent:'center'
    },
  }
)



export default App;

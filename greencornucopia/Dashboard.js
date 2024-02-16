import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from './App'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    headerStuff: {
      fontSize: 30,
    }, 
    redirectBtnStyling: {
      marginBottom:10,
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function Dashboard({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>helo</Text>
      </View>
    );
}
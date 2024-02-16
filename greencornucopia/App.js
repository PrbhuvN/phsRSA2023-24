import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';

var state = {
  email: 'demo',
  password: 'demo'
};

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

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.headerStuff}>The Green Cornucopia</Text>
      <Button title = "Login" style = {styles.redirectBtnStyling} onPress={() => {
        navigation.navigate('Login');
      }}>
        
      </Button>
      <Button title = "Sign Up" style = {styles.redirectBtnStyling} onPress={() => {
        navigation.navigate('Signup');
      }}>
      
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.headerStuff}>LoginDeezNuts</Text>
      <TextInput placeholder='email' id='email' textAlign={'center'}></TextInput>
      <TextInput placeholder='password' id='password' secureTextEntry={true}  textAlign={'center'}></TextInput>
      <Button title='Log In' onPress={() => {
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        console.log('log in time ' + email.textContent + " " + password.textContent);
        navigation.navigate('Dashboard');
      }}>
      </Button>
    </View>
  );
}

function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.headerStuff}>SignupDeezNuts</Text>
      <TextInput placeholder='email' id='email' textAlign={'center'}></TextInput>
      <TextInput placeholder='password' id='password' secureTextEntry={true}  textAlign={'center'}></TextInput>
      <Button title='Sign Up' onPress={() => {
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        console.log('sign up time ' + email.textContent + " " + password.textContent);
        navigation.navigate('Dashboard');
      }}>
      </Button>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Signup" component={SignupScreen} />
       <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}
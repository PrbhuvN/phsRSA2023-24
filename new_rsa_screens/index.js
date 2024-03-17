import { AppRegistry, Platform } from 'react-native';
import App from './pages/welcomePage.js';
//import App from './pages/authPages/donorSignup.js';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication('main', { rootTag });
}
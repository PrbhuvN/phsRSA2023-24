import { AppRegistry, Platform } from 'react-native';
//import App from './pages/donatorPages/myDonations';
import App from './pages/authPages/donorLogin.js';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication('main', { rootTag });
}
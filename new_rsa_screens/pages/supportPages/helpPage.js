import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomBar from './../../bottomBar.js';

class HelpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          scrollEnabled={true}
          contentInsetAdjustmentBehavior="automatic">
          <View
            style={{
              width: 400,
              height: 812,
              fontSize: 0,
              backgroundColor: '#ceffcd',
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0,
              marginRight: 'auto',
              marginBottom: 0,
              marginLeft: 'auto',
            }}>
            <Text
              style={{
                display: 'flex',
                width: 243.2,
                height: 41.897,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 28,
                fontWeight: '700',
                lineHeight: 41.897,
                color: '#030303',
                position: 'relative',
                textAlign: 'center',
                zIndex: 1,
                marginTop: 57,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 77,
              }}
              numberOfLines={1}>
              Help
            </Text>
            <Text
              style={{
                width: 313,
                height: 483,
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 36,
                position: 'relative',
                textAlign: 'center',
                zIndex: 2,
                marginTop: 85.103,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 45,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: '400',
                  lineHeight: 36,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'center',
                }}>
                We’d love to help you out!{'\n'}Contact us for help{'\n'}
                {'\n'}Support Email:&nbsp;
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 36,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'center',
                }}>
                green.cornucopia@gmail.com{'\n'}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: '400',
                  lineHeight: 36,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'center',
                }}>
                {'\n'}Customer Service:{'\n'}111-222-3333{'\n'}
                {'\n'}Mailing Address:{'\n'}123 Cornucopia Street
              </Text>
            </Text>
            <BottomBar navigation={this.props.navigation} driver={true}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HelpPage;

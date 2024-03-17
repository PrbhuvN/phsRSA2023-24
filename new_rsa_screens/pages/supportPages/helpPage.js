/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
            <View
              style={{
                width: 332.2,
                height: 45,
                position: 'relative',
                zIndex: 15,
                marginTop: 87.065,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44.333,
              }}>
              <ImageBackground
                style={{
                  width: '13.55%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '42.14%',
                  zIndex: 8,
                }}
                source={require('./../../assets/images/9b320ea8-f6cc-4287-85f4-081852e09430.png')}>
                <View
                  style={{
                    width: 15,
                    height: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 9,
                    marginTop: 14,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 10,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/0a9c3e17-8b20-4205-9f9a-8d7618552192.png')}
                  />
                </View>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: '5.78%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 6,
                }}
                source={require('./../../assets/images/1fd628c6-81a1-4c2a-98eb-a8b9b38f1758.png')}
              />
              <View
                style={{
                  width: '6.02%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '21.07%',
                  overflow: 'hidden',
                  zIndex: 15,
                }}>
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 16,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/90b96224-2ca4-4f8a-9720-bef17ffb7141.png')}
                />
              </View>
              <View
                style={{
                  width: '5.78%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '72.25%',
                  overflow: 'hidden',
                  zIndex: 4,
                }}>
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 5,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/723cef14-7092-41b4-b57e-fac78fc523b5.png')}
                />
              </View>
              <View
                style={{
                  width: '5.78%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '33.33%',
                  left: '94.22%',
                  overflow: 'hidden',
                  zIndex: 11,
                }}>
                <View
                  style={{
                    width: '104.17%',
                    height: '88.81%',
                    position: 'absolute',
                    top: '-0.29%',
                    left: '-1.74%',
                    overflow: 'hidden',
                    zIndex: 13,
                  }}>
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 14,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./../../assets/images/9eb6a0a7-473f-45c9-bb96-1c592e47b52b.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 12,
                  }}
                  source={require('./../../assets/images/0e6e7328-856c-4ed5-8e99-2f376a4f2014.png')}
                />
              </View>
            </View>
            <ImageBackground
              style={{
                width: '100%',
                height: '8.63%',
                position: 'absolute',
                top: '91.38%',
                left: '-0.25%',
                zIndex: 3,
              }}
              source={require('./../../assets/images/ac779e20-57a8-40b3-a0dc-651d74f766de.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HelpPage;

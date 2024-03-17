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

class RequestConfirmation extends React.Component {
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
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0,
              marginRight: 'auto',
              marginBottom: 0,
              marginLeft: 'auto',
            }}>
            <View
              style={{
                width: 295,
                height: 123,
                position: 'relative',
                zIndex: 5,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <ImageBackground
                style={{
                  width: '36.16%',
                  height: '81.1%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 5,
                }}
                source={require('./../../assets/images/d54e00a7-5d5a-48ef-977b-960e5078e33a.png')}>
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 6,
                  }}
                  source={require('./../../assets/images/bf564f20-03a5-4a21-ad4f-f2d022960ac9.png')}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 10,
                    }}
                    source={require('./../../assets/images/4157cc75-0695-4f2b-97bb-d4b20b28e382.png')}>
                    <View
                      style={{
                        width: 29.867,
                        height: 27.931,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1,
                        marginTop: 31.921,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 19.2,
                      }}>
                      <ImageBackground
                        style={{
                          width: 12.057,
                          height: 17.462,
                          position: 'relative',
                          zIndex: 2,
                          marginTop: 5.234,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 8.905,
                        }}
                        source={require('./../../assets/images/589cd0ee-8f0e-40a9-80ff-15f34168f75c.png')}
                      />
                    </View>
                  </ImageBackground>
                </ImageBackground>
              </ImageBackground>
              <Text
                style={{
                  display: 'flex',
                  height: '42.82%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 40,
                  fontWeight: '700',
                  lineHeight: 52.673,
                  color: '#030303',
                  position: 'absolute',
                  top: '57.18%',
                  left: '8.68%',
                  textAlign: 'left',
                  zIndex: 4,
                }}
                numberOfLines={1}>
                Confirm Post
              </Text>
            </View>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 27,
                marginTop: 43,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 28,
              }}
              numberOfLines={1}>
              Name:
            </Text>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 28,
                marginTop: 16,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 28,
              }}
              numberOfLines={1}>
              Address:
            </Text>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 25,
                marginTop: 17,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 26,
              }}
              numberOfLines={1}>
              Requested Food:&nbsp;
            </Text>
            <Text
              style={{
                height: 23.585,
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 23.585,
                color: '#1c1c1e',
                position: 'relative',
                textAlign: 'left',
                zIndex: 26,
                marginTop: 17,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 26,
              }}
              numberOfLines={1}>
              Expiry:&nbsp;
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 333,
                height: 95,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 32,
                fontWeight: '400',
                lineHeight: 48,
                color: '#fe0a28',
                position: 'relative',
                textAlign: 'left',
                zIndex: 29,
                marginTop: 83.415,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 27,
              }}>
              Is this information accurate?&nbsp;
            </Text>
            <ImageBackground
              style={{
                width: 348.8,
                height: 51.872,
                position: 'relative',
                zIndex: 8,
                marginTop: 169,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 34,
              }}
              source={require('./../../assets/images/951ca4bc-8221-49b9-877e-2d827840ca93.png')}>
              <Text
                style={{
                  display: 'flex',
                  height: '46.15%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 23.941,
                  color: '#ffffff',
                  position: 'absolute',
                  top: '29.81%',
                  left: '39.91%',
                  textAlign: 'left',
                  zIndex: 9,
                }}
                numberOfLines={1}>
                Confirm
              </Text>
            </ImageBackground>
            <View
              style={{
                width: 333.2,
                height: 45,
                position: 'relative',
                zIndex: 23,
                marginTop: 43.192,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 45.333,
              }}>
              <ImageBackground
                style={{
                  width: '13.51%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '42.02%',
                  zIndex: 16,
                }}
                source={require('./../../assets/images/be03ef5b-cef2-45a5-8e3b-ffa521dbf49a.png')}>
                <View
                  style={{
                    width: 15,
                    height: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 17,
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
                      zIndex: 18,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/2e4641b0-488f-4d21-8d85-804e62016cc8.png')}
                  />
                </View>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: '5.76%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 14,
                }}
                source={require('./../../assets/images/c6a410f1-e37a-48fd-89df-466cac3024d0.png')}
              />
              <View
                style={{
                  width: '6%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '21.01%',
                  overflow: 'hidden',
                  zIndex: 23,
                }}>
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 24,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/f8ce83de-a94c-4f5a-b9a2-af486ceb984d.png')}
                />
              </View>
              <View
                style={{
                  width: '5.76%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '72.03%',
                  overflow: 'hidden',
                  zIndex: 12,
                }}>
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 13,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/283d8533-1987-4933-989e-763f3bb21bfd.png')}
                />
              </View>
              <View
                style={{
                  width: '5.76%',
                  height: '50.05%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '94.24%',
                  overflow: 'hidden',
                  zIndex: 19,
                }}>
                <View
                  style={{
                    width: '104.17%',
                    height: '88.81%',
                    position: 'absolute',
                    top: '-0.29%',
                    left: '-1.74%',
                    overflow: 'hidden',
                    zIndex: 21,
                  }}>
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 22,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./../../assets/images/e502cca9-e1c1-4feb-9908-fa473e962362.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 20,
                  }}
                  source={require('./../../assets/images/b8b2cf44-b92e-44c6-9cb3-16af5befdeaa.png')}
                />
              </View>
            </View>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              source={require('./../../assets/images/f0806e81-16e8-4693-a852-d8c36779b2fe.png')}
            />
            <ImageBackground
              style={{
                width: '100%',
                height: '8.63%',
                position: 'absolute',
                top: '91.38%',
                left: '0.25%',
                zIndex: 11,
              }}
              source={require('./../../assets/images/96ba2839-0b31-4a2c-b50c-02dda50c9fdb.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RequestConfirmation;
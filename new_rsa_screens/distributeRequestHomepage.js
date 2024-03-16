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

export default function App(){
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
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
          }}
        >
          <ImageBackground
            style={{
              width: 394.667,
              height: 812,
              fontSize: 0,
              position: 'relative',
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
            source={require('./assets/images/b67e07f9-7c68-4cfa-9fc7-06efee2d0111.png')}
          >
            <Text
              style={{
                height: 36,
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 36,
                color: '#030303',
                position: 'relative',
                textAlign: 'left',
                zIndex: 18,
                marginTop: 159,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 109,
              }}
              numberOfLines={1}
            >
              Welcome Back
            </Text>
            <View
              style={{
                display: 'flex',
                width: 332.267,
                height: 173.911,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 11,
                marginTop: 124,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 35,
              }}
            >
              <ImageBackground
                style={{
                  width: 148.267,
                  height: 173.911,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 3,
                }}
                source={require('./assets/images/a4395b98-1cf9-4bd7-8b55-87f5b8d9d1e2.png')}
              >
                <ImageBackground
                  style={{
                    width: 98,
                    height: 93,
                    position: 'relative',
                    zIndex: 7,
                    marginTop: 23.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 25.5,
                  }}
                  source={require('./assets/images/417ad53a-04fb-4be7-a322-600608d76b75.png')}
                >
                  <View
                    style={{
                      width: 61.392,
                      height: 58.228,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 8,
                      marginTop: 17.386,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 18.304,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 53.742,
                        height: 58.239,
                        position: 'relative',
                        zIndex: 9,
                        marginTop: -0.01,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3.814,
                      }}
                      source={require('./assets/images/16150282-b0cd-489b-9905-4118f87d1594.png')}
                    />
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    height: 26.274,
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#030303',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 5,
                    marginTop: 15.856,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 39.533,
                  }}
                  numberOfLines={1}
                >
                  Request
                </Text>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 148.267,
                  height: 173.911,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 11,
                }}
                source={require('./assets/images/48ffc4bd-e349-47fa-9e52-a72371b4e985.png')}
              >
                <ImageBackground
                  style={{
                    width: 98,
                    height: 93,
                    position: 'relative',
                    zIndex: 15,
                    marginTop: 19.767,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 31.367,
                  }}
                  source={require('./assets/images/4e3a0043-1888-491b-8d35-5029216317e2.png')}
                >
                  <View
                    style={{
                      width: 62.035,
                      height: 57.767,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 16,
                      marginTop: 18.686,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 17.419,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 54.281,
                        height: 50.547,
                        position: 'relative',
                        zIndex: 17,
                        marginTop: 3.61,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3.877,
                      }}
                      source={require('./assets/images/f2f8e7de-04cf-47a4-8ffc-11781302e667.png')}
                    />
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    height: 26.274,
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#030303',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 13,
                    marginTop: 19.856,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 38.4,
                  }}
                  numberOfLines={1}
                >
                  Distribute
                </Text>
              </ImageBackground>
            </View>
            <View
              style={{
                width: 333.2,
                height: 45,
                position: 'relative',
                zIndex: 31,
                marginTop: 261.154,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44.333,
              }}
            >
              <ImageBackground
                style={{
                  width: '13.51%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '42.02%',
                  zIndex: 24,
                }}
                source={require('./assets/images/1a4cfcfa-9df8-4948-969b-f59094195280.png')}
              >
                <View
                  style={{
                    width: 15,
                    height: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 25,
                    marginTop: 14,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 26,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./assets/images/0698c35c-7c46-40b5-b0f4-e7cff4663035.png')}
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
                  zIndex: 22,
                }}
                source={require('./assets/images/918ea7d3-1033-4e30-8532-d61be032bb87.png')}
              />
              <View
                style={{
                  width: '6%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '21.01%',
                  overflow: 'hidden',
                  zIndex: 31,
                }}
              >
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 32,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/4b0a1d7e-c980-4cf8-88ef-dc0542e15c38.png')}
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
                  zIndex: 20,
                }}
              >
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 21,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/3a4c0375-dbd5-4644-902a-e2b4c2a57bfc.png')}
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
                  zIndex: 27,
                }}
              >
                <View
                  style={{
                    width: '104.17%',
                    height: '88.81%',
                    position: 'absolute',
                    top: '-0.29%',
                    left: '-1.74%',
                    overflow: 'hidden',
                    zIndex: 29,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 30,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./assets/images/675f44ca-4f87-4210-bc1a-7fcd099fb38d.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 28,
                  }}
                  source={require('./assets/images/ecfaded8-39c6-4be9-bb84-e7f0f9d35625.png')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

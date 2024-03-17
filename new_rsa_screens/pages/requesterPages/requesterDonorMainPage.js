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

class RequesterDonorMainPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
              position: 'relative',
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
            source={require('./../../assets/images/8a66c1ff-1675-4fa2-91b1-f5fd90b4e18a.png')}
          >
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                fontSize: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}
              source={require('./../../assets/images/efc86092-6a0c-491a-b0b0-2b6b19c3b5ce.png')}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 194,
                  height: 36,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: '700',
                  lineHeight: 36,
                  color: '#030303',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 2,
                  marginTop: 25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 103,
                }}
                numberOfLines={1}
              >
                Welcome Back!
              </Text>
              <Text
                style={{
                  display: 'flex',
                  width: 205,
                  height: 36,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: '400',
                  lineHeight: 36,
                  color: '#030303',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 3,
                  marginTop: 11,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 27,
                }}
                numberOfLines={1}
              >
                Recent Requests:
              </Text>
              <ImageBackground
                style={{
                  width: 362,
                  height: 172,
                  position: 'relative',
                  zIndex: 14,
                  marginTop: 11,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 13,
                }}
                source={require('./../../assets/images/f74950cb-6631-4420-b7c2-bfc3449c8d8e.png')}
              >
                <View
                  style={{
                    width: 342,
                    height: 34,
                    position: 'relative',
                    zIndex: 25,
                    marginTop: 11,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 11,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: '9.36%',
                      height: '94.12%',
                      position: 'absolute',
                      top: 0,
                      left: '63.45%',
                      zIndex: 16,
                    }}
                    source={require('./../../assets/images/7256c41a-5a97-4919-a9f5-2bbb9c641a91.png')}
                  >
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '-3.13%',
                        left: '-3.13%',
                        zIndex: 18,
                      }}
                      source={require('./../../assets/images/c8bb3d4b-18b1-48bd-8770-5841d2592093.png')}
                    />
                  </ImageBackground>
                  <ImageBackground
                    style={{
                      width: '3.45%',
                      height: '9.01%',
                      position: 'absolute',
                      top: 0,
                      left: '96.49%',
                      zIndex: 25,
                    }}
                    source={require('./../../assets/images/f59e2cc7-6afb-4dd9-9243-3ee4569db76b.png')}
                  />
                  <Text
                    style={{
                      display: 'flex',
                      height: '97.06%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 20,
                      fontWeight: '400',
                      lineHeight: 30,
                      color: '#030303',
                      position: 'absolute',
                      top: '2.94%',
                      left: 0,
                      textAlign: 'left',
                      zIndex: 23,
                    }}
                    numberOfLines={1}
                  >
                    Fresh Fruit Needed!
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: '52.94%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'absolute',
                      top: '23.53%',
                      left: '73.68%',
                      textAlign: 'left',
                      zIndex: 20,
                    }}
                    numberOfLines={1}
                  >
                    Charlotte Food&nbsp;
                  </Text>
                </View>
                <View
                  style={{
                    width: 342,
                    height: 128,
                    position: 'relative',
                    zIndex: 26,
                    marginTop: -1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 11,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: '33.92%',
                      height: '73.44%',
                      position: 'absolute',
                      top: 0,
                      left: '66.08%',
                      zIndex: 26,
                    }}
                    source={require('./../../assets/images/3f0eb259e014cdc93250787756b2504869bb4195.png')}
                    resizeMode='cover'
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 252,
                      height: '99.22%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      fontWeight: '400',
                      lineHeight: 24,
                      color: '#030303',
                      position: 'absolute',
                      top: '0.78%',
                      left: 0,
                      textAlign: 'left',
                      overflow: 'hidden',
                      zIndex: 24,
                    }}
                  >
                    Apples{'\n'}Oranges{'\n'}Bananas{'\n'}
                    {'\n'}Food Bank in Charlotte
                  </Text>
                </View>
              </ImageBackground>
              <View
                style={{
                  width: 24,
                  height: 24,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 4,
                  marginTop: 68,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 310,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 5,
                  }}
                />
              </View>
              <ImageBackground
                style={{
                  width: 348.8,
                  height: 51.872,
                  position: 'relative',
                  zIndex: 11,
                  marginTop: 158,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 24,
                }}
                source={require('./../../assets/images/66b193b8-bdc5-4d59-8284-b8bd818a4442.png')}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: '54.47%',
                    height: '42.41%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#ffffff',
                    position: 'absolute',
                    top: '25.06%',
                    left: '23.22%',
                    textAlign: 'center',
                    zIndex: 12,
                  }}
                  numberOfLines={1}
                >
                  Create New Request
                </Text>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 348.8,
                  height: 51.872,
                  position: 'relative',
                  zIndex: 8,
                  marginTop: 28.128,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 26,
                }}
                source={require('./../../assets/images/5ce9b5f9-7439-4c78-8895-aba3a18b8b5b.png')}
              >
                <Text
                  style={{
                    display: 'flex',
                    width: '54.47%',
                    height: '42.41%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#ffffff',
                    position: 'absolute',
                    top: '25.06%',
                    left: '23.22%',
                    textAlign: 'center',
                    zIndex: 9,
                  }}
                  numberOfLines={1}
                >
                  View My Requests
                </Text>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 393,
                  height: 68.839,
                  position: 'relative',
                  zIndex: 27,
                  marginTop: 69.128,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2,
                }}
                source={require('./../../assets/images/e3ec692b-128f-4700-8913-0ffaf0b8de23.png')}
              >
                <ImageBackground
                  style={{
                    width: '11.45%',
                    height: '65.37%',
                    position: 'absolute',
                    top: '17.53%',
                    left: '47.16%',
                    zIndex: 32,
                  }}
                  source={require('./../../assets/images/18942246-b7e4-4aa1-a34d-178d64d9f104.png')}
                >
                  <View
                    style={{
                      width: 15,
                      height: 16,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 33,
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
                        zIndex: 34,
                        marginTop: 1,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0.94,
                      }}
                      source={require('./../../assets/images/96a9da3c-1762-4514-afcb-200090d5e86e.png')}
                    />
                  </View>
                </ImageBackground>
                <View
                  style={{
                    width: '4.89%',
                    height: '32.72%',
                    position: 'absolute',
                    top: '34.96%',
                    left: '72.6%',
                    overflow: 'hidden',
                    zIndex: 28,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 19.2,
                      height: 18.017,
                      position: 'relative',
                      zIndex: 29,
                      marginTop: 2.252,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/d4516e39-9a31-4681-a6d7-0cf0e456a269.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '4.89%',
                    height: '32.72%',
                    position: 'absolute',
                    top: '34.96%',
                    left: '11.54%',
                    overflow: 'hidden',
                    zIndex: 30,
                  }}
                  source={require('./../../assets/images/849ea35e-795e-4b41-a04d-fca279211c8d.png')}
                />
                <View
                  style={{
                    width: '5.09%',
                    height: '29.05%',
                    position: 'absolute',
                    top: '34.96%',
                    left: '29.35%',
                    overflow: 'hidden',
                    zIndex: 39,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 19.999,
                      height: 20.002,
                      position: 'relative',
                      zIndex: 40,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/e5c20dc6-3737-424c-b8f9-49cb1570eab2.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.89%',
                    height: '32.72%',
                    position: 'absolute',
                    top: '39.32%',
                    left: '91.18%',
                    overflow: 'hidden',
                    zIndex: 35,
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
                      zIndex: 37,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 17.5,
                        height: 19.999,
                        position: 'relative',
                        zIndex: 38,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.25,
                      }}
                      source={require('./../../assets/images/5ffa6fab-c891-4c83-b74f-d090ba913d7f.png')}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: '87.5%',
                      height: '99.99%',
                      position: 'absolute',
                      top: 0,
                      left: '6.25%',
                      zIndex: 36,
                    }}
                    source={require('./../../assets/images/399dcbee-c1ad-4d14-a70b-10387c9cc626.png')}
                  />
                </View>
              </ImageBackground>
            </ImageBackground>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}

export default RequesterDonorMainPage
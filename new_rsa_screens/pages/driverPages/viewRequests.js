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

class RequestsPage extends React.Component {
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
              marginTop: 0,
              marginRight: 'auto',
              marginBottom: 0,
              marginLeft: 'auto',
            }}>
            <View
              style={{
                width: 200,
                height: 32,
                position: 'relative',
                zIndex: 27,
                marginTop: 22,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 100,
              }}>
              <View
                style={{
                  width: 180,
                  height: 62.5,
                  fontSize: 0,
                  position: 'relative',
                  zIndex: 28,
                  marginTop: 6,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 11,
                }}>
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
                    zIndex: 29,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  numberOfLines={1}>
                  Food Requests
                </Text>
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
                    zIndex: 30,
                    marginTop: -9.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 61,
                  }}
                  numberOfLines={1}>
                  Hub
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 255,
                height: 48,
                position: 'relative',
                zIndex: 37,
                marginTop: 21,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 69,
              }}>
              <View
                style={{
                  width: '56.47%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '43.53%',
                  zIndex: 37,
                }}>
                <ImageBackground
                  style={{
                    width: '65%',
                    height: '115%',
                    position: 'absolute',
                    top: '20%',
                    right: 'auto',
                    zIndex: 37,
                  }}
                  source={require('./../../assets/images/ed75eefc-cfa8-443e-ad87-092b13e94208.png')}
                />
                <Text
                  style={{
                    display: 'flex',
                    height: '43.75%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#030303',
                    position: 'absolute',
                    top: '56.25%',
                    left: '52.78%',
                    textAlign: 'left',
                    zIndex: 34,
                  }}
                  numberOfLines={1}>
                  Accepted
                </Text>
              </View>
              <Text
                style={{
                  display: 'flex',
                  height: '43.75%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#030303',
                  position: 'absolute',
                  top: '56.25%',
                  left: 0,
                  textAlign: 'left',
                  zIndex: 32,
                }}
                numberOfLines={1}>
                Upcoming
              </Text>
              <Text
                style={{
                  display: 'flex',
                  height: '43.75%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 21,
                  color: '#030303',
                  position: 'absolute',
                  top: '56.25%',
                  left: 0,
                  textAlign: 'left',
                  zIndex: 36,
                }}
                numberOfLines={1}>
                Upcoming
              </Text>
            </View>
            <ImageBackground
              style={{
                width: 80,
                height: 5,
                position: 'relative',
                zIndex: 38,
                marginTop: 2.5,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 65.5,
              }}
              source={require('./../../assets/images/4db83890-2c8e-4dc2-a3b8-35fa623b4094.png')}
            />
            <ImageBackground
              style={{
                width: 339,
                height: 6,
                position: 'relative',
                zIndex: 39,
                marginTop: 14.5,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 23,
              }}
              source={require('./../../assets/images/f4c4cf09-7f17-447c-8c7b-d09278af62f9.png')}
            />
            
            {/* card start */}
              {/*card background*/}
            <ImageBackground
              style={{
                width: 362,
                height: 231.733,
                position: 'relative',
                zIndex: 16,
                marginTop: 23,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 18,
              }}
              source={require('./../../assets/images/935c8062-6e4a-4d18-a6c8-f0b7bc349779.png')}
              >
                {/*card 3 dots thingy*/}
              <ImageBackground
                style={{
                  width: 11.813,
                  height: 4.126,
                  position: 'relative',
                  zIndex: 21,
                  marginTop: 14.82,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 341,
                }}
                source={require('./../../assets/images/1bda9b54-ce26-4768-908e-2be87be9e56d.png')}
              />
              {/*upper bar collection*/}
              <View
                style={{
                  width: 327,
                  height: 44.46,
                  position: 'relative',
                  zIndex: 24,
                  marginTop: -2.779,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 11,
                }}>

                  {/*pfp*/}
                <ImageBackground
                  style={{
                    width: 32,
                    height: 29.901,
                    position: 'relative',
                    zIndex: 24,
                    marginTop: 4.39,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 223,
                  }}
                  >
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: '-3.34%',
                      left: '-3.13%',
                      zIndex: 26,
                    }}
                    source={require('./../../assets/images/de8116f3-5eab-4da6-a85d-0ea13fdd6186.png')}
                  />
                </ImageBackground>
                {/* card title */}
                <Text
                  style={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    fontWeight: '400',
                    lineHeight: 30,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 19,
                  }}
                  numberOfLines={1}>
                  Fresh Fruit Needed!
                </Text>
              </View>
              {/* rest of card */}
              <View
                style={{
                  width: 342,
                  height: 171.105,
                  position: 'relative',
                  zIndex: 22,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 11,
                }}>
                <Text
                  style={{
                    display: 'flex',
                    width: 252,
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 24,
                    color: '#030303',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    textAlign: 'left',
                    zIndex: 20,
                  }}>
                  Apples{'\n'}Oranges{'\n'}Bananas{'\n'}
                  {'\n'}Food Bank in Charlotte
                </Text>
                {/* card image */}
                <ImageBackground
                  style={{
                    width: '33.92%',
                    height: '74.02%',
                    position: 'absolute',
                    top: 0,
                    left: '66.08%',
                    zIndex: 22,
                  }}
                  source={require('./../../assets/images/3f0eb259e014cdc93250787756b2504869bb4195.png')}
                  resizeMode="cover"
                />
              </View>
            </ImageBackground>
            {/*end card*/}
            <View
              style={{
                width: 332.2,
                height: 45,
                position: 'relative',
                zIndex: 13,
                marginTop: 345.331,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46.333,
              }}>
              <ImageBackground
                style={{
                  width: '13.55%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: '42.14%',
                  zIndex: 6,
                }}
                source={require('./../../assets/images/1d1674ae-f0cf-488d-a4fb-1fd1f8ee5e0a.png')}>
                <View
                  style={{
                    width: 15,
                    height: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 7,
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
                      zIndex: 8,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/a1cf6a50-cb13-4a88-bfb8-49f671c0d670.png')}
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
                  zIndex: 4,
                }}
                source={require('./../../assets/images/f2e7c0f2-d7fd-420b-956e-33cd8ef4fc57.png')}
              />
              <View
                style={{
                  width: '6.02%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '21.07%',
                  overflow: 'hidden',
                  zIndex: 13,
                }}>
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 14,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/497ad60b-3ddc-40fe-80ec-c2c915eab2ab.png')}
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
                  zIndex: 2,
                }}>
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 3,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/20697f40-9b51-47fe-812c-4a5ad8c222dc.png')}
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
                  zIndex: 9,
                }}>
                <View
                  style={{
                    width: '104.17%',
                    height: '88.81%',
                    position: 'absolute',
                    top: '-0.29%',
                    left: '-1.74%',
                    overflow: 'hidden',
                    zIndex: 11,
                  }}>
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 12,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./../../assets/images/71e2b13a-228e-4cc2-ba4e-98130283d623.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 10,
                  }}
                  source={require('./../../assets/images/0ef5fe5f-f195-4de6-a815-77af3565f553.png')}
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
              source={require('./../../assets/images/6c02b9c3-d4ba-4b20-8b75-bda43da603bf.png')}
            />
            <ImageBackground
              style={{
                width: '100%',
                height: '8.63%',
                position: 'absolute',
                top: '91.38%',
                left: 0,
                zIndex: 1,
              }}
              source={require('./../../assets/images/983c53f3-4600-4094-8049-8930b158ffe8.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RequestsPage;
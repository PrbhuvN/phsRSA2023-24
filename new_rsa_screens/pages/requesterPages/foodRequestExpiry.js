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

class RequestExpiry extends React.Component {
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
                width: 268.8,
                height: 112.223,
                position: 'relative',
                zIndex: 5,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}>
              <ImageBackground
                style={{
                  width: '39.68%',
                  height: '88.89%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 5,
                }}
                source={require('./../../assets/images/486e59ce-3207-4172-b029-b5bf5103a2bf.png')}>
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 6,
                  }}
                  source={require('./../../assets/images/96c78201-6724-4a41-b816-839e4d893217.png')}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 114,
                    }}
                    source={require('./../../assets/images/edc03b3f-ded6-429a-aa0b-db9a56f241b0.png')}>
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
                        source={require('./../../assets/images/11a99989-c630-4834-9d38-938392589672.png')}
                      />
                    </View>
                  </ImageBackground>
                </ImageBackground>
              </ImageBackground>
              <Text
                style={{
                  display: 'flex',
                  height: '37.33%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 28,
                  fontWeight: '700',
                  lineHeight: 41.897,
                  color: '#030303',
                  position: 'absolute',
                  top: '62.67%',
                  left: '9.52%',
                  textAlign: 'left',
                  zIndex: 4,
                }}
                numberOfLines={1}>
                Set Post Expiry
              </Text>
            </View>
            <ImageBackground
              style={{
                width: 348.733,
                height: 259.364,
                position: 'relative',
                zIndex: 8,
                marginTop: 121.2,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 25.633,
              }}
              source={require('./../../assets/images/abcb7e86-4423-4715-8486-92a8b9ee73ed.png')}>
              <View
                style={{
                  display: 'flex',
                  width: 320.533,
                  height: 34.914,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 13,
                  marginTop: 8.48,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 17.033,
                }}>
                <View
                  style={{
                    width: 59.733,
                    height: 19.951,
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 13,
                  }}>
                  <View
                    style={{
                      width: 41.6,
                      height: 43.892,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 14,
                      marginTop: -0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}>
                    <Text
                      style={{
                        height: 23.941,
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        lineHeight: 23.941,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 15,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Date
                    </Text>
                    <Text
                      style={{
                        height: 23.941,
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        lineHeight: 23.941,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 16,
                        marginTop: -3.99,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Date
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  style={{
                    width: 87.4,
                    height: 35.914,
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 12,
                  }}
                  source={require('./../../assets/images/81936c12-b242-46f6-897e-bb7ac4635c34.png')}>
                  <View
                    style={{
                      width: '36.61%',
                      height: '55.55%',
                      position: 'absolute',
                      top: '22.22%',
                      left: '19.49%',
                      zIndex: 17,
                    }}>
                    <View
                      style={{
                        width: 24.533,
                        height: 40.899,
                        fontSize: 0,
                        position: 'relative',
                        zIndex: 18,
                        marginTop: 1,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}>
                      <Text
                        style={{
                          height: 20.948,
                          fontFamily: 'Poppins',
                          fontSize: 14,
                          fontWeight: '700',
                          lineHeight: 20.948,
                          color: '#030303',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 19,
                          marginTop: 0,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                        numberOfLines={1}>
                        Ma
                      </Text>
                      <Text
                        style={{
                          height: 20.948,
                          fontFamily: 'Poppins',
                          fontSize: 14,
                          fontWeight: '700',
                          lineHeight: 20.948,
                          color: '#030303',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 20,
                          marginTop: -1,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                        numberOfLines={1}>
                        y
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '14.65%',
                      height: '33.33%',
                      position: 'absolute',
                      top: '33.33%',
                      left: '68.31%',
                      overflow: 'hidden',
                      zIndex: 21,
                    }}>
                    <ImageBackground
                      style={{
                        width: 7.997,
                        height: 4.83,
                        position: 'relative',
                        zIndex: 22,
                        marginTop: 3.571,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2.399,
                      }}
                      source={require('./../../assets/images/0ea10042-b566-4e17-a9a6-ddcf69522a96.png')}
                    />
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  width: 314.667,
                  height: 18.455,
                  position: 'relative',
                  zIndex: 45,
                  marginTop: 16.459,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 17.033,
                }}>
                <View
                  style={{
                    width: '5.42%',
                    height: '86.49%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 23,
                  }}>
                  <View
                    style={{
                      width: 17.067,
                      height: 33.916,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 24,
                      marginTop: 0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 25,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3.2,
                      }}
                      numberOfLines={1}>
                      M
                    </Text>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 26,
                        marginTop: -1.995,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      on
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '5.42%',
                    height: '86.49%',
                    position: 'absolute',
                    top: 0,
                    left: '15.59%',
                    zIndex: 31,
                  }}>
                  <View
                    style={{
                      width: 16,
                      height: 33.916,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 32,
                      marginTop: 0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.067,
                    }}>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 33,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Tu
                    </Text>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 34,
                        marginTop: -1.995,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3.2,
                      }}
                      numberOfLines={1}>
                      e
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '5.42%',
                    height: '86.49%',
                    position: 'absolute',
                    top: 0,
                    left: '31.53%',
                    zIndex: 35,
                  }}>
                  <View
                    style={{
                      width: 17.067,
                      height: 33.916,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 36,
                      marginTop: 0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 37,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2.133,
                      }}
                      numberOfLines={1}>
                      W
                    </Text>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 38,
                        marginTop: -1.995,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      ed
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '5.42%',
                    height: '86.49%',
                    position: 'absolute',
                    top: 0,
                    left: '47.12%',
                    zIndex: 39,
                  }}>
                  <View
                    style={{
                      width: 16,
                      height: 33.916,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 40,
                      marginTop: 0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.067,
                    }}>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 41,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Th
                    </Text>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 42,
                        marginTop: -1.995,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3.2,
                      }}
                      numberOfLines={1}>
                      u
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '5.42%',
                    height: '86.49%',
                    position: 'absolute',
                    top: 0,
                    left: '78.64%',
                    zIndex: 45,
                  }}>
                  <View
                    style={{
                      width: 17.067,
                      height: 33.916,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 46,
                      marginTop: 0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 47,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Sa
                    </Text>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 48,
                        marginTop: -1.995,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 6.4,
                      }}
                      numberOfLines={1}>
                      t
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '5.42%',
                    height: '86.49%',
                    position: 'absolute',
                    top: 0,
                    left: '94.58%',
                    zIndex: 27,
                  }}>
                  <View
                    style={{
                      width: 16,
                      height: 33.916,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 28,
                      marginTop: 0.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.067,
                    }}>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
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
                      Su
                    </Text>
                    <Text
                      style={{
                        height: 17.956,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 17.956,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 30,
                        marginTop: -1.995,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3.2,
                      }}
                      numberOfLines={1}>
                      n
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    height: '97.3%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 17.956,
                    color: '#030303',
                    position: 'absolute',
                    top: '2.7%',
                    left: '63.39%',
                    textAlign: 'left',
                    zIndex: 44,
                  }}
                  numberOfLines={1}>
                  Fri
                </Text>
              </View>
              <Text
                style={{
                  height: 17.956,
                  fontFamily: 'Poppins',
                  fontSize: 12,
                  fontWeight: '700',
                  lineHeight: 17.956,
                  color: '#848484',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 50,
                  marginTop: 9.975,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 321.033,
                }}
                numberOfLines={1}>
                1
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 305.067,
                  height: 17.956,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 64,
                  marginTop: 9.976,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 22.367,
                }}>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 64,
                  }}
                  numberOfLines={1}>
                  2
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 62,
                  }}
                  numberOfLines={1}>
                  3
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 60,
                  }}
                  numberOfLines={1}>
                  4
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 58,
                  }}
                  numberOfLines={1}>
                  5
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 56,
                  }}
                  numberOfLines={1}>
                  6
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 54,
                  }}
                  numberOfLines={1}>
                  7
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 52,
                  }}
                  numberOfLines={1}>
                  8
                </Text>
              </View>
              <View
                style={{
                  width: 309.333,
                  height: 25.936,
                  position: 'relative',
                  zIndex: 78,
                  marginTop: 4.489,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 21.3,
                }}>
                <ImageBackground
                  style={{
                    width: '8.97%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '44.83%',
                    zIndex: 10,
                  }}
                  source={require('./../../assets/images/ee33a48d-bbed-4d32-ad60-79ef7d4cfaa0.png')}>
                  <Text
                    style={{
                      display: 'flex',
                      height: '69.23%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '700',
                      lineHeight: 17.956,
                      color: '#ffffff',
                      position: 'absolute',
                      top: '21.15%',
                      left: '26.92%',
                      textAlign: 'left',
                      zIndex: 70,
                    }}
                    numberOfLines={1}>
                    12
                  </Text>
                </ImageBackground>
                <Text
                  style={{
                    display: 'flex',
                    height: '69.23%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'absolute',
                    top: '21.15%',
                    left: 0,
                    textAlign: 'left',
                    zIndex: 76,
                  }}
                  numberOfLines={1}>
                  9
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    height: '69.23%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'absolute',
                    top: '21.15%',
                    left: '15.17%',
                    textAlign: 'left',
                    zIndex: 74,
                  }}
                  numberOfLines={1}>
                  10
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    height: '69.23%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'absolute',
                    top: '21.15%',
                    left: '32.07%',
                    textAlign: 'left',
                    zIndex: 72,
                  }}
                  numberOfLines={1}>
                  11
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    height: '69.23%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'absolute',
                    top: '21.15%',
                    left: '63.45%',
                    textAlign: 'left',
                    zIndex: 78,
                  }}
                  numberOfLines={1}>
                  13
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    height: '69.23%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'absolute',
                    top: '21.15%',
                    left: '79.31%',
                    textAlign: 'left',
                    zIndex: 68,
                  }}
                  numberOfLines={1}>
                  14
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    height: '69.23%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'absolute',
                    top: '21.15%',
                    left: '95.52%',
                    textAlign: 'left',
                    zIndex: 66,
                  }}
                  numberOfLines={1}>
                  15
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 311.467,
                  height: 17.956,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 92,
                  marginTop: 7.482,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 19.167,
                }}>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 88,
                  }}
                  numberOfLines={1}>
                  16
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 86,
                  }}
                  numberOfLines={1}>
                  17
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 84,
                  }}
                  numberOfLines={1}>
                  18
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 82,
                  }}
                  numberOfLines={1}>
                  19
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 92,
                  }}
                  numberOfLines={1}>
                  20
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 90,
                  }}
                  numberOfLines={1}>
                  21
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 80,
                  }}
                  numberOfLines={1}>
                  22
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 313.6,
                  height: 17.956,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 110,
                  marginTop: 9.975,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 18.1,
                }}>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 102,
                  }}
                  numberOfLines={1}>
                  23
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 98,
                  }}
                  numberOfLines={1}>
                  24
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 96,
                  }}
                  numberOfLines={1}>
                  25
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 94,
                  }}
                  numberOfLines={1}>
                  26
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 110,
                  }}
                  numberOfLines={1}>
                  27
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 108,
                  }}
                  numberOfLines={1}>
                  28
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 106,
                  }}
                  numberOfLines={1}>
                  29
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 62.933,
                  height: 17.956,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 104,
                  marginTop: 9.976,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 18.1,
                }}>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 104,
                  }}
                  numberOfLines={1}>
                  30
                </Text>
                <Text
                  style={{
                    height: 17.956,
                    flexShrink: 0,
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '700',
                    lineHeight: 17.956,
                    color: '#848484',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 100,
                  }}
                  numberOfLines={1}>
                  31
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              style={{
                width: 348.8,
                height: 51.872,
                position: 'relative',
                zIndex: 112,
                marginTop: 166.212,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 27,
              }}
              source={require('./../../assets/images/02c6da64-8874-4d3d-b3a5-3556f1501a4d.png')}>
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
                  zIndex: 113,
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
                zIndex: 127,
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
                  zIndex: 120,
                }}
                source={require('./../../assets/images/cf3c26ce-b223-40ae-8aa6-e26eca960957.png')}>
                <View
                  style={{
                    width: 15,
                    height: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 121,
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
                      zIndex: 122,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/5b30278b-2317-476e-bf8f-b70fc3ce456a.png')}
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
                  zIndex: 118,
                }}
                source={require('./../../assets/images/7aa792b5-67b8-4ef4-9c6e-66e284d21dc7.png')}
              />
              <View
                style={{
                  width: '6%',
                  height: '44.44%',
                  position: 'absolute',
                  top: '26.67%',
                  left: '21.01%',
                  overflow: 'hidden',
                  zIndex: 127,
                }}>
                <ImageBackground
                  style={{
                    width: 19.999,
                    height: 20.002,
                    position: 'relative',
                    zIndex: 128,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/4ab8e879-6e2d-403e-a9ed-370d6efb2422.png')}
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
                  zIndex: 116,
                }}>
                <ImageBackground
                  style={{
                    width: 19.2,
                    height: 18.017,
                    position: 'relative',
                    zIndex: 117,
                    marginTop: 2.252,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/8fabdf51-1491-468f-8ea8-788a4e79679c.png')}
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
                  zIndex: 123,
                }}>
                <View
                  style={{
                    width: '104.17%',
                    height: '88.81%',
                    position: 'absolute',
                    top: '-0.29%',
                    left: '-1.74%',
                    overflow: 'hidden',
                    zIndex: 125,
                  }}>
                  <ImageBackground
                    style={{
                      width: 17.5,
                      height: 19.999,
                      position: 'relative',
                      zIndex: 126,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.25,
                    }}
                    source={require('./../../assets/images/9d62c538-f312-43bf-9f57-ae4d89f82371.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '87.5%',
                    height: '99.99%',
                    position: 'absolute',
                    top: 0,
                    left: '6.25%',
                    zIndex: 124,
                  }}
                  source={require('./../../assets/images/aaf6facb-42e0-44b1-97a4-2478f19e2de3.png')}
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
              source={require('./../../assets/images/45820d96-523c-4408-9b09-58c4461e7f9a.png')}
            />
            <ImageBackground
              style={{
                width: '100%',
                height: '8.63%',
                position: 'absolute',
                top: '91.38%',
                left: '0.25%',
                zIndex: 115,
              }}
              source={require('./../../assets/images/36b7098b-2801-4e7b-973d-a60546db2bcc.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RequestExpiry;
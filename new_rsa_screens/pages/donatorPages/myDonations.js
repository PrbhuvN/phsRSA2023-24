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
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class MyDonations extends React.Component {
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
                width: 400,
                height: 812,
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  width: 234.667,
                  height: 43.826,
                  position: 'relative',
                  zIndex: 30,
                  marginTop: 22,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 82,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 31,
                  }}>
                  <Text
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 24,
                      fontWeight: '700',
                      lineHeight: 36,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      textAlign: 'center',
                      overflow: 'hidden',
                      zIndex: 32,
                    }}
                    numberOfLines={1}>
                    My Donations{'\n'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 244,
                  height: 42,
                  position: 'relative',
                  zIndex: 61,
                  marginTop: 5.174,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 68,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 62,
                  }}>
                  <Text
                    style={{
                      display: 'flex',
                      width: 44,
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 21,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: '5.74%',
                      textAlign: 'left',
                      zIndex: 64,
                    }}>
                    Active{'\n'}
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: '50%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 21,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: '80.33%',
                      textAlign: 'left',
                      zIndex: 65,
                    }}
                    numberOfLines={1}>
                    History
                  </Text>
                  <ImageBackground
                    style={{
                      width: '32.79%',
                      height: '11.9%',
                      position: 'absolute',
                      top: '46.43%',
                      left: '-1.02%',
                      zIndex: 63,
                    }}
                    source={require('./../../assets/images/6a86a768-5e6a-4abc-afe1-1fad761a2caa.png')}
                  />
                </View>
              </View>
              <ImageBackground
                style={{
                  width: 335,
                  height: 265,
                  position: 'relative',
                  zIndex: 109,
                  marginTop: -4,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 32,
                }}
                source={require('./../../assets/images/142cb9cd-a355-4941-8ce7-50acd34a0e41.png')}>
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 132,
                  }}
                  source={require('./../../assets/images/b7d4d8cb-f17b-4dbb-9151-232bcb33dbac.png')}>
                  <View
                    style={{
                      width: 303,
                      height: 32,
                      position: 'relative',
                      zIndex: 134,
                      marginTop: 16,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 16,
                    }}>
                    <ImageBackground
                      style={{
                        width: '10.56%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 117,
                      }}
                      source={require('./../../assets/images/16b7d894-c31e-4685-aa14-e58e567144f5.png')}>
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: '-3.13%',
                          left: '-3.13%',
                          zIndex: 119,
                        }}
                        source={require('./../../assets/images/7b72e876-7cd7-4828-82b7-d5695a8a5231.png')}>
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '-3.13%',
                            left: '-3.13%',
                            zIndex: 140,
                          }}
                          source={require('./../../assets/images/881d456e-cb09-407c-89a6-e2ab313f23b9.png')}>
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: '-3.13%',
                              left: '-3.13%',
                              zIndex: 142,
                            }}
                            source={require('./../../assets/images/131ae457-2c86-4cbe-863a-d38fb46ce329.png')}
                          />
                        </ImageBackground>
                      </ImageBackground>
                    </ImageBackground>
                    <Text
                      style={{
                        display: 'flex',
                        height: '56.25%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'absolute',
                        top: '26.56%',
                        left: '13.2%',
                        textAlign: 'left',
                        zIndex: 111,
                      }}
                      numberOfLines={1}>
                      Charlotte Food&nbsp;
                    </Text>
                    <Text
                      style={{
                        display: 'flex',
                        height: '56.25%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'absolute',
                        top: '26.56%',
                        left: '13.2%',
                        textAlign: 'left',
                        zIndex: 134,
                      }}
                      numberOfLines={1}>
                      Charlotte Food&nbsp;
                    </Text>
                    <View
                      style={{
                        width: '4.62%',
                        height: '43.75%',
                        position: 'absolute',
                        top: '28.13%',
                        left: '95.38%',
                        overflow: 'hidden',
                        zIndex: 114,
                      }}>
                      <ImageBackground
                        style={{
                          width: 11.813,
                          height: 3.063,
                          position: 'relative',
                          zIndex: 115,
                          marginTop: 5.469,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 1.094,
                        }}
                        source={require('./../../assets/images/78fd667c-0f06-4d8d-9091-65cf753d36c0.png')}
                      />
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          overflow: 'hidden',
                          zIndex: 137,
                        }}>
                        <ImageBackground
                          style={{
                            width: 11.813,
                            height: 3.063,
                            position: 'relative',
                            zIndex: 138,
                            marginTop: 5.469,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 1.094,
                          }}
                          source={require('./../../assets/images/b1e1d37a-140e-44b4-9dcf-d35d66e640cf.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <ImageBackground
                    style={{
                      width: 303,
                      height: 126,
                      position: 'relative',
                      zIndex: 113,
                      marginTop: 13,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 16,
                    }}
                    source={require('./../../assets/images/786c9c56-94bf-4801-9f1f-e74a2a5bb1f5.png')}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 136,
                      }}
                      source={require('./../../assets/images/d36b9af7-3c57-49e7-85b0-5cf357209304.png')}
                    />
                  </ImageBackground>
                  <View
                    style={{
                      width: 139,
                      height: 18,
                      position: 'relative',
                      zIndex: 144,
                      marginTop: 6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 16,
                    }}>
                    <Text
                      style={{
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        textAlign: 'left',
                        zIndex: 121,
                      }}
                      numberOfLines={1}>
                      Lots of Cans for Pick Up
                    </Text>
                    <Text
                      style={{
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        textAlign: 'left',
                        zIndex: 144,
                      }}
                      numberOfLines={1}>
                      Lots of Cans for Pick Up
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 303,
                      height: 38,
                      position: 'relative',
                      zIndex: 149,
                      marginTop: 3,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 16,
                    }}>
                    <ImageBackground
                      style={{
                        width: '21.45%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: '78.55%',
                        zIndex: 130,
                      }}
                      source={require('./../../assets/images/5afa0759a1a140b788029c6f2a6eff999ef6e112.png')}
                      resizeMode="cover">
                      <View
                        style={{
                          width: 24,
                          height: 24,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 127,
                          marginTop: 4,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 32,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            overflow: 'hidden',
                            zIndex: 150,
                          }}
                        />
                      </View>
                    </ImageBackground>
                    <View
                      style={{
                        width: '34.32%',
                        height: '47.37%',
                        position: 'absolute',
                        top: '21.05%',
                        left: '7.92%',
                        zIndex: 122,
                      }}>
                      <View
                        style={{
                          width: 77,
                          height: 36,
                          fontSize: 0,
                          position: 'relative',
                          zIndex: 123,
                          marginTop: 1.5,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}>
                        <Text
                          style={{
                            height: 18,
                            fontFamily: 'Poppins',
                            fontSize: 12,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#030303',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 124,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          numberOfLines={1}>
                          Chat With Us
                        </Text>
                        <Text
                          style={{
                            height: 18,
                            fontFamily: 'Poppins',
                            fontSize: 12,
                            fontWeight: '400',
                            lineHeight: 18,
                            color: '#030303',
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 125,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          numberOfLines={1}>
                          community
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 145,
                        }}>
                        <View
                          style={{
                            width: 77,
                            height: 36,
                            fontSize: 0,
                            position: 'relative',
                            zIndex: 146,
                            marginTop: 1.5,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}>
                          <Text
                            style={{
                              height: 18,
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              fontWeight: '400',
                              lineHeight: 18,
                              color: '#030303',
                              position: 'relative',
                              textAlign: 'left',
                              zIndex: 147,
                              marginTop: 0,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0,
                            }}
                            numberOfLines={1}>
                            Chat With Us
                          </Text>
                          <Text
                            style={{
                              height: 18,
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              fontWeight: '400',
                              lineHeight: 18,
                              color: '#030303',
                              position: 'relative',
                              textAlign: 'left',
                              zIndex: 148,
                              marginTop: 0,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0,
                            }}
                            numberOfLines={1}>
                            community
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '5.28%',
                        height: '42.11%',
                        position: 'absolute',
                        top: '23.68%',
                        left: 0,
                        overflow: 'hidden',
                        zIndex: 128,
                      }}>
                      <ImageBackground
                        style={{
                          width: 16,
                          height: 12.8,
                          position: 'relative',
                          zIndex: 129,
                          marginTop: 1.6,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                        source={require('./../../assets/images/39968e98-5b18-4087-a748-db514ebe8081.png')}
                      />
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          overflow: 'hidden',
                          zIndex: 151,
                        }}>
                        <ImageBackground
                          style={{
                            width: 16,
                            height: 12.8,
                            position: 'relative',
                            zIndex: 152,
                            marginTop: 1.6,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          source={require('./../../assets/images/c17ff593-bbe7-4642-acd4-d0f2a953dc74.png')}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        display: 'flex',
                        height: '47.37%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'absolute',
                        top: '25%',
                        left: '7.92%',
                        textAlign: 'left',
                        zIndex: 126,
                      }}
                      numberOfLines={1}>
                      Chat With Us
                    </Text>
                    <Text
                      style={{
                        display: 'flex',
                        height: '47.37%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'absolute',
                        top: '25%',
                        left: '7.92%',
                        textAlign: 'left',
                        zIndex: 149,
                      }}
                      numberOfLines={1}>
                      Chat With Us
                    </Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
              <View
                style={{
                  width: 335,
                  height: 265,
                  position: 'relative',
                  zIndex: 107,
                  marginTop: 18,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 32,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 66,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 67,
                    }}
                    source={require('./../../assets/images/2f2ae354-0569-4dec-803f-3ea09b349940.png')}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 87,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 88,
                    }}
                    source={require('./../../assets/images/e7af8677-5504-4fe3-acd1-7bdacf88da55.png')}
                  />
                </View>
                <View
                  style={{
                    width: '9.55%',
                    height: '12.08%',
                    position: 'absolute',
                    top: '6.04%',
                    left: '4.78%',
                    zIndex: 74,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 75,
                    }}
                    source={require('./../../assets/images/27c92f75-5e09-44ef-91ac-16e088883e0f.png')}
                  />
                </View>
                <View
                  style={{
                    width: '9.55%',
                    height: '12.08%',
                    position: 'absolute',
                    top: '6.04%',
                    left: '4.78%',
                    zIndex: 95,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 96,
                    }}
                    source={require('./../../assets/images/bde19b3f-3d2b-47c6-ba83-39fc5c8c5ca4.png')}
                  />
                </View>
                <View
                  style={{
                    width: '20.6%',
                    height: '13.58%',
                    position: 'absolute',
                    top: '9.25%',
                    left: '16.72%',
                    zIndex: 68,
                  }}>
                  <Text
                    style={{
                      display: 'flex',
                      width: 69,
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      textAlign: 'left',
                      zIndex: 69,
                    }}>
                    Food For All{'\n'}
                  </Text>
                </View>
                <View
                  style={{
                    width: '20.6%',
                    height: '13.58%',
                    position: 'absolute',
                    top: '9.25%',
                    left: '16.72%',
                    zIndex: 89,
                  }}>
                  <Text
                    style={{
                      display: 'flex',
                      width: 69,
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      textAlign: 'left',
                      zIndex: 90,
                    }}>
                    Food For All{'\n'}
                  </Text>
                </View>
                <View
                  style={{
                    width: '4.18%',
                    height: '5.28%',
                    position: 'absolute',
                    top: '9.43%',
                    left: '91.04%',
                    overflow: 'hidden',
                    zIndex: 72,
                  }}>
                  <ImageBackground
                    style={{
                      width: 11.813,
                      height: 3.063,
                      position: 'relative',
                      zIndex: 73,
                      marginTop: 5.469,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.094,
                    }}
                    source={require('./../../assets/images/85aea1dd-b47d-4662-a0f5-4b626077ddae.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.18%',
                    height: '5.28%',
                    position: 'absolute',
                    top: '9.43%',
                    left: '91.04%',
                    overflow: 'hidden',
                    zIndex: 93,
                  }}>
                  <ImageBackground
                    style={{
                      width: 11.813,
                      height: 3.063,
                      position: 'relative',
                      zIndex: 94,
                      marginTop: 5.469,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.094,
                    }}
                    source={require('./../../assets/images/825962d7-a09e-4792-8c60-a56ac3109c3b.png')}
                  />
                </View>
                <View
                  style={{
                    width: '90.45%',
                    height: '47.55%',
                    position: 'absolute',
                    top: '23.02%',
                    left: '4.78%',
                    zIndex: 70,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 71,
                    }}
                    source={require('./../../assets/images/11146212-54e6-4ef0-8435-6a7b3c4344a5.png')}
                  />
                </View>
                <View
                  style={{
                    width: '90.45%',
                    height: '47.55%',
                    position: 'absolute',
                    top: '23.02%',
                    left: '4.78%',
                    zIndex: 91,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 92,
                    }}
                    source={require('./../../assets/images/d03eeb72-7be7-4f30-b615-9916dde35b6d.png')}
                  />
                </View>
                <View
                  style={{
                    width: '62.99%',
                    height: '6.79%',
                    position: 'absolute',
                    top: '72.83%',
                    left: '4.78%',
                    zIndex: 76,
                  }}>
                  <Text
                    style={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      textAlign: 'left',
                      zIndex: 77,
                    }}
                    numberOfLines={1}>
                    Lots of Fresh Vegetables for Pick Up
                  </Text>
                </View>
                <View
                  style={{
                    width: '62.99%',
                    height: '6.79%',
                    position: 'absolute',
                    top: '72.83%',
                    left: '4.78%',
                    zIndex: 97,
                  }}>
                  <Text
                    style={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#030303',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      textAlign: 'left',
                      zIndex: 98,
                    }}
                    numberOfLines={1}>
                    Lots of Fresh Vegetables for Pick Up
                  </Text>
                </View>
                <ImageBackground
                  style={{
                    width: '19.4%',
                    height: '14.34%',
                    position: 'absolute',
                    top: '80.75%',
                    left: '75.82%',
                    zIndex: 86,
                  }}
                  source={require('./../../assets/images/5afa0759a1a140b788029c6f2a6eff999ef6e112.png')}
                  resizeMode="cover"
                />
                <ImageBackground
                  style={{
                    width: '19.4%',
                    height: '14.34%',
                    position: 'absolute',
                    top: '80.75%',
                    left: '75.82%',
                    zIndex: 107,
                  }}
                  source={require('./../../assets/images/5afa0759a1a140b788029c6f2a6eff999ef6e112.png')}
                  resizeMode="cover"
                />
                <View
                  style={{
                    width: '7.16%',
                    height: '9.06%',
                    position: 'absolute',
                    top: '82.26%',
                    left: '85.37%',
                    overflow: 'hidden',
                    zIndex: 83,
                  }}
                />
                <View
                  style={{
                    width: '7.16%',
                    height: '9.06%',
                    position: 'absolute',
                    top: '82.26%',
                    left: '85.37%',
                    overflow: 'hidden',
                    zIndex: 104,
                  }}
                />
                <View
                  style={{
                    width: '31.04%',
                    height: '6.79%',
                    position: 'absolute',
                    top: '83.77%',
                    left: '11.94%',
                    zIndex: 78,
                  }}>
                  <View
                    style={{
                      width: 77,
                      height: 36,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 79,
                      marginTop: 1.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}>
                    <Text
                      style={{
                        height: 18,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 80,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Chat With Us
                    </Text>
                    <Text
                      style={{
                        height: 18,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 81,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      community
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '31.04%',
                    height: '6.79%',
                    position: 'absolute',
                    top: '83.77%',
                    left: '11.94%',
                    zIndex: 99,
                  }}>
                  <View
                    style={{
                      width: 77,
                      height: 36,
                      fontSize: 0,
                      position: 'relative',
                      zIndex: 100,
                      marginTop: 1.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}>
                    <Text
                      style={{
                        height: 18,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 101,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      Chat With Us
                    </Text>
                    <Text
                      style={{
                        height: 18,
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 18,
                        color: '#030303',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 102,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      numberOfLines={1}>
                      community
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '4.78%',
                    height: '6.04%',
                    position: 'absolute',
                    top: '84.15%',
                    left: '4.78%',
                    overflow: 'hidden',
                    zIndex: 84,
                  }}>
                  <ImageBackground
                    style={{
                      width: 16,
                      height: 12.8,
                      position: 'relative',
                      zIndex: 85,
                      marginTop: 1.6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/896a7314-5503-4cf4-8da4-1904ffa16390.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.78%',
                    height: '6.04%',
                    position: 'absolute',
                    top: '84.15%',
                    left: '4.78%',
                    overflow: 'hidden',
                    zIndex: 105,
                  }}>
                  <ImageBackground
                    style={{
                      width: 16,
                      height: 12.8,
                      position: 'relative',
                      zIndex: 106,
                      marginTop: 1.6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/af152fea-2e95-4a34-af08-86c767f83f4f.png')}
                  />
                </View>
                <Text
                  style={{
                    display: 'flex',
                    height: '6.79%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: '84.34%',
                    left: '11.94%',
                    textAlign: 'left',
                    zIndex: 82,
                  }}
                  numberOfLines={1}>
                  Chat With Us
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    height: '6.79%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#030303',
                    position: 'absolute',
                    top: '84.34%',
                    left: '11.94%',
                    textAlign: 'left',
                    zIndex: 103,
                  }}
                  numberOfLines={1}>
                  Chat With Us
                </Text>
              </View>
              <View
                style={{
                  width: 333.2,
                  height: 45,
                  position: 'relative',
                  zIndex: 59,
                  marginTop: 97.065,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 44.333,
                }}>
                <View
                  style={{
                    width: '13.51%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '42.02%',
                    zIndex: 6,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 7,
                    }}
                    source={require('./../../assets/images/76bc1e35-8bcb-45d6-ad95-a4bb80d20de9.png')}
                  />
                </View>
                <View
                  style={{
                    width: '13.51%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '42.02%',
                    zIndex: 20,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 21,
                    }}
                    source={require('./../../assets/images/13048fc0-fe69-4c30-9163-a5a849735c2b.png')}
                  />
                </View>
                <View
                  style={{
                    width: '13.51%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '42.02%',
                    zIndex: 37,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 38,
                    }}
                    source={require('./../../assets/images/92c68f87-921a-40e9-aee0-566c5bdcd161.png')}
                  />
                </View>
                <View
                  style={{
                    width: '13.51%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '42.02%',
                    zIndex: 51,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 52,
                    }}
                    source={require('./../../assets/images/5e9c32c9-98cc-4e51-b3c6-93536b463457.png')}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: '5.76%',
                    height: '50.05%',
                    position: 'absolute',
                    top: '26.67%',
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 5,
                  }}
                  source={require('./../../assets/images/ccccddce-94a5-47c0-85d6-e06087d1a04e.png')}
                />
                <ImageBackground
                  style={{
                    width: '5.76%',
                    height: '50.05%',
                    position: 'absolute',
                    top: '26.67%',
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 19,
                  }}
                  source={require('./../../assets/images/8e55c97c-732c-4d5a-9eb2-32f15ec9503b.png')}
                />
                <ImageBackground
                  style={{
                    width: '5.76%',
                    height: '50.05%',
                    position: 'absolute',
                    top: '26.67%',
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 36,
                  }}
                  source={require('./../../assets/images/8f586d1e-f5b4-42c5-92bd-582e35bf7f68.png')}
                />
                <ImageBackground
                  style={{
                    width: '5.76%',
                    height: '50.05%',
                    position: 'absolute',
                    top: '26.67%',
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 50,
                  }}
                  source={require('./../../assets/images/423252dc-15ff-4683-a52f-85438b6f271e.png')}
                />
                <View
                  style={{
                    width: '6%',
                    height: '44.44%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '21.01%',
                    overflow: 'hidden',
                    zIndex: 14,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.999,
                      height: 20.002,
                      position: 'relative',
                      zIndex: 15,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/1449c62b-7898-4eea-ac29-e45ea9628a7c.png')}
                  />
                </View>
                <View
                  style={{
                    width: '6%',
                    height: '44.44%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '21.01%',
                    overflow: 'hidden',
                    zIndex: 28,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.999,
                      height: 20.002,
                      position: 'relative',
                      zIndex: 29,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/aceb3b39-8542-4f26-8cde-5b39fe93d102.png')}
                  />
                </View>
                <View
                  style={{
                    width: '6%',
                    height: '44.44%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '21.01%',
                    overflow: 'hidden',
                    zIndex: 45,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.999,
                      height: 20.002,
                      position: 'relative',
                      zIndex: 46,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/8d63532f-706f-4fd2-9297-016e4bfe19e2.png')}
                  />
                </View>
                <View
                  style={{
                    width: '6%',
                    height: '44.44%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '21.01%',
                    overflow: 'hidden',
                    zIndex: 59,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.999,
                      height: 20.002,
                      position: 'relative',
                      zIndex: 60,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/dee2eecf-1c21-4e11-8b07-a25012911fb6.png')}
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
                    zIndex: 3,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.2,
                      height: 18.017,
                      position: 'relative',
                      zIndex: 4,
                      marginTop: 2.252,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/b5208885-1a28-486a-9c1f-90d049e33551.png')}
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
                    zIndex: 17,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.2,
                      height: 18.017,
                      position: 'relative',
                      zIndex: 18,
                      marginTop: 2.252,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/2579d15e-cffd-4ef5-a96b-a6847ba8c494.png')}
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
                    zIndex: 34,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.2,
                      height: 18.017,
                      position: 'relative',
                      zIndex: 35,
                      marginTop: 2.252,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/f18b704b-6002-4086-b693-131ed7b8c687.png')}
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
                    zIndex: 48,
                  }}>
                  <ImageBackground
                    style={{
                      width: 19.2,
                      height: 18.017,
                      position: 'relative',
                      zIndex: 49,
                      marginTop: 2.252,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                    source={require('./../../assets/images/1e413ae5-2a7e-4d95-9938-688ed123e2d4.png')}
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
                    zIndex: 10,
                  }}>
                  <View
                    style={{
                      width: '104.17%',
                      height: '88.81%',
                      position: 'absolute',
                      top: '-0.29%',
                      left: '-1.74%',
                      overflow: 'hidden',
                      zIndex: 12,
                    }}>
                    <ImageBackground
                      style={{
                        width: 17.5,
                        height: 19.999,
                        position: 'relative',
                        zIndex: 13,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.25,
                      }}
                      source={require('./../../assets/images/cdeed2dc-94c3-441f-a836-41ae13574ab3.png')}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: '87.5%',
                      height: '99.99%',
                      position: 'absolute',
                      top: 0,
                      left: '6.25%',
                      zIndex: 11,
                    }}
                    source={require('./../../assets/images/f2281343-f712-421d-bd35-b9764d33bcfb.png')}
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
                    zIndex: 24,
                  }}>
                  <View
                    style={{
                      width: '104.17%',
                      height: '88.81%',
                      position: 'absolute',
                      top: '-0.29%',
                      left: '-1.74%',
                      overflow: 'hidden',
                      zIndex: 26,
                    }}>
                    <ImageBackground
                      style={{
                        width: 17.5,
                        height: 19.999,
                        position: 'relative',
                        zIndex: 27,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.25,
                      }}
                      source={require('./../../assets/images/4d5f1187-40b5-439e-8c47-2a21cf09b031.png')}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: '87.5%',
                      height: '99.99%',
                      position: 'absolute',
                      top: 0,
                      left: '6.25%',
                      zIndex: 25,
                    }}
                    source={require('./../../assets/images/907dfd1b-9c72-4536-96d4-eec2d1adc479.png')}
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
                    zIndex: 41,
                  }}>
                  <View
                    style={{
                      width: '104.17%',
                      height: '88.81%',
                      position: 'absolute',
                      top: '-0.29%',
                      left: '-1.74%',
                      overflow: 'hidden',
                      zIndex: 43,
                    }}>
                    <ImageBackground
                      style={{
                        width: 17.5,
                        height: 19.999,
                        position: 'relative',
                        zIndex: 44,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.25,
                      }}
                      source={require('./../../assets/images/d640e4d9-80cd-4c25-823d-8c33deee8d4d.png')}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: '87.5%',
                      height: '99.99%',
                      position: 'absolute',
                      top: 0,
                      left: '6.25%',
                      zIndex: 42,
                    }}
                    source={require('./../../assets/images/f669c8a2-2b90-40ad-9191-a04e0b6e8cc1.png')}
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
                    zIndex: 55,
                  }}>
                  <View
                    style={{
                      width: '104.17%',
                      height: '88.81%',
                      position: 'absolute',
                      top: '-0.29%',
                      left: '-1.74%',
                      overflow: 'hidden',
                      zIndex: 57,
                    }}>
                    <ImageBackground
                      style={{
                        width: 17.5,
                        height: 19.999,
                        position: 'relative',
                        zIndex: 58,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.25,
                      }}
                      source={require('./../../assets/images/363a03f9-674b-47e4-90ca-697012f5e741.png')}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: '87.5%',
                      height: '99.99%',
                      position: 'absolute',
                      top: 0,
                      left: '6.25%',
                      zIndex: 56,
                    }}
                    source={require('./../../assets/images/5bc1a9bd-d44c-40a9-bebb-724366473fba.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.5%',
                    height: '35.56%',
                    position: 'absolute',
                    top: '31.11%',
                    left: '46.52%',
                    overflow: 'hidden',
                    zIndex: 8,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 9,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/53b71dda-a6e7-469f-8cd2-5c89459a98c9.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.5%',
                    height: '35.56%',
                    position: 'absolute',
                    top: '31.11%',
                    left: '46.52%',
                    overflow: 'hidden',
                    zIndex: 22,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 23,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/0dd6ab01-52de-47c1-bdf7-2820bb096ca3.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.5%',
                    height: '35.56%',
                    position: 'absolute',
                    top: '31.11%',
                    left: '46.52%',
                    overflow: 'hidden',
                    zIndex: 39,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 40,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/434b5974-73f4-4d07-a59d-aa29b4c5ce1b.png')}
                  />
                </View>
                <View
                  style={{
                    width: '4.5%',
                    height: '35.56%',
                    position: 'absolute',
                    top: '31.11%',
                    left: '46.52%',
                    overflow: 'hidden',
                    zIndex: 53,
                  }}>
                  <ImageBackground
                    style={{
                      width: 13.125,
                      height: 14,
                      position: 'relative',
                      zIndex: 54,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.94,
                    }}
                    source={require('./../../assets/images/1d114545-1ea1-4909-a1e6-3d7c3f0c91d4.png')}
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
                  zIndex: 1,
                }}
                source={require('./../../assets/images/95c2385f-9ce4-4ecc-a749-da392ac6f0b5.png')}
              />
              <ImageBackground
                style={{
                  width: '100%',
                  height: '8.63%',
                  position: 'absolute',
                  top: '91.38%',
                  left: 0,
                  zIndex: 2,
                }}
                source={require('./../../assets/images/7415a75c-7ebd-42ee-945f-a70d6fd3b568.png')}
              />
              <ImageBackground
                style={{
                  width: '100%',
                  height: '8.63%',
                  position: 'absolute',
                  top: '91.38%',
                  left: 0,
                  zIndex: 16,
                }}
                source={require('./../../assets/images/a752e366-b2ee-46e5-a9d5-2b1a2d4dace5.png')}
              />
              <ImageBackground
                style={{
                  width: '100%',
                  height: '8.63%',
                  position: 'absolute',
                  top: '91.38%',
                  left: 0,
                  zIndex: 33,
                }}
                source={require('./../../assets/images/4b3ec458-198c-47a4-82bb-439435815a82.png')}
              />
              <ImageBackground
                style={{
                  width: '100%',
                  height: '8.63%',
                  position: 'absolute',
                  top: '91.38%',
                  left: 0,
                  zIndex: 47,
                }}
                source={require('./../../assets/images/bac87df8-6981-46a3-85c4-e738a4bf88a1.png')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MyDonations;

<TouchableOpacity>
              <View
                style={{
                  width: 'auto',
                  height: 60,
                  position: 'relative',
                  zIndex: 39,
                  marginTop: 95.154,
                  marginRight: 0,
                  marginBottom: 0,
                  paddingBottom:'auto',
                  backgroundColor:'#ffffff',

                }}>
                  
                <ImageBackground
                  style={{
                    width: '35.51%',
                    height: '90%',
                    position: 'absolute',
                    top: 5,
                    left: '42.02%',
                    zIndex: 32,
                    
                  }}
                  source={require('./../../assets/images/89fe0b11-8a45-4872-8bc5-16b971726c3d.png')}
                  //circle for the bar
                  > 
                  
                  <View
                    style={{
                      width: 15,
                      height: 16,
                      position: 'relative',
                      
                      zIndex: 33,
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
                        
                        marginTop: 4.5,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 4,
                      }}
                      source={require('./../../assets/images/b2bf878b-69a0-4ccc-a0f3-be491088a261.png')}
                      //plus sign
                    />
                  </View>
                </ImageBackground>
                
                <ImageBackground
                  style={{
                    width: '25.76%',
                    height: '80.05%',
                    position: 'absolute',
                    top: 13,
                    left: 20,
                    
                    zIndex: 30,
                  }}
                  source={require('./../../assets/images/243c3b2b-03a7-4c79-803f-3503300cb756.png')}
                  //house icon
                />
                
                <View
                  style={{
                    width: '6%',
                    height: '44.44%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '21.01%',
                    
                    
                  }}>
                    
                  <ImageBackground
                    style={{
                      width: 22.999,
                      height: 22.502,
                      position: 'relative',
                      
                      marginTop: 5.5,
                      marginRight: 0,
                      marginBottom: 5,
                      marginLeft: 10,
                    }}
                    source={require('./../../assets/images/ee9c6fa5-0847-415c-860b-4c416fdc4e4c.png')}
                    //search icon
                  />
                  
                </View>
                
                <View
                  style={{
                    width: '5.76%',
                    height: '50.05%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '72.03%',
                    
                    zIndex: 28,
                  }}>
                    
                  <ImageBackground
                    style={{
                      width: 24.2,
                      height: 23.017,
                      position: 'relative',
                      
                      marginTop: 5,
                      marginRight: 20,
                      marginBottom: 0,
                      marginLeft: -10,
                    }}
                    source={require('./../../assets/images/0a1a6dce-6539-44ae-b9e1-46bdff0674d5.png')}
                    //chatpage icon
                  />
                </View>
                
                <View
                  style={{
                    width: '5.76%',
                    height: '50.05%',
                    position: 'absolute',
                    top: '26.67%',
                    left: '94.24%',
                    
                    zIndex: 35,
                  }}>
                  <View
                    style={{
                      width: '104.17%',
                      height: '88.81%',
                      position: 'absolute',
                      top: '-0.29%',
                      left: '-1.74%',
                    
                      zIndex: 37,
                    }}>
                    <ImageBackground
                      style={{
                        width: 17.5,
                        height: 19.999,
                        position: 'relative',
                        zIndex: 38,
                        marginTop: 5,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.25,
                      }}
                      source={require('./../../assets/images/0b6f69f2-1210-4181-a512-61883267a849.png')}
                      //account pfp
                    />
                  </View>
                  
                </View>
              </View>
              </TouchableOpacity>
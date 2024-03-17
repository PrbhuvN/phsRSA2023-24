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

class DriverMainPage extends React.Component {
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
              source={require('./../../assets/images/b9f598ee-26b7-4229-b91c-877c01b0a4d6.png')}>
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
                source={require('./../../assets/images/892dc96d-ccec-426b-a379-49badc1aa955.png')}>
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
                    zIndex: 2,
                    marginTop: 25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 61,
                  }}
                  numberOfLines={1}>
                  Welcome Back Driver!
                </Text>
                <Text
                  style={{
                    height: 36,
                    fontFamily: 'Poppins',
                    fontSize: 24,
                    fontWeight: '500',
                    lineHeight: 36,
                    color: '#030303',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 3,
                    marginTop: 37,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 24,
                  }}
                  numberOfLines={1}>
                  Current Delivery
                </Text>
                <View
                  style={{
                    width: 341,
                    height: 265,
                    position: 'relative',
                    zIndex: 28,
                    marginTop: 7,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 24,
                  }}>
                  <ImageBackground
                    style={{
                      width: '98.24%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 5,
                    }}
                    source={require('./../../assets/images/fab7f793-6648-4f0b-9bd8-06146e8bdb72.png')}
                  />
                  <ImageBackground
                    style={{
                      width: '98.24%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: '1.76%',
                      zIndex: 28,
                    }}
                    source={require('./../../assets/images/b63143dd-a656-425d-8231-bdca5e4636b5.png')}>
                    <View
                      style={{
                        width: 303,
                        height: 32,
                        position: 'relative',
                        zIndex: 30,
                        marginTop: 16,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 10,
                      }}>
                      <ImageBackground
                        style={{
                          width: '10.56%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 13,
                        }}
                        source={require('./../../assets/images/9bb8da01-cd5e-4206-bac0-b8d7166057bb.png')}>
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '-3.13%',
                            left: '-3.13%',
                            zIndex: 15,
                          }}
                          source={require('./../../assets/images/260bdcf4-fb85-4174-a548-0b60b8fe990e.png')}>
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: '-3.13%',
                              left: '-3.13%',
                              zIndex: 36,
                            }}
                            source={require('./../../assets/images/742325bf-d926-4bef-bbc7-64a826109e95.png')}>
                            <ImageBackground
                              style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: '-3.13%',
                                left: '-3.13%',
                                zIndex: 38,
                              }}
                              source={require('./../../assets/images/1472b7ec-c479-453a-a831-0ad2a9863b01.png')}
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
                          zIndex: 7,
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
                          zIndex: 30,
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
                          zIndex: 10,
                        }}>
                        <ImageBackground
                          style={{
                            width: 11.813,
                            height: 3.063,
                            position: 'relative',
                            zIndex: 11,
                            marginTop: 5.469,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 1.094,
                          }}
                          source={require('./../../assets/images/52f7a745-2db1-440a-8e48-4471a63b44e5.png')}
                        />
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            overflow: 'hidden',
                            zIndex: 33,
                          }}>
                          <ImageBackground
                            style={{
                              width: 11.813,
                              height: 3.063,
                              position: 'relative',
                              zIndex: 34,
                              marginTop: 5.469,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 1.094,
                            }}
                            source={require('./../../assets/images/35333ce3-da05-4436-9154-71d006af1e64.png')}
                          />
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: 303,
                        height: 126,
                        position: 'relative',
                        zIndex: 9,
                        marginTop: 13,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 10,
                      }}
                      source={require('./../../assets/images/3b2e6af9-3809-438a-8fbe-275091fc6c89.png')}>
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 32,
                        }}
                        source={require('./../../assets/images/3e7581b5-4107-40ac-b105-9e802ab0b69e.png')}
                      />
                    </ImageBackground>
                    <View
                      style={{
                        width: 139,
                        height: 18,
                        position: 'relative',
                        zIndex: 40,
                        marginTop: 6,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 10,
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
                          zIndex: 17,
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
                          zIndex: 40,
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
                        zIndex: 45,
                        marginTop: 3,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 10,
                      }}>
                      <ImageBackground
                        style={{
                          width: '21.45%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '78.55%',
                          zIndex: 26,
                        }}
                        source={require('./../../assets/images/5afa0759a1a140b788029c6f2a6eff999ef6e112.png')}
                        resizeMode="cover">
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 49,
                          }}
                          source={require('./../../assets/images/5afa0759a1a140b788029c6f2a6eff999ef6e112.png')}
                          resizeMode="cover">
                          <View
                            style={{
                              width: 24,
                              height: 24,
                              position: 'relative',
                              overflow: 'hidden',
                              zIndex: 23,
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
                                zIndex: 46,
                              }}
                            />
                          </View>
                        </ImageBackground>
                      </ImageBackground>
                      <View
                        style={{
                          width: '34.32%',
                          height: '47.37%',
                          position: 'absolute',
                          top: '21.05%',
                          left: '7.92%',
                          zIndex: 18,
                        }}>
                        <View
                          style={{
                            width: 77,
                            height: 36,
                            fontSize: 0,
                            position: 'relative',
                            zIndex: 19,
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
                              zIndex: 20,
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
                              zIndex: 21,
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
                            zIndex: 41,
                          }}>
                          <View
                            style={{
                              width: 77,
                              height: 36,
                              fontSize: 0,
                              position: 'relative',
                              zIndex: 42,
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
                                zIndex: 43,
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
                                zIndex: 44,
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
                          zIndex: 24,
                        }}>
                        <ImageBackground
                          style={{
                            width: 16,
                            height: 12.8,
                            position: 'relative',
                            zIndex: 25,
                            marginTop: 1.6,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          source={require('./../../assets/images/185c0263-7199-4798-a287-a0972ffaeae0.png')}
                        />
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            overflow: 'hidden',
                            zIndex: 47,
                          }}>
                          <ImageBackground
                            style={{
                              width: 16,
                              height: 12.8,
                              position: 'relative',
                              zIndex: 48,
                              marginTop: 1.6,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0,
                            }}
                            source={require('./../../assets/images/c60200ed-f1bc-4707-b607-9d3f3235382f.png')}
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
                          zIndex: 22,
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
                          zIndex: 45,
                        }}
                        numberOfLines={1}>
                        Chat With Us
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <ImageBackground
                  style={{
                    width: 348.8,
                    height: 51.872,
                    position: 'relative',
                    zIndex: 51,
                    marginTop: 36,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 24,
                  }}
                  source={require('./../../assets/images/ad8e9c68-ed3a-4379-bf82-a0523e72516a.png')}>
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
                      zIndex: 52,
                    }}
                    numberOfLines={1}>
                    View Other Requests{'\n'}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  style={{
                    width: 395,
                    height: 70.065,
                    position: 'relative',
                    zIndex: 53,
                    marginTop: 248.128,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./../../assets/images/ed13cf37-33b0-4d27-9ecb-590d9a3452ed.png')}>
                  <ImageBackground
                    style={{
                      width: '11.39%',
                      height: '64.23%',
                      position: 'absolute',
                      top: '17.22%',
                      left: '46.92%',
                      zIndex: 58,
                    }}
                    source={require('./../../assets/images/0b189e77-968d-4152-bd99-9eca44c4a970.png')}>
                    <View
                      style={{
                        width: 15,
                        height: 16,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 59,
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
                          zIndex: 60,
                          marginTop: 1,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0.94,
                        }}
                        source={require('./../../assets/images/95301c48-9322-4b6b-a5fa-2519aa6fd99d.png')}
                      />
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      width: '4.86%',
                      height: '32.14%',
                      position: 'absolute',
                      top: '34.35%',
                      left: '72.24%',
                      overflow: 'hidden',
                      zIndex: 54,
                    }}>
                    <ImageBackground
                      style={{
                        width: 19.2,
                        height: 18.017,
                        position: 'relative',
                        zIndex: 55,
                        marginTop: 2.252,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      source={require('./../../assets/images/0d0e0c85-4a62-4a57-8561-a6a797602e8d.png')}
                    />
                  </View>
                  <ImageBackground
                    style={{
                      width: '4.86%',
                      height: '32.14%',
                      position: 'absolute',
                      top: '34.35%',
                      left: '11.48%',
                      overflow: 'hidden',
                      zIndex: 56,
                    }}
                    source={require('./../../assets/images/11346edd-972a-4e19-93e7-1189b19bc9a0.png')}
                  />
                  <View
                    style={{
                      width: '5.06%',
                      height: '28.55%',
                      position: 'absolute',
                      top: '34.35%',
                      left: '29.2%',
                      overflow: 'hidden',
                      zIndex: 65,
                    }}>
                    <ImageBackground
                      style={{
                        width: 19.999,
                        height: 20.002,
                        position: 'relative',
                        zIndex: 66,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      }}
                      source={require('./../../assets/images/57c02731-e0e2-47eb-8ba3-0951b8ddf50e.png')}
                    />
                  </View>
                  <View
                    style={{
                      width: '4.86%',
                      height: '32.14%',
                      position: 'absolute',
                      top: '38.63%',
                      left: '90.72%',
                      overflow: 'hidden',
                      zIndex: 61,
                    }}>
                    <View
                      style={{
                        width: '104.17%',
                        height: '88.81%',
                        position: 'absolute',
                        top: '-0.29%',
                        left: '-1.74%',
                        overflow: 'hidden',
                        zIndex: 63,
                      }}>
                      <ImageBackground
                        style={{
                          width: 17.5,
                          height: 19.999,
                          position: 'relative',
                          zIndex: 64,
                          marginTop: 0,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 1.25,
                        }}
                        source={require('./../../assets/images/fddc56fe-722c-4c56-9673-d0ce274bf682.png')}
                      />
                    </View>
                    <ImageBackground
                      style={{
                        width: '87.5%',
                        height: '99.99%',
                        position: 'absolute',
                        top: 0,
                        left: '6.25%',
                        zIndex: 62,
                      }}
                      source={require('./../../assets/images/8b3b8ceb-94db-428f-bd28-0b676cfb1f9e.png')}
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

export default DriverMainPage;
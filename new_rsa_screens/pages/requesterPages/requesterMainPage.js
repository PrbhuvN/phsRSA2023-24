import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class RequesterDonorMainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  createRequest = () => {
    console.log('big boy');
    this.props.navigation.navigate('Request Info');
  }

  render() {
    console.log(this.props.route.params);
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
                
                  <Button
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
                      zIndex: 42,
                    }}
                    onPress={this.createRequest}
                    numberOfLines={1}
                    title='Create New Request'
                  >
                  </Button>
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
                <BottomBar navigation={this.props.navigation} driver={true} />
                </ImageBackground>
              </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RequesterDonorMainPage
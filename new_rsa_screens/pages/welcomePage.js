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

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoRequest = () => {
    this.props.navigation.navigate('Requester Navigation');
  };

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
              source={require('./../assets/images/0bc50c50-293c-4ab8-a4d7-b2fcbc49fc91.png')}>
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
                  zIndex: 26,
                  marginTop: 159,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 109,
                }}
                numberOfLines={1}>
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
                  marginTop: 58,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 35,
                }}>
                <TouchableOpacity
                onPress={this.gotoRequest}>
                  <ImageBackground
                  style={{
                    width: 148.267,
                    height: 173.911,
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 3,
                  }}
                  source={require('./../assets/images/db07b773-7648-4e9b-b001-e5646bb5e8fa.png')}>
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
                    source={require('./../assets/images/4a561c3c-51fd-4355-a27f-c30ae23d6eb4.png')}>
                    <View
                      style={{
                        width: 61.392,
                        height: 58.228,
                        position: 'relative',
                        
                        zIndex: 8,
                        marginTop: 17.386,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 18.304,
                      }}>
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
                        source={require('./../assets/images/656bc1af-bdd5-4438-adad-deeec4bf1df9.png')}
                      />
                    </View>
                  </ImageBackground>
                  <TouchableOpacity
                    onPress={this.gotoRequest}>
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
                    numberOfLines={1}>
                    Request
                  </Text>
                  </TouchableOpacity>
                </ImageBackground></TouchableOpacity>
                <TouchableOpacity>
                <ImageBackground
                  style={{
                    width: 148.267,
                    height: 173.911,
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 11,
                  }}
                  source={require('./../assets/images/9f30fdb5-6b06-467b-bd98-5c0fce20b498.png')}>
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
                    source={require('./../assets/images/78bec720-9ef2-4e8b-9247-ef8cf82d17c9.png')}>
                    <View
                      style={{
                        width: 62.035,
                        height: 57.767,
                        position: 'relative',
                        
                        zIndex: 16,
                        marginTop: 18.686,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 17.419,
                      }}>
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
                        source={require('./../assets/images/11945dcd-c44a-4ba8-a019-ed5a3e45f02e.png')}
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
                    numberOfLines={1}>
                    Distribute
                  </Text>
                </ImageBackground>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
              <ImageBackground
                style={{
                  width: 148.267,
                  height: 173.911,
                  position: 'relative',
                  zIndex: 19,
                  marginTop: 27.089,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 123,
                  
                }}
                source={require('./../assets/images/a52698e9-2bff-49b7-b7da-d202079e477c.png')}>
                <ImageBackground
                  style={{
                    width: 98,
                    height: 93,
                    position: 'relative',
                    zIndex: 23,
                    marginTop: 19.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 24.5,
                  }}
                  source={require('./../assets/images/35b359b1-396f-4a77-8adb-4839ed0348f0.png')}>
                  <View
                    style={{
                      width: 61.392,
                      height: 58.228,
                      position: 'relative',
                      
                      zIndex: 24,
                      marginTop: 17.386,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 18.304,
                    }}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100.01%',
                        position: 'absolute',
                        top: 0,
                        left: '0%',
                        zIndex: 25,
                      }}
                      source={require('./../assets/images/5c30c2d1-a487-4b9f-a4fd-34addf39b249.png')}
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
                    zIndex: 21,
                    marginTop: 21.5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 48,
                  }}
                  numberOfLines={1}>
                  Deliver
                </Text>
              </ImageBackground>
              </TouchableOpacity>
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
                  source={require('./../assets/images/89fe0b11-8a45-4872-8bc5-16b971726c3d.png')}
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
                      source={require('./../assets/images/b2bf878b-69a0-4ccc-a0f3-be491088a261.png')}
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
                  source={require('./../assets/images/243c3b2b-03a7-4c79-803f-3503300cb756.png')}
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
                    source={require('./../assets/images/ee9c6fa5-0847-415c-860b-4c416fdc4e4c.png')}
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
                    source={require('./../assets/images/0a1a6dce-6539-44ae-b9e1-46bdff0674d5.png')}
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
                      source={require('./../assets/images/0b6f69f2-1210-4181-a512-61883267a849.png')}
                      //account pfp
                    />
                  </View>
                  
                </View>
              </View>
              </TouchableOpacity>
            </ImageBackground>
            
            
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default WelcomePage;
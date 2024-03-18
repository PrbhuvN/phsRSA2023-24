import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          width: 'auto',
          height: 60,
          position: 'relative',
          zIndex: 39,
          marginTop: 95.154,
          marginRight: 0,
          marginBottom: 0,
          paddingBottom: 'auto',
          backgroundColor: '#ffffff',
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
          source={require('./assets/images/89fe0b11-8a45-4872-8bc5-16b971726c3d.png')}
          //circle for the bar
        >
          <TouchableOpacity>
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
                onPress={this.props.navigation.navigate('Donor Navigation', {
                  screen: 'Donation Info'
                })}
                source={require('./assets/images/b2bf878b-69a0-4ccc-a0f3-be491088a261.png')}
                //plus sign
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <TouchableOpacity>
          <ImageBackground
            style={{
              width: '25.76%',
              height: '80.05%',
              position: 'relative',
              top: 16,
              left: 20,

              zIndex: 30,
            }}
            onPress={() => {
              if (this.props.driver)
              {
                this.props.navigation.navigate('Driver Navigation', {
                  screen: 'Main Page'
                });
              }
              else
              {
                this.props.navigation.navigate('Authentication', {
                  screen: 'Welcome Page'
                });
              }
            }
            }
            source={require('./assets/images/243c3b2b-03a7-4c79-803f-3503300cb756.png')}
            //house icon
          />
        </TouchableOpacity>

        <TouchableOpacity>
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

                marginTop: -28,
                marginRight: 0,
                marginBottom: 5,
                marginLeft: 10,
              }}
              onPress={() => {
                this.props.navigation.navigate('Donor Navigation', {
                  screen: 'My Donations'
                });
              }}
              source={require('./assets/images/ee9c6fa5-0847-415c-860b-4c416fdc4e4c.png')}
              //search icon
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
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

                marginTop: -27,
                marginRight: 20,
                marginBottom: 0,
                marginLeft: -10,
              }}
              onPress={this.props.navigation.navigate('Support Navigation', {
                screen: 'Chat Page'
              })}
              source={require('./assets/images/0a1a6dce-6539-44ae-b9e1-46bdff0674d5.png')}
              //chatpage icon
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: '5.76%',
            height: '50.05%',
            position: 'absolute',
            top: '26.67%',
            left: '94.24%',

            zIndex: 35,
          }}>
          <TouchableOpacity>
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
                onPress={this.props.navigation.navigate('Support Navigation', {
                  screen: 'Help Page'
                })}
                source={require('./assets/images/0b6f69f2-1210-4181-a512-61883267a849.png')}
                //account pfp
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BottomBar;

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, getData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';

export default function Splash({ navigation }) {

  const img = new Animated.Value(0.7);
  const txt = new Animated.Value(0.5);


  useEffect(() => {

    Animated.timing(txt, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,

    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(img, {
          toValue: 0.8,
          duration: 1500,
          useNativeDriver: true

        }),
        Animated.timing(img, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true
        })
      ]),
      {
        iterations: 50
      }
    ).start();




    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          navigation.replace('Login')
        } else {
          // navigation.replace('GetStarted')
          navigation.replace('MainApp')
        }
      })
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 0,
      backgroundColor: colors.background,
      justifyContent: 'center',
      position: 'relative'

    }}>


      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


      }}>
        <ImageBackground style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Animated.Image
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            style={{
              width: windowWidth / 1.2,
              height: windowWidth / 1.2,
              transform: [
                { scale: img },
                { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
              ]
            }}
          />


          <ActivityIndicator color={colors.primary} size="large" />
        </ImageBackground>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

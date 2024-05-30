import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(0.7);

  const masuk = () => {
    if (kirim.username == null && kirim.password == null) {
      showMessage({
        message: 'username dan Password tidak boleh kosong !'
      })

    } else if (kirim.username == null) {
      showMessage({
        message: 'username tidak boleh kosong !'
      })

    } else if (kirim.password == null) {
      showMessage({
        message: 'Password tidak boleh kosong !'
      })

    } else {
      setLoading(true);
      console.log(kirim);
      axios.post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('MainApp')
          }
        });
    }
  }

  useEffect(() => {

    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();






    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, position: "relative" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{
          marginTop: '20%'
        }}>
          <Animated.Image source={require('../../assets/logo.png')} style={{
            marginTop: 10,
            width: windowWidth / 1.3,
            height: windowWidth / 2.5,
            resizeMode: 'contain',
            alignSelf: "center"
          }} />

          <View style={{
            margin: 20,
            borderWidth: 1,
            backgroundColor: colors.white,
            borderColor: colors.border,
            elevation: 0.2,
            borderRadius: 10,
            padding: 20,
          }}>
            <Text style={{
              textAlign: 'center',
              color: colors.primary,
              fontFamily: fonts.primary[600],
              fontSize: 24,
            }}>Login</Text>

            <MyInput label="Username" iconname='at' placeholder="Masukan username" onChangeText={x => {
              setKirim({
                ...kirim,
                username: x
              })
            }} />
            <MyGap jarak={20} />
            <MyInput label="Password" secureTextEntry={true} iconname='lock-closed-outline' placeholder="Masukan username" onChangeText={x => {
              setKirim({
                ...kirim,
                password: x
              })
            }} />
            <MyGap jarak={20} />

            {!loading && <MyButton title="Login" Icons="log-in-outline" onPress={masuk} />}
            {loading && <ActivityIndicator size="large" color={colors.primary} />}
          </View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
            <Text style={{
              fontFamily: fonts.primary[400],
              fontSize: 15,
              color: colors.primary,
              textAlign: 'center'
            }}>Belum memiliki akun? <Text style={{
              color: colors.secondary,
              fontFamily: fonts.primary[600]
            }}>Register</Text></Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

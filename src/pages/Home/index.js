import { Alert, StyleSheet, Text, View, Animated, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';
import ProgressCircle from 'react-native-progress-circle'
export default function Home({ navigation, route }) {
  const img = new Animated.Value(0.9);


  const [user, setUser] = useState({});
  const isFocus = useIsFocused();

  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const [loading, setLoading] = useState(true);


  const DATA = [
    {
      image: require('../../assets/a1.png'),
      judul: 'Peta Daerah Rawan Kecelakaan',
      menu: 'Formulir',
      keterangan: 'Peta Daerah Rawan Kecelakaan Lalu Lintas di Kota Yogyakarta',
    },
    {
      image: require('../../assets/a2.png'),
      judul: 'Peta Sebaran Kejadian Kecelakaan',
      menu: 'Formulir',
      keterangan: 'Peta Sebaran Kejadian Kecelakaan Lalu Lintas di Kota Yogyakarta Tahun 2019-2023',
    },
    {
      image: require('../../assets/a3.png'),
      judul: 'Peta Lokasi Fasilitas Kesehatan & Ambulan',
      menu: 'Formulir',
      keterangan: 'Peta Lokasi Fasilitas Kesehatan & Ambulan di Kota Yogyakarta',
    },
    {
      image: require('../../assets/a4.png'),
      judul: 'Daftar Fasilitas Kesehatan & Ambulan',
      menu: 'Faskes',
      keterangan: 'Daftar Lokasi Ambulan & Fasilitas Kesehatan Terdekat'
    },
    {
      image: require('../../assets/a5.png'),
      judul: 'Stakeholder Terkait',
      menu: 'Stakeholder',
      keterangan: 'Stakeholder Terkait Kejadian Kecelakaan Lalu Lintas'
    },
    {
      image: require('../../assets/a6.png'),
      judul: 'Panduan Penanganan Kecelakaan',
      menu: 'PdfApp'
    },
    {
      image: require('../../assets/a7.png'),
      judul: 'Panduan Berkendara',
      menu: 'PdfApp'
    },
    {
      image: require('../../assets/a8.png'),
      judul: 'Formulir Pelaporan Kecelakaan',
      menu: 'Formulir',
      keterangan: 'Formulir Pelaporan Kejadian Kecelakaan Lalu Lintas',
    },
  ]

  const _getTransaction = async () => {



    getData('user').then(u => {
      setUser(u);

    })




  }


  useEffect(() => {

    Animated.timing(img, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();


    axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });


    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const [lokasi, setLokasi] = useState({
    lat: 0,
    long: 0
  })




  return (

    <View style={{
      flex: 1,
      width: "100%",
      height: "100%",



    }}>

      {/* HEADERS */}
      <View style={{
        backgroundColor: colors.primary,
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
        <Text style={{
          fontFamily: fonts.primary[600],
          color: colors.white,
          fontSize: 20,
        }}>Selamat datang !</Text>
        <Text style={{
          fontFamily: fonts.primary[400],
          fontSize: 12,
          color: colors.white,

        }}>
          Sistem Informasi Daerah Rawan Kecelakaan Lalu Lintas Terintegrasi Kota Yogyakarta
        </Text>
      </View>


      <ScrollView style={{

        backgroundColor: colors.background,

      }}>
        <Image source={require('../../assets/logo.png')} style={{
          height: 120,
          resizeMode: 'contain',
          alignSelf: 'center'
        }} />

        <FlatList data={DATA} numColumns={2} renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(item.menu, item)}>
              <View style={{
                marginVertical: 5,
                width: windowWidth / 2,
                height: windowWidth / 2.2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
                <View style={{
                  padding: 10,
                  backgroundColor: colors.secondary,
                  width: windowWidth / 3.5,
                  height: windowWidth / 3.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                }}>
                  <Image source={item.image} style={{
                    width: windowWidth / 6,
                    height: windowWidth / 6
                  }} />
                </View>
                <Text style={{
                  maxWidth: '90%',
                  fontFamily: fonts.primary[600],
                  color: colors.primary,
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 10,
                }}>{item.judul}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }} />
      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})
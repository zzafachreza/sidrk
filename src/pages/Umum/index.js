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
export default function Umum({ navigation, route }) {


    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <MyHeader judul="Tentang" />
            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
            }}>
                <Image source={require('../../assets/logo.png')} style={{

                    height: 120,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                }} />
                <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: 12,
                    textAlign: 'justify',
                    color: colors.primary,
                }}>SIDRK merupakan purwarupa aplikasi Sistem Informasi Daerah Rawan Kecelakaan Lalu Lintas Terintegrasi Kota Yogyakarta yang berbasis android. {'\n'}{'\n'}SIDRK merupakan integrasi informasi terkait daerah rawan kecelakaan lalu lintas dan informasi terkait tanggap darurat kecelakaan lalu lintas. {'\n'}{'\n'}SIDRK mempunyai beberapa fitur antara lain Peta Daerah Rawan Kecelakaan Lalu Lintas di Kota Yogyakarta, Rute Penanganan Kecelakaan Lalu Lintas di Kota Yogyakarta , Peta Lokasi Fasilitas Kesehatan & Ambulance di Kota Yogyakarta , Daftar Lokasi Ambulan & Fasilitas Kesehatan Terdekat , Stake Holder Terkait Kejadian Kecelakaan Lalu Lintas , Panduan Penanganan Kecelakaan Lalu Lintas, Tips Berkendara Yang Berkeselamatan, Form Pelaporan Kejadian Kecelakaan Lalu Lintas. {'\n'}{'\n'}Aplikasi SIDRK masih bersifat purwarupa untuk kepentingan penelitian dalam bentuk perancangan sistem informasi yang akan diuji coba. Diharapkan, aplikasi ini dapat bermanfaat bagi masyarakat dan stakeholder terkait untuk menurunkan angka potensi terjadinya kecelakaan lalu lintas dan dapat menurunkan risiko fatalitas pada korban kecelakaan melalui tindakan tanggap darurat yang dapat dilakukan dalam waktu yang lebih singkat.</Text>
            </ScrollView>
        </SafeAreaView>

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
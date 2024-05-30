import { ActivityIndicator, Animated, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import Intl from "intl";
import 'intl/locale-data/jsonp/id-ID'
import { MyHeader, MyInput } from '../../components';
import { WebView } from 'react-native-webview';
export default function Formulir({ navigation, route }) {
    const item = route.params;
    console.log(item)
    const img = new Animated.Value(0.9);

    useEffect(() => {


        Animated.loop(
            Animated.sequence([
                Animated.timing(img, {
                    toValue: 0.9,
                    duration: 1000,
                    useNativeDriver: true

                }),
                Animated.timing(img, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                })
            ]),
            {
                iterations: 50
            }
        ).start();


    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background
        }}>
            <MyHeader judul={item.judul} onPress={() => navigation.goBack()} />

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: fonts.primary[600],
                    color: colors.primary,
                    marginTop: '20%',
                    maxWidth: '80%',
                    fontSize: 20,
                    textAlign: 'center'
                }}>{item.keterangan}</Text>

                <TouchableOpacity onPress={() => navigation.navigate('WebApp', item)}>
                    <Animated.Image source={item.image} style={{
                        width: windowWidth / 1.5,
                        height: windowHeight / 1.5,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        transform: [
                            { scale: img },
                            { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
                        ]
                    }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
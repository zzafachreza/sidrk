import { ActivityIndicator, Animated, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
import axios from 'axios';
import { apiURL, webURL } from '../../utils/localStorage'
import { showMessage } from 'react-native-flash-message'
import RenderHtml from 'react-native-render-html';
import moment from 'moment'

export default function Hasil({ navigation, route }) {
    const item = route.params;

    const img = new Animated.Value(0.8);

    useEffect(() => {


        Animated.loop(
            Animated.sequence([
                Animated.timing(img, {
                    toValue: 0.8,
                    duration: 800,
                    useNativeDriver: true

                }),
                Animated.timing(img, {
                    toValue: 1,
                    duration: 800,
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
            backgroundColor: colors.white
        }}>
            <MyHeader judul="Hasil Skrining Serangan Jantung" onPress={() => navigation.goBack()} />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 20, }}>Skor Anda</Text>
                <Text style={{ fontFamily: fonts.primary[800], fontSize: 100, }}>{item.nilai}</Text>

                <View style={{
                    padding: 10,
                    width: windowWidth / 1.5,
                    borderRadius: 10,
                    backgroundColor: colors.primary
                }}>
                    <Text style={{
                        color: colors.white,
                        fontFamily: fonts.primary[600],
                        fontSize: 20,
                        textAlign: 'center',
                    }}>{item.interprestasi}</Text>
                </View>

                <Text style={{
                    maxWidth: '80%',
                    marginTop: 10,
                    color: colors.black,
                    fontFamily: fonts.primary[400],
                    fontSize: 16,
                    textAlign: 'center',
                }}>{item.rekomendasi}</Text>

                <Animated.Image
                    source={require('../../assets/a1.png')}
                    resizeMode="contain"
                    style={{
                        marginTop: 20,
                        width: windowWidth / 3,
                        height: windowWidth / 3,
                        transform: [
                            { scale: img },
                            { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
                        ]
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
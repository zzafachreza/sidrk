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

export default function HitungHasil({ navigation, route }) {
    const item = route.params;

    const img = new Animated.Value(1);

    useEffect(() => {


        Animated.loop(
            Animated.sequence([
                Animated.timing(img, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true

                }),
                Animated.timing(img, {
                    toValue: 1.2,
                    duration: 1200,
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
            <MyHeader judul={'Hasil ' + item.judul} onPress={() => navigation.goBack()} />
            <View style={{
                flex: 1,

                alignItems: 'center'
            }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 20, }}>Kalkulator Obat-Obat High Alert
                    Menggunakan Syringe Pump</Text>


                <Animated.Image
                    source={{
                        uri: item.image
                    }}
                    resizeMode="contain"
                    style={{
                        marginVertical: 20,

                        width: windowWidth / 3,
                        height: windowWidth / 3,
                        transform: [
                            { scale: img },
                            { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
                        ]
                    }}
                />

                <View style={{
                    padding: 10,
                    width: windowWidth / 1.2,
                    borderWidth: 1,
                    margin: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderColor: colors.border,
                }}>
                    <Text style={{ fontFamily: fonts.primary[800], fontSize: 60, }}>{item.nilai} <Text style={{
                        fontSize: 20,
                        fontFamily: fonts.secondary[600]
                    }}>cc/jam</Text></Text>
                </View>




            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
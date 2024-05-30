import { Image, SafeAreaView, StyleSheet, Animated, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors, fonts, windowWidth } from '../../utils'

export default function GetStarted({ navigation }) {

    const img = new Animated.Value(0.7);

    useEffect(() => {
        Animated.timing(img, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,

        }).start();

    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Umum')}>
                <View style={{
                    flex: 1,
                    marginVertical: 5,
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        textAlign: 'center',
                        fontSize: 20,
                        color: colors.white,
                        marginBottom: 10,
                    }}>Masuk Sebagai:</Text>
                    <Animated.Image source={require('../../assets/g1.png')} style={{
                        width: windowWidth / 2,
                        height: windowWidth / 2,
                        transform: [{
                            scale: img
                        }],
                        resizeMode: 'contain'
                    }} />
                    <Text style={{
                        fontFamily: fonts.primary[800],
                        textAlign: 'center',
                        fontSize: 48,
                        color: colors.white,
                        marginBottom: 10,
                    }}>UMUM</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                <View style={{
                    flex: 1,
                    marginVertical: 5,
                    backgroundColor: colors.primary,
                    borderRadius: 10,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        textAlign: 'center',
                        fontSize: 20,
                        color: colors.white,
                        marginBottom: 10,
                    }}>Masuk Sebagai:</Text>
                    <Animated.Image source={require('../../assets/g2.png')} style={{
                        width: windowWidth / 2,
                        height: windowWidth / 2,
                        transform: [{
                            scale: img
                        }],
                        resizeMode: 'contain'
                    }} />
                    <Text style={{
                        fontFamily: fonts.primary[800],
                        textAlign: 'center',
                        fontSize: 48,
                        color: colors.white,
                        marginBottom: 10,
                    }}>NAKES</Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
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
import { Icon } from 'react-native-elements'

export default function Hasil({ navigation, route }) {
    const item = route.params;
    const [kirim, setKirim] = useState({
        dosis: '',
        berat_badan: '',
        sedia_obat: '',
        jumlah_pengencer: '',
        lama_pemberian: '',
    })
    const img = new Animated.Value(0.8);

    const sendServer = () => {
        console.log(kirim);
        let NILAI
        if (item.id == 1) {
            NILAI = (kirim.dosis * kirim.berat_badan * 60) / 5000;

        } else if (item.id == 2) {
            NILAI = (kirim.dosis * kirim.berat_badan * 60) / 4000;

        } else if (item.id == 3) {
            NILAI = (kirim.dosis * kirim.berat_badan * 60) / 80;

        } else if (item.id == 4) {
            NILAI = kirim.dosis / ((kirim.sedia_obat / kirim.jumlah_pengencer) * kirim.lama_pemberian);

        } else if (item.id == 5) {
            NILAI = (kirim.dosis * kirim.berat_badan * 60) / 200;

        }
        else if (item.id == 6) {
            NILAI = (kirim.dosis * 60) / 200;

        } else if (item.id == 7) {
            NILAI = (kirim.dosis * kirim.berat_badan * 60) / 1000;

        } else if (item.id == 8) {
            NILAI = (kirim.dosis * kirim.berat_badan * 60) / 20;

        } else if (item.id == 9) {
            NILAI = kirim.dosis / 0.4;

        }


        console.log(NILAI);
        navigation.navigate('HitungHasil', {
            judul: item.nama_obat,
            image: item.image,
            nilai: NILAI,
        })
    }

    useEffect(() => {


        Animated.loop(
            Animated.sequence([
                Animated.timing(img, {
                    toValue: 0.8,
                    duration: 500,
                    useNativeDriver: true

                }),
                Animated.timing(img, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                })
            ]),
            {
                iterations: 1
            }
        ).start();


    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader judul={item.nama_obat} onPress={() => navigation.goBack()} />
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 16,
                        textAlign: 'center',
                        maxWidth: '80%'
                    }}>Kalkulator Obat-Obat High Alert Menggunakan Syringe Pump</Text>

                    <Animated.Image
                        source={{
                            uri: item.image
                        }}
                        resizeMode="contain"
                        style={{

                            marginTop: 10,
                            alignSelf: 'center',
                            width: windowWidth / 3,
                            height: windowWidth / 3,
                            transform: [
                                { scale: img },
                                { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
                            ]
                        }}
                    />
                </View>

                {item.id == 1 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        berat_badan: x
                                    })
                                }} keyboardType='number-pad' label="Berat Badan (kg)" iconname="speedometer-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>5000</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 2 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        berat_badan: x
                                    })
                                }} keyboardType='number-pad' label="Berat Badan (kg)" iconname="speedometer-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>4000</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 3 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        berat_badan: x
                                    })
                                }} keyboardType='number-pad' label="Berat Badan (kg)" iconname="speedometer-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>80</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 4 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>


                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingBottom: 20,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        sedia_obat: x
                                    })
                                }} keyboardType='number-pad' label="Sediaan Obat (mg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        lama_pemberian: x
                                    })
                                }} keyboardType='number-pad' label="Lama Pemberian (jam)" iconname="time-outline" />
                            </View>

                        </View>
                        <View style={{
                            width: '45%',
                            borderTopWidth: 2,
                            borderTopColor: colors.border,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingBottom: 20,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        jumlah_pengencer: x
                                    })
                                }} keyboardType='number-pad' label="Jumlah pengencer (ml)" iconname="eyedrop-outline" />
                            </View>


                        </View>

                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 5 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        berat_badan: x
                                    })
                                }} keyboardType='number-pad' label="Berat Badan (kg)" iconname="speedometer-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>200</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 6 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>

                            <View style={{
                                paddingTop: 20,
                                flex: 1,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>200</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 7 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        berat_badan: x
                                    })
                                }} keyboardType='number-pad' label="Berat Badan (kg)" iconname="speedometer-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>1000</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 8 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        berat_badan: x
                                    })
                                }} keyboardType='number-pad' label="Berat Badan (kg)" iconname="speedometer-outline" />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Icon type='ionicon' name='close-outline' color={colors.border} size={40} />
                            </View>
                            <View style={{
                                paddingTop: 20,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 20,
                                    color: colors.primary,
                                }}>60</Text>
                            </View>
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>20 mcg</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
                {item.id == 9 &&
                    <View style={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            paddingBottom: 20,
                            borderBottomColor: colors.border,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <MyInput onChangeText={x => {
                                    setKirim({
                                        ...kirim,
                                        dosis: x
                                    })
                                }} keyboardType='number-pad' label="Dosis (mcg)" iconname="eyedrop-outline" />
                            </View>

                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>0,4 mg</Text>
                        <MyGap jarak={20} />
                        <MyButton onPress={sendServer} warna={colors.secondary} title="Hitung" Icons="aperture-outline" />
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
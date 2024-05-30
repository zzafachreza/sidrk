import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
import axios from 'axios';
import { apiURL, webURL } from '../../utils/localStorage'
import { showMessage } from 'react-native-flash-message'
import RenderHtml from 'react-native-render-html';
import moment from 'moment'
export default function ({ navigation, route }) {


    const [nilai, setNilai] = useState([]);

    const [soal, setSoal] = useState([])

    const sendData = () => {
        let ARR = [];
        soal.map(i => {
            ARR.push(parseFloat(i.nilai));
        });

        let NILAI = ARR.reduce((a, b) => a + b, 0);

        console.log(NILAI);
        let Interpretasi = '';
        let Rekomendasi = '';
        if (NILAI >= 0 && NILAI <= 5) {
            Interpretasi = 'Resiko Ringan';
            Rekomendasi = 'Pertahankan pola hidup sehat dan lakukan pemeriksaan kesehatan secara rutin';
        } else if (NILAI >= 6 && NILAI < 10) {
            Interpretasi = 'Resiko Sedang';
            Rekomendasi = 'Perbaikan gaya hidup dan pemeriksaan kesehatan rutin diperlukan jika gejala muncul, segera dapatkan bantuan medis';
        } else if (NILAI >= 10) {
            Interpretasi = 'Resiko Tinggi';
            Rekomendasi = 'Segera konsultasikan dengan dokter jantung di rumah sakit terdekat dan dapatkan tes serta perawatan yang diperlukan';
        }

        navigation.navigate('Hasil', {
            nilai: NILAI,
            interprestasi: Interpretasi,
            rekomendasi: Rekomendasi
        })
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        __getTransaction();
    }, []);


    const __getTransaction = () => {
        setLoading(true);
        axios.post(apiURL + 'kuis').then(res => {
            console.log(res.data);
            setSoal(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            // padding: 10,
        }}>
            <MyHeader judul="Skrining Serangan Jantung" onPress={() => navigation.goBack()} />

            {loading && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}

            {!loading && <View style={{
                flex: 1,
                padding: 10,
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList data={soal} renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                padding: 10,
                                borderWidth: 1,
                                marginVertical: 5,
                                borderRadius: 10,
                                borderColor: colors.border,
                            }}>
                                <View style={{
                                    flexDirection: 'row',

                                }}>
                                    <Text style={{
                                        flex: 0.05,
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                    }}>{item.nomor}. </Text>
                                    <Text style={{
                                        flex: 1,
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                    }}>{item.pertanyaan}</Text>
                                </View>

                                <View style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}>
                                    <TouchableOpacity onPress={() => {
                                        let tmp = [...soal];
                                        tmp[index].cek = 1;
                                        tmp[index].nilai = item.ya;
                                        setSoal(tmp);
                                    }} style={{
                                        width: windowWidth / 3,
                                        borderColor: item.cek == 1 ? colors.primary : colors.border,
                                        borderRadius: 10,
                                        padding: 5,
                                        backgroundColor: item.cek == 1 ? colors.primary : colors.white,
                                        borderWidth: 1,
                                    }}>
                                        <Text style={{
                                            color: item.cek == 1 ? colors.white : colors.black,
                                            textAlign: 'center',
                                            fontFamily: fonts.primary[600],
                                            fontSize: 14,
                                        }}>Ya</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        let tmp = [...soal];
                                        tmp[index].cek = 2;
                                        tmp[index].nilai = item.tidak;
                                        setSoal(tmp);
                                    }} style={{
                                        width: windowWidth / 3,
                                        borderColor: item.cek == 2 ? colors.primary : colors.border,
                                        borderRadius: 10,
                                        padding: 5,
                                        backgroundColor: item.cek == 2 ? colors.primary : colors.white,
                                        borderWidth: 1,
                                    }}>
                                        <Text style={{
                                            color: item.cek == 2 ? colors.white : colors.black,
                                            textAlign: 'center',
                                            fontFamily: fonts.primary[600],
                                            fontSize: 14,
                                        }}>Tidak</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }} />

                    <MyGap jarak={20} />
                    <MyButton Icons="download-outline" onPress={sendData} title="Simpan" />
                </ScrollView>
            </View>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
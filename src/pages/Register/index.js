import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts, windowWidth } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker, MyCalendar, MyCalendarSecond, MyHeader } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL, api_token, MYAPP } from '../../utils/localStorage';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Register({ navigation }) {




    const [loading, setLoading] = useState(false);
    const [sama, setSama] = useState(true)
    const [data, setData] = useState({
        api_token: api_token,
        username: '',
        nama_lengkap: '',
        telepon: '',
        password: '',
        repassword: '',


    });

    const register = () => {


        console.log(data);
        if (
            data.nama_lengkap.length === 0 &&
            data.username.length === 0 &&
            data.password.length === 0

        ) {
            showMessage({
                message: 'Formulir pendaftaran tidak boleh kosong !',
            });
        } else if (data.nama_lengkap.length === 0) {
            showMessage({
                message: 'Masukan nama lengkap ibu',
            });
        }

        else if (data.username.length === 0) {
            showMessage({
                message: 'Masukan username',
            });
        }
        else if (data.password.length === 0) {
            showMessage({
                message: 'Masukan kata sandi kamu',
            });
        } else if (data.repassword.length === 0) {
            showMessage({
                message: 'Ulangi kata sandi kamu',
            });
        } else {



            setLoading(true);
            axios
                .post(apiURL + 'register', data)
                .then(res => {
                    console.warn(res.data);
                    setLoading(false);
                    if (res.data.status == 404) {
                        SweetAlert.showAlertWithOptions({
                            title: MYAPP,
                            subTitle: res.data.message,
                            style: 'error',
                            cancellable: true
                        },
                            callback => navigation.navigate('Login'));

                    } else {
                        SweetAlert.showAlertWithOptions({
                            title: MYAPP,
                            subTitle: res.data.message,
                            style: 'success',
                            cancellable: true
                        },
                            callback => navigation.navigate('Login'));

                    }


                });
        }
    };



    return (

        <View
            style={{ flex: 1, backgroundColor: colors.background, position: "relative" }}>
            <MyHeader judul="Register" onPress={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{
                }}>


                    <View style={{
                        margin: 20,
                        borderWidth: 1,
                        borderColor: colors.border,
                        backgroundColor: colors.white,
                        elevation: 0.2,
                        borderRadius: 10,
                        padding: 20,
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: colors.primary,
                            fontFamily: fonts.primary[600],
                            fontSize: 24,
                        }}>Register</Text>

                        {/* NAMA LENGKAP */}
                        <MyInput label='Nama Lengkap' onChangeText={x => {
                            setData({
                                ...data,
                                nama_lengkap: x
                            })
                        }} iconname='person-outline' placeholder='Nama Lengkap' />
                        <MyGap jarak={20} />

                        <MyInput label='Username' onChangeText={x => {
                            setData({
                                ...data,
                                username: x
                            })
                        }} iconname='at' placeholder='Username' />

                        <MyGap jarak={20} />




                        {/*INPUT KATA SANDI */}
                        <MyInput
                            placeholder="Kata Sandi"
                            label="Kata Sandi"
                            iconname="lock-closed-outline"
                            value={data.password}
                            secureTextEntry={true}
                            onChangeText={value =>
                                setData({
                                    ...data,
                                    password: value,
                                })
                            }
                        />


                        {/* INPUT KATA SANDI ULANG */}
                        <MyGap jarak={20} />
                        <MyInput
                            borderColor={sama ? colors.primary : colors.danger}
                            borderWidth={sama ? 1 : 1}
                            placeholder="Masukan ulang kata sandi"
                            label="Masukan ulang kata sandi"
                            iconname="lock-closed-outline"
                            secureTextEntry
                            value={data.repassword}
                            onChangeText={value => {

                                if (value !== data.password) {
                                    setSama(false)
                                } else {
                                    setSama(true)
                                }

                                setData({
                                    ...data,
                                    repassword: value,
                                })
                            }

                            }
                        />
                        <MyGap jarak={20} />
                        {!loading && <MyButton title="Register" Icons="create-outline" onPress={register} />}
                        {loading && <ActivityIndicator size="large" color={colors.primary} />}
                    </View>

                </View>
            </ScrollView>

        </View>

    );
}

const styles = StyleSheet.create({
    page: {
        flexGrow: 1



    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});

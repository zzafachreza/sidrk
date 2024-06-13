import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { MyHeader } from '../../components';
export default function Stakeholder({ navigation, route }) {
    const item = route.params;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getDataTransaksi = () => {
        setLoading(true);
        axios.post(apiURL + 'stakeholder').then(res => {
            console.log(res.data);
            setData(res.data);
            setTMP(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getDataTransaksi();
    }, []);

    const __renderItem = ({ item }) => {
        return (

            <View style={{
                flex: 1,
                padding: 10,
                backgroundColor: colors.white,
                marginVertical: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.border,
                overflow: 'hidden',
                flexDirection: 'row'
            }}>
                <View style={{
                    // flex: 1,
                }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            resizeMode: 'contain',
                            height: 80,
                            width: 80,
                        }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    padding: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        color: colors.primary,
                        fontSize: 18
                    }}>{item.nama_stakeholder}</Text>
                    <Text style={{
                        fontFamily: fonts.primary[400],
                        color: colors.primary,
                        fontSize: 12
                    }}>{item.keterangan}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                        <TouchableOpacity onPress={() => {
                            console.log(item.maps);
                            Linking.openURL(item.maps);
                        }} style={{
                            width: 40,

                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon size={30} type='ionicon' name='location' color={colors.danger} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('tel:' + item.telepon)} style={{
                            width: 40,
                            marginHorizontal: 5,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon size={30} type='ionicon' name='call' color={colors.success} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }

    const [key, setKey] = useState('');
    const [TMP, setTMP] = useState({});

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background
        }}>

            <MyHeader judul={item.keterangan} onPress={() => navigation.goBack()} />
            {!loading &&
                <View style={{
                    flex: 1,
                    paddingHorizontal: 10,
                }}>
                    {/* <View style={{
                        position: 'relative'
                    }}>
                        {key.length > 0 &&

                            <TouchableWithoutFeedback onPress={() => {
                                setKey(''); setData(TMP);
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    zIndex: 99,
                                    top: 10,
                                    right: 10,
                                }}>
                                    <Icon type='ionicon' name='close' color={colors.secondary} />
                                </View>
                            </TouchableWithoutFeedback>}
                        <View style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                        }}>
                            <Icon type='ionicon' name='search' color={colors.border} />
                        </View>
                        <TextInput value={key} onChangeText={x => {
                            setKey(x);
                            if (x.length > 0) {
                                let TMPSrc = data.filter(i => i.nama_stakeholder.toLowerCase().indexOf(x.toLowerCase()) > -1);
                                if (TMPSrc.length > 0) {
                                    setData(TMPSrc);
                                }
                            } else {
                                setData(TMP);
                            }
                        }} placeholder='Pencarian . . .' style={{
                            height: 45,
                            borderWidth: 1,
                            marginBottom: 10,
                            borderRadius: 10,
                            paddingLeft: 40,
                            borderColor: colors.border,
                            fontFamily: fonts.secondary[600],
                            fontSize: MyDimensi / 4
                        }} />
                    </View> */}
                    <FlatList data={data} numColumns={1} showsVerticalScrollIndicator={false} renderItem={__renderItem} />

                </View>
            }
            {loading &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={colors.primary} />

                </View>
            }



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
import { ActivityIndicator, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import Pdf from 'react-native-pdf';
import { MyHeader } from '../../components';

export default function PdfApp({ navigation, route }) {
    const item = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        axios.post(apiURL + 'pdf', {
            judul: route.params.judul
        }).then(res => {
            console.log(res.data);
            setData(res.data[0])
        }).finally(() => {
            setLoading(false)
        })
    }, []);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <MyHeader judul={item.judul} onPress={() => navigation.goBack()} />


            {!loading &&
                <View style={{
                    flex: 1,
                    // justifyContent: 'flex-start',

                }}>
                    <Pdf
                        style={{
                            flex: 1,
                            backgroundColor: colors.background,

                        }}
                        minScale={1.0}
                        maxScale={3.0}
                        scale={1.0}
                        spacing={0}

                        trustAllCerts={false}
                        // source={{ uri: webURL + data.foto_pdf, cache: true }}
                        source={{
                            uri: data.pdf, cache: true
                        }}
                        onLoadComplete={(numberOfPages, filePath) => {
                            console.log(`Number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page, numberOfPages) => {
                            console.log(`Current page: ${page}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        onPressLink={(uri) => {
                            Linking.openURL(uri)
                        }}
                    />
                </View>
            }

            {
                loading && <View style={{
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
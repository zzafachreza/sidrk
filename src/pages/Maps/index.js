import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
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

export default function Maps({ navigation, route }) {
  const item = route.params;
  const [loading, setLoading] = useState(false)

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.background
    }}>
      <MyHeader judul={item.judul} onPress={() => navigation.goBack()} />


      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>}

      {!loading &&

        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onLoad={x => {
            console.log(x)
          }}
          onMessage={(event) => {
            console.log('event: ', event)
          }}
          // injectedJavaScript={`
          // var element1 = document.getElementsByClassName('mqxVAc')[0];
          // var element2 = document.getElementsByClassName('banner-container')[0];
          // element1.style.display = 'none';
          // element2.style.display = 'none';
          // `} 


          source={{ uri: item.maps }} style={{ flex: 1 }} />}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
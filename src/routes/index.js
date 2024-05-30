import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,

  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  GayaBelajarAudio,
  GayaBelajarReading,


  GayaBelajarKinaesthetic,
  Pendaftaran,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Maps,
  FormulirEdit,
  Stok,
  StokAdd,
  StokDetail,
  StokEdit,
  Arsip,
  ArsipDetail,
  ArsipAdd,
  ArsipEdit,
  GetStarted,
  Umum,
  Skrining,
  Hasil,
  Hitung,
  HitungHasil,
  WebApp,
  PdfApp,
  Formulir,
  Stakeholder,
  Faskes,
  FaskesDetail,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Umum" component={Umum} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WebApp"
        component={WebApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Stakeholder"
        component={Stakeholder}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Faskes"
        component={Faskes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FaskesDetail"
        component={FaskesDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Formulir"
        component={Formulir}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PdfApp"
        component={PdfApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Umum"
        component={Umum}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Skrining"
        component={Skrining}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Hasil"
        component={Hasil}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Hitung"
        component={Hitung}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="HitungHasil"
        component={HitungHasil}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Stok"
        component={Stok}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StokAdd"
        component={StokAdd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StokDetail"
        component={StokDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StokEdit"
        component={StokEdit}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Arsip"
        component={Arsip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArsipDetail"
        component={ArsipDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArsipAdd"
        component={ArsipAdd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArsipEdit"
        component={ArsipEdit}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="Pendaftaran"
        component={Pendaftaran}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Saldoku"
        component={Saldoku}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="FormulirEdit"
        component={FormulirEdit}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Datajamaah"
        component={DataJamaah}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="DataJamaahDetail"
        component={DataJamaah2}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarVisualAudio"
        component={GayaBelajarAudio}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarReading"
        component={GayaBelajarReading}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="BelajarKinaesthetic"
        component={GayaBelajarKinaesthetic}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Artikel"
        component={Artikel}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ArtikelDetail"
        component={ArtikelDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="ResepDetail"
        component={ResepDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AsupanMpasi"
        component={AsupanMpasi}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AsupanAsi"
        component={AsupanAsi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGizi"
        component={StatusGizi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGiziHasil"
        component={StatusGiziHasil}
        options={{
          headerShown: false,
        }}
      />















    </Stack.Navigator>
  );
}

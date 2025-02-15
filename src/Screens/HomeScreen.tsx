import { View, Text, Platform, ScrollView } from 'react-native';
import React from 'react';
import { TabsStackScreenProps } from '../Navigation/TabsNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeadersComponent } from './../Components/HeaderComponents/HeaderComponent';
import ImageSlider from '../Components/HomeScreenComponents/ImageSlider';

const HomeScreen = ({ navigation }: TabsStackScreenProps<'Home'>) => {
  const gotoCartScreen = () => {
    navigation.navigate('Cart');
  };

  const sliderImages = [
    'https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1739323006029-2d8452a47df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=500&q=60',
    require('../../assets/onboarding/lake.jpg'),
  ];

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: 'violet' }}>
      <HeadersComponent gotoCartScreen={gotoCartScreen} />
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: '#efefef', flexDirection: 'row', padding: 10, marginVertical: 10 }}
      >
        <ImageSlider images={sliderImages} />
      </ScrollView>
    </SafeAreaView> // ✅ Properly closed SafeAreaView
  );
};

export default HomeScreen;

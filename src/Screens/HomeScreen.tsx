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
    'https://images.unsplash.com/photo-1593642532297-4b8a0e0e2b3d?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1621059297972-3b7f4e6c7d3b?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=500&q=60',
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

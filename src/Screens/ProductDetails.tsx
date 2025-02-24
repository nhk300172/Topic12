import { View, Image, Text, Platform, ScrollView, Dimensions, Pressable, Alert, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '../Navigation/RootNavigator';
import { HeadersComponent } from '../Components/HeaderComponents/HeaderComponent';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export const ProductDetails = ({ route, navigation }: RootStackScreenProps<'productDetails'>) => {
    const { _id, images, name, price, oldPrice, inStock, color, size, description, quantity } = route.params;

    const gotoCartScreen = () => {
        navigation.navigate('Cart');
    };

    const goToPreviousScreen = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate('OnboardingScreen');
        }
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: 'white' }}>
            <HeadersComponent gotoCartScreen={gotoCartScreen} goToPrevious={goToPreviousScreen} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'pink' }}>
                <ImageBackground style={{ width, minHeight: height, marginTop: 25 }}>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#C6C8C3', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'yellow', fontWeight: '600', fontSize: 12 }}>
                                {oldPrice ? `${((1 - price / oldPrice) * 100).toFixed(1)}% off` : '0% off'}
                            </Text>
                        </View>
                        <MaterialCommunityIcons name="share-variant" size={25} color="green" />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 300, height: 300, resizeMode: 'contain' }} source={{ uri: images?.[0] || 'https://via.placeholder.com/300' }} />
                    </View>

                    <Pressable style={{ marginTop: 20, backgroundColor: 'green', padding: 15, alignItems: 'center', borderRadius: 10 }} onPress={() => Alert.alert('Add to Cart', 'Product added to cart successfully.')}
                    >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Add to Cart</Text>
                    </Pressable>
                </ImageBackground>

                <View style={{ padding: 20, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{name}</Text>
                    <Text style={{ fontSize: 18, color: 'green', marginVertical: 10 }}>{description}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price: {price} $</Text>
                    {oldPrice && <Text style={{ fontSize: 16, color: 'grey' }}>Old Price: {oldPrice} $</Text>}
                    <Text style={{ fontSize: 16, color: quantity > 0 ? 'blue' : 'red' }}>{quantity > 0 ? `In Stock - Quantity: ${quantity}` : 'Out of Stock'}</Text>
                    <Text style={{ fontSize: 16, color: 'orange' }}>Color: {color}</Text>
                    <Text style={{ fontSize: 16, color: 'red' }}>Size: {size}</Text>
                </View>

                <View style={{ padding: 20, backgroundColor: 'white', marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue' }}>Delivery</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Ionicons name="location-sharp" size={25} color="green" />
                        <Text style={{ fontSize: 14, color: 'brown', marginLeft: 5 }}>
                            Delivery to: CAMPUS THANH THAI, 7/1 Thanh Thai, Ward 14, District 10, Ho Chi Minh City
                        </Text>
                    </View>
                </View>

                <View style={{ padding: 20, backgroundColor: 'white', marginBottom: 20 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'purple', marginBottom: 10 }}>Description</Text>
    <Text style={{ fontSize: 16, color: 'green' }}>
        Size 7 (24-26kg, 122-130cm){"\n"}
        Size 8 (27-30kg, 130-137cm){"\n"}
        Size 9 (31-34kg, 137-145cm){"\n"}
        Size 10 (35-39kg, 145-150cm)
    </Text>
</View>

            </ScrollView>
        </SafeAreaView>
    );
};

import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { HeaderComp } from './screens/header/components/headerMain';

import HomeScreen from "./screens/homePage/components/homeScreenMain";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HotelListingMain from "./screens/hotelListingScreen/components/hotelListingScreenMain";
import hotelDetailScreenMain from './screens/hotelDetailPage/components/hotelDetailScreenMain';
import CheckoutMain from './screens/checkout/components/checkoutMain';


const Stack = createStackNavigator();
export default function App() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HotelListing" component={HotelListingMain} />
        <Stack.Screen name="HotelDetail" component={hotelDetailScreenMain} />
        <Stack.Screen name="Checkout" component={CheckoutMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

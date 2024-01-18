import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { HeaderComp } from './screens/header/components/headerMain';

import HomeScreen from "./screens/homePage/components/homeScreenMain";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HotelListingMain from "./screens/hotelListingScreen/components/hotelListingScreenMain";
import hotelDetailScreenMain from './screens/hotelDetailPage/components/hotelDetailScreenMain';
import AdminLogin from "./screens/admin/components/adminLogin";
import  Header  from './screens/header/components/headerMain';
import Footer from './screens/footer/components/footer';
import adminLanding from './screens/admin/components/adminLanding';

const Stack = createStackNavigator();
export default function App() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <>
      {/* <Header/> */}
      <NavigationContainer style={{marginTop:statusBarHeight}}>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="HotelListing" component={HotelListingMain}/>
            <Stack.Screen name="HotelDetail" component={hotelDetailScreenMain}/>
            <Stack.Screen name="AdminLogin" component={AdminLogin}/>
            <Stack.Screen name="AdminLanding" component={adminLanding}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

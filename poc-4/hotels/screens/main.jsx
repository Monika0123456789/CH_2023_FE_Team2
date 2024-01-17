
import AdminLogin from "./admin/components/adminLogin";
import  HomeScreenMain  from "./homePage/components/homeScreenMain";
import HotelListingScreenMain from "./hotelListingScreen/components/hotelListingScreenMain";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export let Main = () => {

    return(
        <>
            {/* <HomeScreenMain/> */}
            {/* <HotelListingScreenMain/> */}
            {/* <AdminLogin/> */}
        </>
        
        
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Home" component={HomeScreenMain}/>
        //         <Stack.Screen name="HotelListing" component={HotelListingScreenMain}/>
        //     </Stack.Navigator>
        // </NavigationContainer>

    )
}


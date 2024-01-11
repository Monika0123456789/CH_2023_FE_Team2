
import { SafeAreaView, StatusBar, View } from "react-native";

import HomeScreen from "./screens/homePage/components/homeScreenMain";


export default function App() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <SafeAreaView>
      <View style={{ marginTop: statusBarHeight }}>
        <HomeScreen />
      </View>
    </SafeAreaView>

  );
}

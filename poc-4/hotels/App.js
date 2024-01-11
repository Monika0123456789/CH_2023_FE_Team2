
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";

import HomeScreen from "./screens/homePage/components/homeScreenMain";


export default function App() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: statusBarHeight }}>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

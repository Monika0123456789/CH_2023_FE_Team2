
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Main } from './screens/main';
import { HeaderComp } from './screens/header/components/headerMain';


export default function App() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <SafeAreaView>
      <View style={{ marginTop: statusBarHeight }}>
      
        <Main/>
      </View>
    </SafeAreaView>
  );
}

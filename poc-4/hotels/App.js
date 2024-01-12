import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Main } from './screens/main';

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

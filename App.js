import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigationComponent from './components/BottomNavigation/BottomNavigation';
import { Home } from './components/Home/Home';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <Home /> */}
      <BottomNavigationComponent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

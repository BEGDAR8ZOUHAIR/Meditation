import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme';
import { User } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-sEf7w3PEA3JvmxJyFcEjYlGGyjJg1U",
  authDomain: "cattle-zoo.firebaseapp.com",
  projectId: "cattle-zoo",
  storageBucket: "cattle-zoo.appspot.com",
  messagingSenderId: "925901692717",
  appId: "1:925901692717:web:ae5627ff8a36d899c47da4",
  measurementId: "G-FD2THPF3H6"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Quicksand-Light": require("@/assets/fonts/Quicksand/Quicksand-Light.ttf"),
    "Quicksand-Regular": require("@/assets/fonts/Quicksand/Quicksand-Regular.ttf"),
    "Quicksand-Medium": require("@/assets/fonts/Quicksand/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("@/assets/fonts/Quicksand/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("@/assets/fonts/Quicksand/Quicksand-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="homeScreen" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>

  );
}
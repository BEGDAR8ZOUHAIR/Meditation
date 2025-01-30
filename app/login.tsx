
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { makeStyles, useAppTheme } from "@/theme/makeStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCustomNavigation } from "@/hooks/navigation";
import { NavigationRoutes } from "@/constants/navigation";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Header from "@/components/header/Header";


const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const navigation = useCustomNavigation();
  const theme = useAppTheme();
  const [secureEntery, setSecureEntery] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const handleLogin = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((user) => {
        if (user) navigation.navigate(NavigationRoutes.HOME);
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Login"
      />
    </View>
  );
};

export default LoginScreen;

const useStyles = makeStyles((theme: any, props?: { insets: any }) => {
  const { insets } = props || { insets: { top: 0, bottom: 0 } };
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      paddingTop: insets.top + theme.spacingVertical(4),

    }

  }
});


import {
  View,
} from "react-native";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "expo-router";
import { makeStyles, useAppTheme } from "@/theme/makeStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCustomNavigation } from "@/hooks/navigation";
import { NavigationRoutes } from "@/constants/navigation";
import Header from "@/components/header/Header";
import { TextInput, Text } from 'react-native-paper';
import ContinueButton from "@/components/ContinueButton";
import { mvs } from "react-native-size-matters";
import { GLOBAL_SCALE } from "@/constants/device";
import { useForm } from "react-hook-form";


const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const navigation = useCustomNavigation();
  const theme = useAppTheme();
  const [secureEntery, setSecureEntery] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const handleLogin = () => {
    console.log("User logged in");
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((user) => {
        if (user) navigation.navigate(NavigationRoutes.HOME);
        console.log("User logged in+++++++++++++++++++++++++++++++++++++++++++++>>>>", user);
      })
      .catch((err) => {
        alert(err?.message);
        console.log("User logged in+++++++++++++++++++++++++++++++++++++++++++++>>>>", err);
      });
  };



  return (
    <View style={styles.container}>
      <Header
      />
      <View style={styles.textContainer}  >
        {/* Title */}
        <Text style={styles.title} variant="displayLarge">
          {"Sign In"}
        </Text>

        {/* Description */}
        <Text style={styles.description} variant="bodyLarge">
          {"Sign in now to acces your excercises and saved music."}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="flat"
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="flat"
          placeholder="Password"
          style={styles.input}
          secureTextEntry={secureEntery}
          right={
            <TextInput.Icon
              icon={secureEntery ? "eye-off" : "eye"}
              onPress={() => setSecureEntery(!secureEntery)}
              style={{ marginTop: mvs(30, GLOBAL_SCALE) }}
            />
          }
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Link href="/resetPassword">
          <Text style={styles.forgotPassword} variant="titleSmall">
            {"Forgot Password?"}
          </Text>
        </Link>
      </View>
      <View style={styles.buttonContainer}>
        <ContinueButton
          middleText={"Login"}
          onPress={handleLogin}
          containerStyle={styles.loginButton}
          middleTextStyle={{ color: theme.colors.neutralVariants[900], fontSize: mvs(16, GLOBAL_SCALE) }}
        />
      </View>
      <View style={styles.textFooterContainer} >
        <Text style={styles.textFooter} variant="bodyMedium">
          {"Don’t have an account?"}{" "}
          <Link href="/register">
            <Text style={styles.link} variant="titleSmall">
              {"Sign Up"}
            </Text>
          </Link>
        </Text>
      </View>
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
      paddingHorizontal: theme.spacingHorizontal(2),
    },
    textContainer: {
      paddingHorizontal: theme.spacingHorizontal(3),
    },
    title: {
      textAlign: "left",
      marginBottom: theme.spacingVertical(2),
      color: theme.colors.neutralVariants[900],
    },
    description: {
      textAlign: "left",
      color: theme.colors.neutralVariants[900],
    },
    inputContainer: {
      width: "100%",
      paddingHorizontal: theme.spacingHorizontal(4),
      gap: theme.spacingVertical(2),
      marginTop: theme.spacingVertical(8),
    },
    input: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.large,
      paddingVertical: theme.spacingVertical(2),
      paddingHorizontal: theme.spacingHorizontal(2),
    },
    buttonContainer: {
      width: "100%",
      paddingHorizontal: theme.spacingHorizontal(2),
      gap: theme.spacingVertical(4),
    },
    loginButton: {
      backgroundColor: theme.colors.primary,
    },
    textFooterContainer: {
      paddingBottom: insets.bottom + theme.spacingVertical(1),
      paddingTop: theme.spacingVertical(3),
    },
    textFooter: {
      textAlign: "center",
      color: theme.colors.neutralVariants[800],
    },
    link: {
      color: theme.colors.primary,
    },
    forgotPasswordContainer: {
      width: "100%",
      paddingHorizontal: theme.spacingHorizontal(2),
      marginTop: theme.spacingVertical(4),
      alignItems: "center",
      marginBottom: theme.spacingVertical(6),
    },
    forgotPassword: {
      textAlign: "center",
      color: theme.colors.neutralVariants[800],
    },

  };
});


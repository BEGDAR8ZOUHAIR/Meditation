
import {
  View,
} from "react-native";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { makeStyles, useAppTheme } from "@/theme/makeStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCustomNavigation } from "@/hooks/navigation";
import { NavigationRoutes } from "@/constants/navigation";
import Header from "@/components/header/Header";
import { TextInput, Text } from 'react-native-paper';
import ContinueButton from "@/components/ContinueButton";
import { mvs } from "react-native-size-matters";
import { GLOBAL_SCALE } from "@/constants/device";


const ResetPasswordScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const navigation = useCustomNavigation();
  const theme = useAppTheme();
  const [email, setEmail] = useState<string>("");


  const handleResetPassword = () => {
    console.log("User logged in");
    sendPasswordResetEmail(getAuth(), email)
      .then(() => {
        navigation.navigate(NavigationRoutes.LOGIN);
      })
      .catch((err) => {
        alert(err?.message);
      });

  };
  return (
    <View style={styles.container}>
      <Header
      />
      <View style={styles.textContainer}  >
        {/* Title */}
        <Text style={styles.title} variant="displayLarge">
          {"Reset Password"}
        </Text>

        {/* Description */}
        <Text style={styles.description} variant="bodyLarge">
          {"Enter your email to reset your password"}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="flat"
          placeholder="Email"
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ContinueButton
          middleText={"Reset Password"}
          onPress={handleResetPassword}
          containerStyle={styles.loginButton}
          middleTextStyle={{ color: theme.colors.neutralVariants[900], fontSize: mvs(16, GLOBAL_SCALE) }}
        />
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

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
      marginTop: theme.spacingVertical(8),


    },
    buttonContainer: {
      width: "100%",
      paddingHorizontal: theme.spacingHorizontal(2),
      gap: theme.spacingVertical(4),
      marginTop: theme.spacingVertical(8),
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

import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
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
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const navigation = useCustomNavigation();
  const theme = useAppTheme();
  const [secureEntry, setSecureEntry] = useState(true);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((user) => {
        if (user) navigation.navigate(NavigationRoutes.HOME);
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={insets.bottom}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View style={styles.textContainer}>
          <Text style={styles.title} variant="displayLarge">
            {"Sign In"}
          </Text>
          <Text style={styles.description} variant="bodyLarge">
            {"Sign in now to access your exercises and saved music."}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  mode="flat"
                  placeholder="Email Address"
                  style={styles.input}
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email && (
                  <Text variant="bodySmall" style={styles.errorText}>
                    {errors.email.message}
                  </Text>
                )}
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  mode="flat"
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry={secureEntry}
                  right={
                    <TextInput.Icon
                      icon={secureEntry ? "eye-off" : "eye"}
                      onPress={() => setSecureEntry(!secureEntry)}
                      style={{ marginTop: mvs(30, GLOBAL_SCALE) }}
                    />
                  }
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.password && (
                  <Text variant="bodySmall" style={styles.errorText}>
                    {errors.password.message}
                  </Text>
                )}
              </>
            )}
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
            onPress={handleSubmit(onSubmit)}
            containerStyle={styles.loginButton}
            middleTextStyle={{
              color: theme.colors.neutralVariants[900],
              fontSize: mvs(16, GLOBAL_SCALE)
            }}
          />
        </View>
        <View style={styles.textFooterContainer}>
          <Text style={styles.textFooter} variant="bodyMedium">
            {"Don't have an account?"}{" "}
            <Link href="/register">
              <Text style={styles.link} variant="titleSmall">
                {"Sign Up"}
              </Text>
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    errorText: {
      color: theme.colors.error,
    },

  };
});







import { Image, ImageStyle, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useCustomNavigation } from "@/hooks/navigation";
import { makeStyles, useAppTheme } from "@/theme/makeStyles";
import { NavigationRoutes } from "@/constants/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContinueButton from "@/components/ContinueButton";
import { Text } from "react-native-paper";
import { mvs } from "react-native-size-matters";
import { GLOBAL_SCALE } from "@/constants/device";

const WelcomScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const navigation = useCustomNavigation();
  const theme = useAppTheme();



  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} resizeMode="contain" style={styles.bannerImage} />
      <View style={styles.contentContainer}>
        <Text variant="headlineMedium" style={styles.title}>Welcome to Meditation</Text>
        <Text variant="bodyLarge" style={styles.description}>
          Start your journey to a healthier
        </Text>
        <View style={styles.buttonContainer}>
          <ContinueButton
            middleText={"Login"}
            onPress={() => navigation.navigate(NavigationRoutes.LOGIN)}
            containerStyle={styles.loginButton}
            middleTextStyle={{ color: theme.colors.neutralVariants[900], fontSize: mvs(16, GLOBAL_SCALE) }}
          />
          <ContinueButton
            middleText={"Register"}
            onPress={() => navigation.navigate(NavigationRoutes.REGISTER)}
            containerStyle={styles.loginButton}
            middleTextStyle={{ color: theme.colors.neutralVariants[900], fontSize: mvs(16, GLOBAL_SCALE) }}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomScreen;


const useStyles = makeStyles((theme: any, props?: { insets: any }) => {
  const { insets } = props || { insets: { top: 0, bottom: 0 } };
  return {

    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      paddingTop: insets.top + theme.spacingVertical(5),
    },
    bannerImage: {
      height: mvs(200, GLOBAL_SCALE),
      width: mvs(200, GLOBAL_SCALE),
      marginBottom: theme.spacingVertical(8),
    } as ImageStyle,
    contentContainer: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: theme.spacingHorizontal(4),
      borderTopLeftRadius: theme.borderRadius.large,
      borderTopRightRadius: theme.borderRadius.large,
      marginTop: theme.spacingVertical(12),
    },
    title: {
      color: theme.colors.tertiaryVariants[900],
      textAlign: "center",
    },
    description: {
      color: theme.colors.tertiaryVariants[900],
      textAlign: "center",

    },
    loginButton: {
      backgroundColor: theme.colors.background,
    },
    buttonContainer: {
      marginTop: theme.spacingVertical(5),
      width: "100%",
      paddingHorizontal: theme.spacingHorizontal(2),
      gap: theme.spacingVertical(4),
    },
  };
});



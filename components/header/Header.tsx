import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { makeStyles, useAppTheme } from "@/theme/makeStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native-paper";

type Props = {
  title: string;
  leftIcon?: IconProp;
  onLeftPress?: () => void;
}

export default function Header({ title, leftIcon = faArrowLeftLong as any, onLeftPress }: Props) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const theme = useAppTheme();

  return (
    <View style={styles.header}>
      {leftIcon && (
        <TouchableOpacity
          onPress={onLeftPress ? onLeftPress : () => navigation.goBack()}
          style={styles.iconButton}
        >
          <FontAwesomeIcon icon={leftIcon} size={20} color="" />
        </TouchableOpacity>
      )}
      <Text variant="headlineMedium" style={styles.title}>{title}</Text>
      <View testID="rightPlaceholder" style={styles.rightPlaceholder} />
    </View>
  );
}


const useStyles = makeStyles((theme: any, props?: { insets: any }) => {
  const { insets } = props || { insets: { top: 0, bottom: 0 } };
  return {
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: insets.top + theme.spacingVertical(2),
      paddingHorizontal: theme.spacingHorizontal(4),
    },
    iconButton: {
      // padding: 10,
    },
    title: {
      color: theme.colors.neutralVariants[900],
      flex: 1,
      textAlign: "center",
    },
    rightPlaceholder: {
      // width: 40,
    },

  }
});

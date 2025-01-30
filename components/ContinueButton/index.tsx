import { makeStyles, useAppTheme } from "@/theme/makeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Text, TouchableRipple } from "react-native-paper";
import { vs } from "react-native-size-matters";
import { ContinueButtonProps } from "./types";

/**
 * 
 * List of props supported by the component:
 * @prop {Function} onPress - Mandatory - Function to be called when the button is pressed.
 * @prop {string} middleText - Optional - Text to be displayed in the middle of the button.
 * @prop {React.ReactNode} middleComponent - Optional - Custom component to be displayed in the middle of the button.
 * @prop {React.ReactNode} leftComponent - Optional - Custom component to be displayed on the left side of the button.
 * @prop {IconDefinition} leftIcon - Optional - FontAwesome icon to be displayed on the left side of the button.
 * @prop {number} leftIconSize - Optional - Size of the left icon.
 * @prop {string} leftIconColor - Optional - Color of the left icon.
 * @prop {React.ReactNode} rightComponent - Optional - Custom component to be displayed on the right side of the button.
 * @prop {IconDefinition} rightIcon - Optional - FontAwesome icon to be displayed on the right side of the button.
 * @prop {number} rightIconSize - Optional - Size of the right icon.
 * @prop {string} rightIconColor - Optional - Color of the right icon.
 * @prop {ViewStyle} containerStyle - Optional - Additional styles for the button container.
 * @prop {Animated.Value} animatedStyle - Optional - Animated styles for the button container.
 * @prop {ViewStyle} rippleContainerStyle - Optional - Additional styles for the ripple container.
 * @prop {boolean} isLoading - Optional - Flag to show loading indicator in the button.
 * @prop {boolean} fullWidth - Optional - Flag to make the button full width.
 */

export function ContinueButton({
	onPress,
	middleText,
	middleComponent,
	middleTextStyle,
	leftComponent,
	leftIcon,
	leftIconSize,
	leftIconColor,
	rightComponent,
	rightIcon,
	rightIconSize,
	rightIconColor,
	containerStyle,
	rippleContainerStyle,
	isLoading,
	disabled,
	onPressIn,
	loadingColor,
}: ContinueButtonProps) {
	const styles = ContinueButtonStyles({ disabled });
	const theme = useAppTheme();

	return (
		<TouchableRipple
			onPress={onPress}
			onPressIn={onPressIn}
			disabled={disabled || isLoading}
			style={[styles.rippleContainer, rippleContainerStyle]}
			borderless={true}
		>
			<View style={[styles.continueButton, containerStyle]}>
				{leftComponent && leftComponent}
				{leftIcon && (
					<FontAwesomeIcon
						icon={leftIcon}
						color={leftIconColor || (disabled ? theme.colors.onSurfaceVariant : theme.colors.onPrimary)}
						size={leftIconSize || vs(15)}
					/>
				)}
				{middleText && !isLoading && (
					<Text variant="labelLarge" style={[styles.textStyle, middleTextStyle]}>
						{middleText}
					</Text>
				)}
				{
					isLoading && (
						<ActivityIndicator
							color={disabled ? loadingColor || theme.colors.neutralVariants[800] : theme.colors.onPrimary}
							size="small"
						/>
					)
				}

				{middleComponent && !isLoading && middleComponent}
				{rightIcon && !isLoading && (
					<FontAwesomeIcon
						icon={rightIcon}
						color={rightIconColor || (disabled ? theme.colors.onSurfaceVariant : theme.colors.onPrimary)}
						size={rightIconSize || vs(15)}
					/>
				)}
				{rightComponent && rightComponent}
			</View>
		</TouchableRipple>
	);
}

const ContinueButtonStyles = makeStyles((theme, props?: { disabled?: boolean }) => {
	const { disabled } = props || {};
	return {
		continueButton: {
			backgroundColor: disabled ? theme.colors.neutralVariants[50] : theme.colors.tertiaryVariants[900],
			height: "100%",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			gap: theme.spacingHorizontal(2),
			borderRadius: theme.borderRadius.small,
			paddingHorizontal: theme.spacingHorizontal(4),
		},
		rippleContainer: {
			borderRadius: theme.borderRadius.small,
			height: vs(50),
		},
		textStyle: {
			color: disabled ? theme.colors.neutralVariants[200] : theme.colors.onPrimary,
		},
	};
});

export default ContinueButton;

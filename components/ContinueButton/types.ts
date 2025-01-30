import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ContinueButtonProps = {
	/**
	 * Mandatory - Function to be called when the button is pressed.
	 */
	onPress?: () => void;
	/**
	 * Optional - Text to be displayed in the middle of the button.
	 */
	middleText?: string;
	/**
	 * Optional - Custom component to be displayed in the middle of the button.
	 */
	middleComponent?: React.ReactNode;
	middleTextStyle?: StyleProp<TextStyle>;
	leftComponent?: React.ReactNode;
	/**
	 * Optional - FontAwesome icon to be displayed on the left side of the button.
	 */
	leftIcon?: IconDefinition;
	/**
	 * Optional - Size of the left icon.
	 */
	leftIconSize?: number;
	/**
	 * Optional - Color of the left icon.
	 */
	leftIconColor?: string;
	/**
	 * Optional - Custom component to be displayed on the right side of the button.
	 */
	rightComponent?: React.ReactNode;
	/**
	 * Optional - FontAwesome icon to be displayed on the right side of the button.
	 */
	rightIcon?: IconDefinition;
	/**
	 * Optional - Size of the right icon.
	 */
	rightIconSize?: number;
	/**
	 * Optional - Color of the right icon.
	 */
	rightIconColor?: string;
	/**
	 * Optional - Additional styles for the button container.
	 */
	containerStyle?: ViewStyle;
	/**
	 * Optional - Animated styles for the button container.
	 */
	animatedStyle?: ViewStyle;
	rippleContainerStyle?: ViewStyle;
	isLoading?: boolean;
	disabled?: boolean;
	onPressIn?: () => void;

	/**
	 * loading indicator color
	 */
	loadingColor?: string;
};
